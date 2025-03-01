import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return <header className="flex flex-row flex-wrap gap-24 items-center justify-items-stretch p-8 sm:p-18 sm:items-start" style={{backgroundColor: '#00838F'}}>

        <Image 
        className="dark:invert rounded-full border border-solid border-transparent" 
        src="/icon.jpg" 
        alt="icon logo" 
        width={40} 
        height={40} 
        priority/>

        <Link href="/" className="text-white text-2xl"> 
        Home</Link>
        
        <Link href="/page1" className="text-white text-2xl">
        Page 1
        </Link>

        <Link href="/page2" className="text-white text-2xl">
        Page 2
        </Link>
        
    </header>;
}