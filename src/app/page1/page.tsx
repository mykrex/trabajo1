import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Page1(){
    return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-stretch min-h-screen w-full">
        <Navigation/>

        <main className="flex flex-col gap-6 row-start-2 items-center justify-items-center py-16">
            <h1 className="text-3xl text-blue-300 font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
                Productos
            </h1>
            
            <div className="flex flex-rows flex-wrap items-center justify-items-center p-8 sm:p-18 gap-2">
                <Image 
                className = "rounded-lg object-cover object-center shadow-2xl shadow-blue-black-900/50"
                src="/jackets.jpg"
                alt="Jackets Section "
                width={180}
                height={180}
                />
                <h1 className="text-1xl font-medium mb-2">
                Descubre la chaqueta azul que fusiona modernidad y elegancia. <br/>
                Confeccionada con materiales de alta calidad, ofrece confort y durabilidad. <br/>
                Su vibrante tono resalta en cualquier look, de lo casual a lo sofisticado. <br/>
                </h1>
            </div>

            <div className="flex flex-rows flex-wrap items-center justify-items-center p-8 sm:p-18 gap-2">
                <h1 className="text-1xl font-medium mb-2">
                Descubre el gorro café casual que combina estilo y funcionalidad. <br/>
                Elaborado con materiales suaves y resistentes para una comodidad total. <br/>
                Su tono cálido complementa cualquier look, de lo cotidiano a lo relajado. <br/>
                </h1>

                <Image 
                className = "rounded-lg object-cover object-center shadow-2xl shadow-blue-black-900/50"
                src="/hats.jpg"
                alt="Hats Section "
                width={180}
                height={180}
                />
            </div>

            <div className="flex flex-rows flex-wrap items-center justify-items-center p-8 sm:p-18 gap-2">
                <Image 
                className = "rounded-lg object-cover object-center shadow-2xl shadow-blue-black-900/50"
                src="/glasses.jpg"
                alt="Glasses Section "
                width={180}
                height={180}
                />
                <h1 className="text-1xl font-medium mb-2">
                    Descubre unos lentes rojos que irradian confianza y estilo. <br/>
                    Su diseño vanguardista y detalles elegantes aseguran una mirada única. <br/>
                    Ideales para realzar cualquier look, añaden un toque vibrante en cada ocasión. <br/>
                </h1>
            </div>
        </main>
    </div>
    );
}