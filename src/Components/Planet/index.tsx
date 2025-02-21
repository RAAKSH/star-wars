import { useEffect, useState } from "react";

const Planet = () => {
  const [userData, setUserData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [search, setSearch] = useState("");

  const onChangeText = (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    console.log("====",searchText);
    
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

  return (
    <div className="flex flex-col items-center justify-center  px-4  mt-10">
      <div className="text-lg font-bold">Search for planets </div>
      <div className="p-4">
        <input
          id="search"
          type="text"
          onChange={(e) => onChangeText(e)}
          className="border-2 p-2 w-full"
        />
      </div>

      {filteredPlanets?.length > 0 ? (
        <>
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold border">
                  Population
                </th>
              </tr>
            </thead>
            <tbody>
            {filteredPlanets.map((planet, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-6 py-3 border">{planet.name}</td>
                <td className="px-6 py-3 border text-2xl text-center">
                  <span title={`Population: ${planet.population}`}>
                    {getPopulationIcon(planet.population)}
                  </span>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          <br />
        </>
      ) : search ? (
        <div className="text-red-500 mt-4">
          No planets match the search term.
        </div>
      ) : null}
    </div>
  );
};

export default Planet;
