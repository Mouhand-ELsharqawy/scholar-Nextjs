import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Scholar App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        {/* <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="/assets/js/isotope.min.js"></script>
        <script src="/assets/js/owl-carousel.js"></script>
        <script src="/assets/js/counter.js"></script>
        <script src="/assets/js/custom.js"></script> */}
        <script src='main.js'></script>
      </body>
    </html>
  )
}
