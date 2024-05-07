import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

function middleware(request:any) {
  if(request.nextUrl.pathname.trim()=="/") {
    return NextResponse.redirect(new URL('/register', request.url));
  }
}
export default middleware;