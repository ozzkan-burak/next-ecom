import Link from 'next/link';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  preload: false,
});

export const Logo = () => {
  return (
    <Link
      href="/"
      className={`${pacifico.className} text-2xl font-bold text-gray-900`}
    >
      Shopping
    </Link>
  );
};
