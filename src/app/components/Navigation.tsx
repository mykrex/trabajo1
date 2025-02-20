import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return <div className="flex gap-8 items-center justify-items-center p-8 sm:p-14" style={{backgroundColor: '#00838F'}}>

        <Image 
        className="dark:invert rounded-full border border-solid border-transparent" 
        src="/icon.jpg" 
        alt="icon logo" 
        width={80} 
        height={80} 
        priority/>

        <Link href="/" className="text-white-400"> 
        Home</Link>
        
        <Link href="/page1" className="text-white-400">
        Page 1
        </Link>

        <Link href="/page3" className="text-white-400">
        Page 2
        </Link>
        
    </div>;
}