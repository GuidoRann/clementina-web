import { CarouselCustomNavigation } from "./Carousel";
import ServiceCards from "./ServiceCards";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <main className="font-poppins bg-[#FFF6E0] text-[#61677A]">
      <section className="bg-[url('/imagenes/servicios/foto2.jpg')] bg-center bg-cover h-[350px] flex flex-col drop-shadow-xl">
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
          {/* <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corrupti ipsa autem. Sapiente dignissimos, perspiciatis totam ab
            autem et quos error nesciunt iure similique vel. Tempora distinctio
            reiciendis dolor. Error.lorem
          </p> */}
          <div className="lg:flex lg:gap-4">
            <ServiceCards
              serviceName="Globos"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              serviceName="Tortas"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              serviceName="Decoración"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
            <ServiceCards
              serviceName="Mesa dulce"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-12 p-20" id="nosotros">
        <div className="flex flex-col justify-center items-center px-6 bg-white stroke-white stroke-2 p-2 rounded-2xl">
          <h3 className="text-xl py-5 font-bold font-syne">Sobre nosotros</h3>
          <p className="text-center pb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </section>
      <section className="px-4 py-8">
        <div className="bg-[#FEEBBB] rounded-[70px] py-6 flex flex-col justify-between items-center">
          <h1 className="px-6 py-2 text-4xl text-center font-bold font-syne">
            ¡Organiza tu fiesta ya!
          </h1>
          <p className="text-center pb-6">Empezá a planearlo hoy mismo</p>
          <button className="p-3 bg-green-400 text-white rounded-full">
            WhatsAPP
          </button>
        </div>
      </section>
      <section className="p-3 py-10 flex flex-col items-center">
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
