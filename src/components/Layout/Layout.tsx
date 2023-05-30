import './layout.css'
import {ReactNode} from 'react';

interface LayoutProps {
  width?: string;
  children?: ReactNode;
}
export const Layout = ({children}:LayoutProps) => {

  return (
    <div className={'my-layout'}>
      {children}
    </div>
  )
}

