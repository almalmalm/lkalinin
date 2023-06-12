// import Image from 'next/image';
// import styles from './page.module.css';
import Link from 'next/link';
import './styles.css';

export default function Home() {
  return (
    <div>
      <div className="containerr">
        <div className="title">Lev Kalinin</div>
      </div>
      <div className="containerr">
        <div className="title blurr">
          <Link href="/qa">QA</Link>
        </div>
        <div className="separator"></div>
        <div className="title blurr">
          <Link href="/dev">DEV</Link>
        </div>
      </div>
    </div>
  );
}
