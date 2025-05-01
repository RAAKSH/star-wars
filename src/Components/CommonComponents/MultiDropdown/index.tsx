import React, { useEffect, useState } from "react";

export const MultiDropDown = () => {
  const [series, setSeries] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState("");

  const fetchData = async () => {
    const apiData = await fetch("https://api.sampleapis.com/simpsons/episodes");
    const apiDataRes = await apiData.json();
    setSeries(apiDataRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const uniqueSeries = series.map((item) => item?.season);
  const uniqueSeasons = [...new Set(uniqueSeries)];

  const filteredEpisodes = selectedSeason
    ? series?.filter((item) => item?.season === Number(selectedSeason))
    : [];



  const episodeDetails = selectedEpisode
    ? series.find((ep) => ep.id === Number(selectedEpisode))
    : null;

  console.log("====", episodeDetails);

  return (
    <div className="mt-10 py-5">
      Select Season :{" "}
      <select
        className="w-100 border-2"
        value={selectedSeason}
        onChange={(e) => {
          setSelectedSeason(e.target.value);
          setSelectedEpisode("");
        }}
      >
        <option value={""}>---Selected season---</option>
        {uniqueSeasons?.map((item) => (
          <option key={item} value={item}>
            {" "}
            Season {item}
          </option>
        ))}
      </select>
      Select Episode :{" "}
      <select
        className="w-100 border-2"
        value={selectedEpisode}
        onChange={(e) => {
          setSelectedEpisode(e.target.value);
        }}
      >
        <option value={""}>---Selected Episode---</option>
        {filteredEpisodes.length > 0 &&
          filteredEpisodes?.map((item) => (
            <option key={item?.id} value={item?.id}>
              {" "}
              Episode {item.episode}: {item.name}
            </option>
          ))}
      </select>
      <>
        {" "}
        {episodeDetails && (
          <div className="flex flex-col">
            Image": <img src={episodeDetails?.thumbnailUrl} /><br/>
            Episode: {episodeDetails?.episode}<br/>
            name:{episodeDetails?.name}<br/>
            season:{episodeDetails?.season}<br/>
            desc: {episodeDetails?.name}<br/>
          </div>
        )}
      </>
    </div>
  );
};
