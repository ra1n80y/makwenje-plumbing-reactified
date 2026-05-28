declare module 'react-router-bootstrap' {
  import { ComponentType, ReactNode } from 'react';
  import { LinkProps } from 'react-router-dom';

  export const LinkContainer: ComponentType<
    LinkProps & { children: ReactNode; className?: string }
  >;
  // You can expand this if you use other components from the library
}