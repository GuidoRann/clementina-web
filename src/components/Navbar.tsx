export default function Navbar() {
  return (
    <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUy0lBtfqXg4zP0pv-8ymKv8lqLbENkDOn3rXEgr9ojw&s')] bg-cover flex flex-col justify-center items-center min-h-64 px-4">
      <h1 className="p-8 text-2xl font-bold text-black">Clementina</h1>
      <div className="">
        <div className="flex gap-7 text-black font-medium">
          <p className="cursor-pointer px-2 py-[2px] rounded-full hover:bg-violet-500 hover:text-slate-100 transition-all duration-300">
            Conocenos
          </p>
          <p className="cursor-pointer px-2 py-[2px] rounded-full hover:bg-violet-500 hover:text-slate-100 transition-all duration-300">
            Clientes
          </p>
          <p className="cursor-pointer px-2 py-[2px] rounded-full hover:bg-violet-500 hover:text-slate-100 transition-all duration-300">
            Contactanos
          </p>
        </div>
      </div>
    </div>
  );
}
