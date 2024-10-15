import useFetchImages from "./hooks/useFetchImages.js";
import GameBoard from "./components/GameBoard.jsx";
import Scoreboard from "./components/Scoreboard.jsx";

const API_URL = "https://api.waifu.im/search";
const PARAMS = {
  included_tags: ["waifu"],
  height: ">=1500",
  width: "<=1200",
  byte_size: "<=614400",
  limit: "12",
  is_nsfw: "false",
  gif: false,
};

export default function GameContainer() {
  const { data, error, loading } = useFetchImages(API_URL, PARAMS);

  return (
    <div className="flex flex-col items-center gap-16 px-6">
      <Scoreboard />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <GameBoard images={data.images} />}
    </div>
  );
}
