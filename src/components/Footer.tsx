import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#FEEBBB] lg:h-[230px] py-6 flex flex-col justify-between items-center">
        <h1 className="px-6 py-2 text-4xl text-center  font-bold font-syne">
          ¡Organiza tu fiesta ya!
        </h1>
        <p className="text-center pb-6 lg:pb-4 lg:text-lg">
          Empezá a planearlo hoy mismo
        </p>
        <div className="flex gap-4">
          <button className="hover:scale-110 transition-all flex flex-row justify-center items-center gap-2 hover:text-[#128C7E] rounded-full font-semibold">
            <IoLogoWhatsapp size={35} />
          </button>
          <button className="hover:scale-110 transition-all flex flex-row justify-center items-center gap-2 rounded-full font-semibold hover:text-[#DD2A7B]">
            <BsInstagram size={33} />
          </button>
        </div>
      </div>
      <div className="text-center font-syne font-semibold bg-[#FEEBBB]">
        <h3> &lt;&gt; con ❤️ por GuidoCode </h3>
      </div>
    </div>
  );
}
