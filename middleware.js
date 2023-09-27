import { NextResponse } from 'next/server'

export const config = {matcher: '/dashboard/:path*'}

export async function middleware(req) {   
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/auth/session`, { headers: req.headers, cache: 'no-cache' })
    const {user: session} = await res.json()
    console.log('session in middleware: ',req.url, session)
    // const cookieSession = req.cookies.get("next-auth.session-token")
    // const authenticated = cookieSession ? true : false
    

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return session ? NextResponse.rewrite(req.url) : NextResponse.redirect(new URL('/signings/login', req.url))
    }
}

