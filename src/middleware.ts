import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["en", "de"],
  defaultLocale: "en",
});

function middleware(req: any) {
  if (req.nextUrl.pathname.trim() === "/") {
    return NextResponse.redirect(new URL('/register', req.url));
  }

  return intlMiddleware(req);
}

export default middleware;
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
