import { NextResponse } from 'next/server'

export const config = {matcher: '/dashboard/:path*'}

export async function middleware(req) {   
    const res = await fetch(`${req.nextUrl.origin}/api/auth/session`, { headers: req.headers, cache: 'no-cache' })
    const {user: session} = await res.json()

    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return true ? NextResponse.rewrite(req.url) : NextResponse.redirect(new URL('/signings/login', req.url))
    }
}

