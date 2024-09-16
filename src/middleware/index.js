import { defineMiddleware } from "astro:middleware";
import jwt from 'jsonwebtoken';

export const onRequest = defineMiddleware((context, next) => { 
  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = (pathname) => protectedRoutes.some(route => pathname.startsWith(route));
    
  if (isProtectedRoute(context.url.pathname)) {
    const isAuthenticated = checkAuthentication(context);
    if (!isAuthenticated) {
      return context.redirect('/');
    }
  }

  function checkAuthentication(context) {
    const token = context.cookies.get('x-access-token');
    
    if (!token) {
      return false;
    }
  
    const tokenValue = token.value;
 
    try {
      const decoded = jwt.verify(tokenValue, 'olas papa');
      return true;
    } catch (error) {
      return false;
    }
  }

  return next();
});