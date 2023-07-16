import UserRepository from '@/repository/UserRepository';
import { compare } from 'bcrypt';

class AuthService {
  async authUser(email: string, password: string) {
    const user = await UserRepository.getByEmail(email);
    if (user == null) return false;
    if (await compare(password, user.password)) return true;
    return false;
  }
}

export default new AuthService();
