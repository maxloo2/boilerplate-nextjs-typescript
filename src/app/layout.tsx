import type { Metadata } from 'next';
import './styles.css';

export const metadata: Metadata = {
  title: 'boilerplate-nextjs-typescript',
  description: '',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
