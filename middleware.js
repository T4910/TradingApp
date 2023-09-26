import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies'
import { NextResponse } from 'next/server'

export function middleware(req) {   
    const cookies = new RequestCookies(req.headers)
    const cookieSession = cookies.get("next-auth.session-token")
    const authenticated = cookieSession ? true : false

    // if you're going to dashboard and you are authenticated, proceed, else go to login page
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        return authenticated ? NextResponse.rewrite(new URL('/dashboard', req.url)) : NextResponse.rewrite(new URL('/signings/login', req.url))
    }
    
    // FIX the routing issue
    // if you're not going to dashboard and you are authenticated go back to the dashboard, else continue
    // if ((!req.nextUrl.pathname.startsWith('/dashboard'))) {
    //     return authenticated ? NextResponse.redirect(new URL('/dashboard', req.url)) : NextResponse.next()
    // }
}

