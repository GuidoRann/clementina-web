export default function Navbar() {
  return (
    <div className="bg-yellow-200 flex flex-row justify-center items-center px-4 text-purple-600">
      <h1 className="p-2 text-xl font-bold">Clementina</h1>
        <div className="flex font-medium">
          <p className="cursor-pointer px-3 py-[2px] hover:bg-violet-500 hover:text-slate-100 transition-all duration-300 rounded-full">
            Conocenos
          </p>
          <p className="cursor-pointer px-3 py-[2px] hover:bg-violet-500 hover:text-slate-100 transition-all duration-300 rounded-full">
            Clientes
          </p>
          <p className="cursor-pointer px-3 py-[2px] hover:bg-violet-500 hover:text-slate-100 transition-all duration-300 rounded-full">
            Contactanos
          </p>
        </div>
    </div>
  );
}
