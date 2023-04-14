import '../styles/globals.css';
import { Yellowtail, Roboto, Open_Sans } from 'next/font/google';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

export const metadata = {
  title: 'Organick',
  description: 'Best place to buy organic food',
  // keywords: ['Frontend', 'Fullstack', 'Developer', 'Next.js'],
  // openGraph: {
  //   title: 'Vladimir Infante - Portfolio',
  //   description: "Vladimir Infante's Developer Portfolio built with NextJs 13.2",
  //   images: [
  //     {
  //       url: 'https://vlad-infante-portfolio.vercel.app/assets/portfolio-home-preview.png',
  //       width: 752,
  //       height: 400,
  //       alt: 'portfolio thumbnail',
  //     },
  //   ],
  // },
};
const yellowtail = Yellowtail({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-yellowtail',
  preload: true,
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-roboto',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-opensans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${yellowtail.variable} ${roboto.variable} ${openSans.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer text='footer' />
      </body>
    </html>
  );
}
