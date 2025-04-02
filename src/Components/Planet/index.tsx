import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Planet = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [search, setSearch] = useState("");

  const onChangeText = (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    setSearch(searchText);

    if (searchText === "") {
      setFilteredPlanets([]); // Hide table when search is empty
      return;
    }

    const newFilteredPlanets = userData.filter((planet) =>
      planet.name.toLowerCase().includes(searchText)
    );

    console.log("-====", newFilteredPlanets);
    setFilteredPlanets(newFilteredPlanets);
  };

  const fetchData = async () => {
    const data = await fetch("https://swapi.dev/api/planets");
    console.log("data", data);
    const dataJson = await data.json();

    setUserData(dataJson?.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getPopulationIcon = (population: string) => {
    if (population === "unknown") return "";
    const popNum = parseInt(population, 10);
    if (popNum < 10000) return "🧑";
    if (popNum < 1000000) return "👥";
    return "👨‍👩‍👧‍👦";
  };

  const handleClick = () => {
    navigate("/commonComponents");
  };

  return (
    <div className="relative min-h-screen">
    
    <div className="absolute top-0 right-4 bg-gray-200 p-2 rounded-lg shadow-lg cursor-pointer">
      <bu onClick={handleClick} className="font-semibold text-blue-600">
        Common Components
      </bu>
    </div>
  
   
    <div className="flex flex-col items-center justify-center px-4 mt-10">
      <h1 className="text-3xl font-bold">Star Wars</h1>
  
      <div className="text-lg font-bold mt-4">Search for Planets</div>
  
      <div className="p-4">
        <input
          id="search"
          type="text"
          onChange={(e) => onChangeText(e)}
          className="border-2 p-2 w-full"
        />
      </div>
    </div>
  </div>
  

  );
};

export default Planet;
