import Image from "next/image";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-intems-center min-h-screen py-10">
      <Navigation/>

      <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center">
        <h1 className="text-4xl font-bold mb-4">
        ¿Quieres cambiar de guardarropa?
        </h1>

        <h2 className="text-2xl font-medium mb-2">
          Conoce nuestras ofertas.
        </h2>

        <a className="px-4 py-4 bg-blue-500 text-white rounded-full hover:bg-blue-400"
        href="/page1">
          Productos
        </a>
      </main>
    </div>
  );
}
