import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="flex flex-col text-white absolute rounded-full w-full p-2 lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <div className="font-bold w-full">
          {isOpen ? (
            <div className="font-poppins text-lg transition-all duration-500 bg-white text-gray-800 h-[200px] flex flex-col justify-between rounded-xl px-5 py-2">
              <a href="#servicios" className="h-1/3 flex items-center">
                <p>Servicios</p>
              </a>
              <a href="#nosotros" className="h-1/3 flex items-center">
                <p>Nosotros</p>
              </a>
              <a href="#contacto" className="h-1/3 flex items-center">
                <p>Contactanos</p>
              </a>
              <a href="#momentos" className="h-1/3 flex items-center">
                <p>Momentos</p>
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="hidden lg:flex lg:p-4 lg:justify-center">
        <div className="bg-white rounded-full h-10 p-7 w-[93%] flex justify-between items-center ">
          <div>
            <p className="text-2xl font-bold font-syne text-teal-300">
              Clementina
            </p>
          </div>
          <div className="flex gap-8 h-full items-center">
            <a href="#servicios">
              <p className="hover:text-[#128C7E] hover:scale-110 transition-all">Servicios</p>
            </a>
            <a href="#nosotros">
              <p className="hover:text-[#128C7E] hover:scale-110 transition-all">Nosotros</p>
            </a>
            <a href="#contacto">
              <p className="hover:text-[#128C7E] hover:scale-110 transition-all">Contactanos</p>
            </a>
            <a href="#momentos">
              <p className="hover:text-[#128C7E] hover:scale-110 transition-all">Momentos</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
