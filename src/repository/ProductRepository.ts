import getPrismaInstance from '@/PrismaProvider/GetPrismaInstance';
import { PrismaClient } from '@prisma/client';
export interface TopProduct {
  name: string;
  timesPurchased: number;
}
class ProductRepository {
  private readonly _prisma: PrismaClient = getPrismaInstance();
  async getAll() {
    return await this._prisma.product.findMany({ take: 100 });
  }
  async getBySlug(slug: string) {
    return await this._prisma.product.findFirst({ where: { slug } });
  }
  async getById(id: string) {
    return await this._prisma.product.findFirst({ where: { id } });
  }
  async create(data: {
    name: string;
    description: string;
    price: number;
    slug: string;
    imageUrl: string;
  }) {
    return await this._prisma.product.create({ data });
  }
  async delete(id: string) {
    return await this._prisma.product.delete({ where: { id } });
  }
  async update(
    id: string,
    data: {
      name: string;
      description: string;
      price: number;
    },
  ) {
    return await this._prisma.product.update({
      where: { id },
      data,
    });
  }

  async getProductLikeName(name: string) {
    return await this._prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async getProducts(max: number) {
    return await this._prisma.product.findMany({
      take: max,
    });
  }

  async getTopProductsLastPeriod() {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const orderDetails = await this._prisma.orderDetail.findMany({
      where: {
        createdAt: {
          gte: oneMonthAgo, // Filtra os detalhes do pedido que foram criados no último mês
        },
      },
      include: {
        product: true,
      },
    });

    const productsMap: Map<string, number> = new Map();

    // Contar a quantidade de vezes que cada produto foi comprado
    orderDetails.forEach((orderDetail) => {
      const productId = orderDetail.productId;
      const quantity = orderDetail.quantity;

      if (productsMap.has(productId)) {
        const currentQuantity = productsMap.get(productId);
        if (!currentQuantity) return;
        productsMap.set(productId, currentQuantity + quantity);
      } else {
        productsMap.set(productId, quantity);
      }
    });

    // Ordenar os produtos por quantidade de vezes que foram comprados
    const sortedProducts = Array.from(productsMap.entries()).sort(
      (a, b) => b[1] - a[1],
    );

    // Selecionar os 5 produtos mais vendidos
    const topFiveProducts: TopProduct[] = sortedProducts
      .slice(0, 5)
      .map(([productId, timesPurchased]) => {
        const name = orderDetails.find(
          (orderDetail) => orderDetail.productId === productId,
        )?.product?.name;

        return {
          name: name || '',
          timesPurchased,
        };
      });

    return topFiveProducts;
  }
}

export default new ProductRepository();
