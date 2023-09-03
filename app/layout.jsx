'use client'
// import Session from '../app/(components)/sessionProvider'
import '../public/styles/global.css'
import { SessionProvider } from 'next-auth/react';


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body className="bg-white text-black">
          <SessionProvider>
            {children}
          </SessionProvider>
        </body>
      </html>
    );
  }