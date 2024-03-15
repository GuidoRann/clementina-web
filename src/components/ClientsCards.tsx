type ClientsCardsProps = {
  clientName: String;
  urlPhoto: String;
  text: String;
};

export default function ClientsCards({ clientName, urlPhoto, text }: ClientsCardsProps) {
  return (
    <div className="flex flex-col items-center shadow-md shadow-yellow-400 rounded-lg bg-yellow-200 m-8 px-3 py-2">
      <h1 className="py-2 text-2xl">Cumple de {clientName}</h1>
      <img
        src={`${urlPhoto}`}
        alt={`Foto de perfil de ${clientName}`}
        className="w-[80%] rounded-[30px] border-[6px] border-white"
      />
      <p className="py-5 w-[85%]">{text}</p>
    </div>
  );
}
