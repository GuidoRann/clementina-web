export default function Navbar() {
  return (
    <div className="flex flex-col justify-center pt-16 w-screen">
      <h1 className="text-4xl py-16">Clementina</h1>
      <div className="flex justify-center pb-20">
        <div className="flex w-3/6 justify-between">
          <p className="cursor-pointer px-2 py-[2px] rounded-full hover:bg-violet-500 hover:text-slate-100">
            Inicio
          </p>
          <p className="cursor-pointer px-2 py-[2px] rounded-full hover:bg-violet-500 hover:text-slate-100">
            Sobre nosotros
          </p>
          <p className="cursor-pointer px-2 py-[2px] rounded-full hover:bg-violet-500 hover:text-slate-100">
            Nuestros clientes
          </p>
          <p className="cursor-pointer px-2 py-[2px] rounded-full hover:bg-violet-500 hover:text-slate-100">
            Contactanos
          </p>
        </div>
      </div>
    </div>
  );
}
