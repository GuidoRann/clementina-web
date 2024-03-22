import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col text-white rounded-full absolute w-full p-2">
      <Hamburger toggled={isOpen} toggle={setOpen}/>
      <div className="font-bold w-full">
        {isOpen ? (
          <div className="font-poppins text-lg transition-all duration-500 bg-white text-gray-800 h-[200px] flex flex-col justify-between rounded-xl px-5 py-2">
            <a href="#nosotros" className="h-1/3 flex items-center">
              <p>Nosotros</p>
            </a>
            <a href="#trabajos" className="h-1/3 flex items-center">
              <p>Trabajos</p>
            </a>
            <a href="#servicios" className="h-1/3 flex items-center">
              <p>Servicios</p>
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
