import { PrismaClient, Product, UserCart } from '@prisma/client';
import getPrismaInstance from '@/PrismaProvider/GetPrismaInstance';
import ProductRepository from './ProductRepository';
import UserRepository from './UserRepository';

class OrderRepository {
  private readonly _prisma: PrismaClient = getPrismaInstance();

  async create(userId: string, total: number, productCarts: UserCart[]) {
    const createdOrder = await this._prisma.order.create({
      data: {
        userId,
        total,
      },
    });
    const orderId = createdOrder.id;

    productCarts.forEach(async (e) => {
      const product = await ProductRepository.getById(e.productId);
      if (!product) return;
      await this._prisma.orderDetail.create({
        data: {
          orderId,
          productId: product?.id,
          quantity: e.quantity,
          total: e.quantity * product?.price,
        },
      });
    });

    return createdOrder;
  }

  async getLastOrderDate(email: string): Promise<Date | null> {
    const user = await UserRepository.getByEmail(email)
    const order = await this._prisma.user.findUnique({
      where: {
        id: user?.id,
      },
      include: {
        Order: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    });
    if(user == null) return null
  
    const lastOrder = user.Order[0];
    return lastOrder.createdAt;
  }

  async getAll() {
    return await this._prisma.order.findMany({
      include: {
        user: true,
        orderDetails: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async getById(orderId: string) {
    return await this._prisma.order.findFirst({
      where: {
        id: orderId,
      },
      include: {
        orderDetails: true,
      },
    });
  }
}

export default new OrderRepository();
