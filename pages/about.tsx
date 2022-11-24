import Link from "next/link";
import Image from 'next/image'
import Hands from '../styles/Counting.png';

export default function About() {
  return (
    <>
      <ul>
        <li>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/posts/:id'>Posts</Link>
          <Image src={Hands} alt='Image' />
        </li>
      </ul>
    </>
  )
}