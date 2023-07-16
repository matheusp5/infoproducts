import UserRepository from '@/repository/UserRepository';
import { Session } from 'next-auth';
import { redirect } from 'next/navigation';

class AuthorizationService {
  async isAdminOrRedirect(session: Session) {
    if (session == null || session.user == null || session.user.email == null)
      return redirect('/');
    const user = await UserRepository.getByEmail(session.user.email);
    if (user == null) return redirect('/');
    if (user.role != 'admin') return redirect('/');
  }
}
