import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Define protected routes
  const protectedRoutes = ['/dashboard'];
  const isProtectedRoute = (pathname) => protectedRoutes.some(route => pathname.startsWith(route));
    
  // Check if the current path is a protected route
  if (isProtectedRoute(context.url.pathname)) {
    // Check for authentication (you'll need to implement this based on your auth strategy)
    const isAuthenticated = checkAuthentication(context);

    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      return context.redirect('/');
    }
  }

  // Function to check authentication (implement this based on your auth strategy)
  function checkAuthentication(context) {
    // This is a placeholder. Replace with your actual authentication logic
    // For example, you might check for a valid session token in cookies
    return context.cookies.get('session_token') !== undefined;
  }
  return next();
});