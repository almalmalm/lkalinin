// import Image from 'next/image';
// import styles from './page.module.css';
import Link from 'next/link';
import './styles.css';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="title">Lev Kalinin</div>
      </div>
      <div className="container">
        <div className="title">
          <Link href="/qa">QA</Link>
        </div>
        <div className="separator"></div>
        <div className="title">
          <Link href="/dev">DEV</Link>
        </div>
      </div>
    </>
  );
}
