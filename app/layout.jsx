import Session from '../app/(components)/sessionProvider'


export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body style={{margin: '0px'}}>
            <Session>{children}</Session>
        </body>
      </html>
    );
  }