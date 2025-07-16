


export const Card = ({data}) => {
 

  if (!data) return null;

  return (
    <div className="border border-black p-2 rounded shadow">
     {data && <img
        className="w-full h-auto"
        src={data?.images?.fixed_height.url}
        alt={data?.title}
      />} 
    </div>
  );
};
