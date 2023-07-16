import Title from '@/components/Title';
import Cart from '@/components/Checkout/CheckoutCart';
import CheckoutForm from '@/components/Checkout/CheckoutForm';

export default function Checkout() {
  return (
    <div className="mb-16">
      <Title>Checkout</Title>
      <Cart />
      <CheckoutForm />
    </div>
  );
}
