import React from 'react';
import type { PageProps } from './types.ts';

const Page: React.FC<PageProps> = ({title, children}) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}

export default Page;
