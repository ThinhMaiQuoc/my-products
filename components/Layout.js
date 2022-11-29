import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Thinh Ecommerce Website"></meta>
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link data-testid='Home' href="/" className="text-lg font-bold">
              Thinh&apos;s Awesome Ecommerce App
            </Link>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Thinh</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
