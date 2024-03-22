import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col text-white rounded-full absolute w-full">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="font-bold w-[97%]">
        {isOpen ? (
          <div className="font-poppins text-lg transition-all duration-500 bg-white text-gray-800 h-[200px] flex flex-col justify-between rounded-xl px-5 py-2">
            <p className="h-1/3 flex items-center">Nosotros</p>
            <p className="h-1/3 flex items-center">Trabajos</p>
            <p className="h-1/3 flex items-center">Servicios</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
