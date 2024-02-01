import { Love_Light } from "next/font/google";
import Link from "next/link";

const loveLight = Love_Light({
  weight: '400',

  subsets: ['latin']
})

export default function Home() {
  return (
    <main className="slide-up mt-10 max-w-2xl flex flex-col mx-auto items-center gap-4">
      <img className="max-w-[200px] " src="/images/logo-mycorner.png" alt="logo" />
      <img className="max-w-[400px]" src="/images/menu-bg.webp" alt="menu" />
      <Link href='/category' className="text-5xl hover:text-[#3e2f25]">
        <h1 className={loveLight.className}>Menu</h1>
      </Link>
    </main>
  );
}
