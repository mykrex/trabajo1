import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Page2(){
    return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-stretch min-h-screen w-full">
        <Navigation/>

        <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center">
            <h1 className="text-4xl font-bold">
                En construcción
            </h1>
        </main>
    </div>
    );
}