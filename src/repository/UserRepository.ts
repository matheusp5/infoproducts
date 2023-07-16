import getPrismaInstance from '@/PrismaProvider/GetPrismaInstance';
import { PrismaClient } from '@prisma/client';
import { genSaltSync, hash, hashSync } from 'bcrypt';

class UserRepository {
  private salt: number = 8;
  private readonly _prisma: PrismaClient = getPrismaInstance();
  async getByEmail(email: string) {
    return await this._prisma.user.findFirst({
      where: { email },
      include: {
        UserCart: true,
        Order: true,
        Invoice: true,
      },
    });
  }

  async countUsers() {
    return await this._prisma.user.count();
  }

  async getById(id: string) {
    return await this._prisma.user.findFirst({
      where: { id },
      include: {
        UserCart: true,
        Order: true,
        Invoice: true,
      },
    });
  }

  async insertUser(name: string, email: string, password: string) {
    return await this._prisma.user.create({
      data: {
        name,
        email,
        password: await hashSync(password, this.salt),
      },
    });
  }

  async getAll() {
    return await this._prisma.user.findMany({ include: { Order: true } });
  }
}

export default new UserRepository();
