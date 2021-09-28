import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
        <nav>
        <h1>
        <Link href="/">
         <a> Week 6: Assignment 7: Database Basics</a>
        </Link>
        </h1>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a className="btn btn-primary mt-3">← Back to home</a>
          </Link>
        )  
      }
       
      <footer className="webFooter">
       <small><i>Jaruwan Pattanasing</i></small>
      </footer>
    </div>
  );
}