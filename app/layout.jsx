// 'use client'
import '../public/styles/global.css'
// import { SessionProvider } from 'next-auth/react';
import SessionProvider from './(components)/sessionProvider'


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className=" bg-black text-white">
          <SessionProvider>
            {children}
          </SessionProvider>
        </body>
      </html>
    );
  }