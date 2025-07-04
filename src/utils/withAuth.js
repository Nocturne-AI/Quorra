import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      // TODO: Check if user is logged in with Supabase
      const isLoggedIn = false; // Change this when you add auth
      
      if (!isLoggedIn) {
        router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
}