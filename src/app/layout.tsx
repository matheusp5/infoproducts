import Header from '@/components/Header/Header';
import './globals.css';
import Container from '@/components/Container';
import AuthSessionProvider from '@/components/AuthSessionProvider';
import Footer from '@/components/Footer/footer';

export const metadata = {
  title: 'YeShop',
  description: 'Web shop created with sz by mxtheuz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-slate-800 text-gray-300">
        <AuthSessionProvider>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
