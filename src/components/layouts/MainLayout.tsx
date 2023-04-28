import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui/Navbar';

interface Props {
  children: any
}

export const MainLayout = ({ children }: Props ) => {
  return (
    <>
      <Head>
      </Head>
      
      <nav>
        <Navbar />
      </nav>
      <main style={{
        padding: '2px, 50px'
      }}>
        { children }
      </main>
    </>
  );
}
