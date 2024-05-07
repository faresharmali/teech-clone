import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

function middleware(req: any) {
  if (removeLocale(req.nextUrl.pathname.trim()) === "/") {
    return NextResponse.redirect(new URL('/register', req.url));
  }

  return intlMiddleware(req);
}


const removeLocale = (url: string) => {
  return url.replace('en', '').replace('de', '');
}


export default middleware;

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};