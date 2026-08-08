declare module './context/AuthContext' {
  import { ReactNode } from 'react';
  export const AuthProvider: React.FC<{children: ReactNode}>;
}

declare module './context/CartContext' {
  import { ReactNode } from 'react';
  export const CartProvider: React.FC<{children: ReactNode}>;
}
