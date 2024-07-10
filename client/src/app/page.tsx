import Link from 'next/link';
import Image from 'next/image';
import Carousel from '@/components/Carrousel';

export default function LandingPage() {
  return (
    <div className="content mt-5 flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">¡Bienvenido a nuestra Olga Store!</h1>
        <p className="text-lg mb-8">Explora nuestros productos</p>

        <Carousel/>

        <div className="flex space-x-4">
          <Link href={"/login"} className="btn daisy-btn boton-color border-color">Iniciar Sesión</Link>
          <Link href={"/register"} className="btn daisy-btn boton-color border-color">Registrarse</Link>
          <Link href={"/home"} className="btn daisy-btn boton-color border-color">Inicio</Link>
        </div>
      </div>
    </div>
  );
}
