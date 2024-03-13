type ClientsCardsProps = {
  clientName: String;
  urlPhoto: String;
  text: String;
};

export default function ClientsCards({ clientName, urlPhoto, text }: ClientsCardsProps) {
  return (
    <div className="shadow-md shadow-yellow-500 rounded-lg bg-yellow-200 m-8 px-3 py-2">
      <h1 className="pt-2">{clientName}</h1>
      <img
        src={`${urlPhoto}`}
        alt={`Foto de perfil de ${clientName}`}
        className="p-4 rounded-[30px] stroke-white stroke-2"
      />
      <p className="p-2">{text}</p>
    </div>
  );
}
