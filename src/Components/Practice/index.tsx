import { useNavigate } from "react-router-dom";


export const Practice = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex justify-start p-4">
        <button
          className="bg-blue-500 text-white font-semibold p-2 rounded-xl"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    
    </div>
  );
};
