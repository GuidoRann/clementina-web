import { CarouselCustomNavigation } from "./Carousel";
import { IoLogoWhatsapp } from "react-icons/io";
import ServiceCards from "./ServiceCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="font-poppins bg-[#FFF6E0] text-[#61677A]">
      {/* ------------------------ Seccion principal ---------------------------- */}
      <section className="bg-[url('/images/hero.jpg')] bg-center bg-cover h-[350px] lg:h-[850px] flex flex-col drop-shadow-xl">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col w-2/3 lg:w-[60%] p-4 justify-center lg:block lg:pt-16 text-white h-full">
          <p className="text-[35px] lg:text-[95px] lg:px-28 font-semibold lg:leading-[105px] leading-10 pt-[1px] ">
            Entregamos felicidad y creamos
            <p className="font-imperial text-[70px] lg:text-[180px] leading-8 lg:leading-[85px] text-yellow-100">
              recuerdos
            </p>
          </p>
        </div>
      </section>
      {/* --------------------- Presentacion sericios --------------------------- */}
      <section
        className="p-4 py-10 lg:h-[700px] lg:flex lg:items-center lg:justify-center"
        id="servicios"
      >
        <div className="flex flex-col items-center">
          <h3 className="text-xl lg:text-4xl lg:pb-12 py-2 font-bold font-syne">
            Nuestros servicios
          </h3>
          <div className="lg:flex lg:gap-8">
            <ServiceCards
              img="/images/servicios/globos.jpg"
              serviceName="Globos"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              img="/images/servicios/torta.jpg"
              serviceName="Tortas"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              img="/images/servicios/deco.jpg"
              serviceName="Decoración"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              img="/images/servicios/mesaDulce.jpg"
              serviceName="Mesa dulce"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </section>
      {/* ---------------------- Presentacion personal ------------------------- */}
      <section
        className="flex flex-col justify-center items-center p-12 bg-[url('/images/presen.jpg')] bg-center bg-cover h-80 lg:h-[700px]"
        id="nosotros"
      >
        <div className="border-2 lg:border-[3px] border-white rounded-2xl p-1 lg:p-2">
          <div className="flex flex-col justify-around lg:justify-evenly h-36 lg:h-[320px] items-center px-6 bg-white p-2 rounded-2xl">
            <h3 className="text-xl lg:text-4xl font-bold font-syne">
              Hola! Soy Maira
            </h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </section>
      {/* -------------------------- Seccion Contacto ------------------------- */}
      <section className="px-6 py-14 lg:py-28 lg:px-[230px]" id="contacto">
        <div className="bg-[#FEEBBB] rounded-[70px] lg:h-[230px] py-6 flex flex-col justify-between items-center">
          <h1 className="px-6 py-2 text-4xl text-center font-bold font-syne">
            ¡Organiza tu fiesta ya!
          </h1>
          <p className="text-center pb-6 lg:pb-4 lg:text-lg">Empezá a planearlo hoy mismo</p>
          <button className="hover:scale-105 transition-all flex flex-row justify-center items-center gap-2 p-3 bg-white text-[#128C7E] rounded-full font-semibold">
            Whatsapp
            <IoLogoWhatsapp size={25} />
          </button>
        </div>
      </section>
      {/* -------------------------- Carrousel Momentos ------------------------- */}
      <section className="p-3 pb-12 flex flex-col items-center" id="momentos">
        <h3 className="pb-6 text-xl lg:text-4xl font-bold font-syne">
          Galería de Momentos
        </h3>
        <div className="w-full h-72 lg:h-[700px] lg:w-[1200px]">
          <CarouselCustomNavigation />
        </div>
      </section>
      <Footer />
    </main>
  );
}
