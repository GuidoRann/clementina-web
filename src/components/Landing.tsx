import { CarouselCustomNavigation } from "./Carousel";
import { IoLogoWhatsapp } from "react-icons/io";
import ServiceCards from "./ServiceCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="font-poppins bg-[#FFF6E0] text-[#61677A]">
      <section className="bg-[url('/imagenes/hero.jpg')] bg-center bg-cover h-[350px] flex flex-col drop-shadow-xl">
        <div className="lg:hidden">
          <Navbar />
        </div>
        <div className="flex flex-col w-2/3 p-4 justify-center text-white h-full">
          <p className="text-[35px] font-semibold leading-10 pt-[1px] ">
            Entregamos felicidad y creamos
            <p className="font-imperial text-[70px] leading-8 text-yellow-100">
              recuerdos
            </p>
          </p>
        </div>
      </section>
      <section className="p-4 py-10" id="servicios">
        <div className="flex flex-col items-center">
          <h3 className="text-xl py-2 font-bold font-syne">
            Nuestros servicios
          </h3>
          <div className="lg:flex lg:gap-4">
            <ServiceCards
              img="/imagenes/servicios/globos.jpg"
              serviceName="Globos"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              img="/imagenes/servicios/torta.jpg"
              serviceName="Tortas"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              img="/imagenes/servicios/deco.jpg"
              serviceName="Decoración"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              img="/imagenes/servicios/mesaDulce.jpg"
              serviceName="Mesa dulce"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center p-12 bg-[url('/imagenes/presen.jpg')] bg-center bg-cover h-80"
        id="nosotros"
      >
        <div className="border-2 border-white rounded-2xl p-1">
          <div className="flex flex-col justify-around h-32 items-center px-6 bg-white p-2 rounded-2xl">
            <h3 className="text-xl font-bold font-syne">Hola! Soy Maira</h3>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-14" id="contacto">
        <div className="bg-[#FEEBBB] rounded-[70px] py-6 flex flex-col justify-between items-center">
          <h1 className="px-6 py-2 text-4xl text-center font-bold font-syne">
            ¡Organiza tu fiesta ya!
          </h1>
          <p className="text-center pb-6">Empezá a planearlo hoy mismo</p>
          <button className="flex flex-row justify-center items-center gap-3 p-3 bg-white text-[#128C7E] rounded-full font-semibold">
            Whatsapp
            <IoLogoWhatsapp size={25} />
          </button>
        </div>
      </section>
      <section className="p-3 pb-12 flex flex-col items-center" id="momentos">
        <h3 className="pb-6 text-xl font-bold font-syne">
          Galería de Momentos
        </h3>
        <div className="w-full h-72 lg:h-[500px] lg:w-[900px]">
          <CarouselCustomNavigation />
        </div>
      </section>
      <Footer />
    </main>
  );
}
