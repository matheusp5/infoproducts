import { PrismaClient, Product, User, UserCart } from '@prisma/client';
import ProductRepository from './ProductRepository';
import UserRepository from './UserRepository';
import getPrismaInstance from '@/PrismaProvider/GetPrismaInstance';

class CartRepository {
  private _prisma: PrismaClient = getPrismaInstance();
  async getUserCart(userEmail: string) {
    const user = await UserRepository.getByEmail(userEmail);
    if (user == null) return [];
    const id = user?.id;
    return await this._prisma.userCart.findMany({
      where: {
        userId: id,
      },
      include: {
        product: true,
      },
    });
  }

  getTotal(userCart: UserCart[]) {
    let total = 0;
    userCart.map((userCart: any) => {
      total += userCart.product.price * userCart.quantity;
    });
    return total;
  }

  async insertProductAtUserCart(userEmail: string, productId: string) {
    const product = await ProductRepository.getById(productId);
    const user = await UserRepository.getByEmail(userEmail);
    if (product == null || user == null) return false;
    const userCart = await this._prisma.userCart.findFirst({
      where: { userId: user?.id, productId },
    });
    console.log(userCart);

    if (userCart == null) {
      await this._prisma.userCart.create({
        data: {
          userId: user.id,
          productId: product.id,
        },
      });
    } else {
      this.addQuantity(user, product);
    }
  }

  private async addQuantity(user: User, product: Product) {
    const userCart = await this._prisma.userCart.findFirst({
      where: { userId: user?.id, productId: product.id },
    });
    if (userCart == null || user == null) return false;

    await this._prisma.userCart.update({
      where: {
        id: userCart.id,
      },
      data: {
        quantity: userCart.quantity + 1,
      },
    });
  }

  async removeQuantity(userEmail: string, productId: string) {
    const user = await UserRepository.getByEmail(userEmail);
    const userCart = await this._prisma.userCart.findFirst({
      where: { userId: user?.id, productId },
    });
    if (userCart == null || user == null) return false;

    if (userCart.quantity == 1) {
      this.deleteProductFromUserCart(userEmail, productId);
    } else {
      await this._prisma.userCart.update({
        where: {
          id: userCart.id,
        },
        data: {
          quantity: userCart.quantity - 1,
        },
      });
    }
  }

  async deleteProductFromUserCart(userEmail: string, productId: string) {
    const product = await ProductRepository.getById(productId);
    const user = await UserRepository.getByEmail(userEmail);
    if (product == null || user == null) return false;
    const cartItem = await this._prisma.userCart.findFirst({
      where: { userId: user.id, productId: product.id },
    });
    if (cartItem == null) return false;
    await this._prisma.userCart.deleteMany({
      where: {
        id: cartItem.id,
      },
    });
  }
}
export default new CartRepository();
