import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const isLoggedIn = request.cookies.get('isLoggedIn')
if(!isLoggedIn){
    if (request.nextUrl.pathname.startsWith('/products')) {
        return NextResponse.rewrite(new URL('/Login', request.url))
      }
  return NextResponse.redirect(new URL('/Login', request.url))
}

if(isLoggedIn){
    if (request.nextUrl.pathname.startsWith('/')) {
        return NextResponse.rewrite(new URL('/products', request.url))
      }
}

   
}
 
export const config = {
  matcher: ['/products', '/'],
}