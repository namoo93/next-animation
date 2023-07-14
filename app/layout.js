import './globals.css';

export const metadata = {
  title: 'animations',
  description: 'Page with animation and interaction',
};

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
