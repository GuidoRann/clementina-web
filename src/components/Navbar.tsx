import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-row text-white rounded-full">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        onToggle={(toggled) => {
          if (toggled) {
            // open a menu
          } else {
            // close a menu
          }
        }}
      />
    </div>
  );
}
