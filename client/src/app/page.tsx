
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="content flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">¡Bienvenido a nuestra Página!</h1>
      <p className="text-lg mb-8">Explora, regístrate o ingresa para ver nuestros productos</p>
      <div className="flex space-x-4">
        <Link href={"/login"} className="btn daisy-btn boton-color">Iniciar Sesión</Link>
        <Link href={"/register"} className="btn daisy-btn boton-color">Registrarse</Link>
        <Link href={"/home"} className="btn daisy-btn boton-color">Inicio</Link>
      </div>
    </div>
  </div>
  );
}
