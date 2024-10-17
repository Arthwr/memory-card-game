import useFetchImages from "./hooks/useFetchImages.js";
import svgLoader from "../../assets/svgLoader.svg";
import GameBoard from "./components/GameBoard.jsx";

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
    <>
      {loading && (
        <div className="flex justify-center gap-2 items-center mt-10">
          <span>Loading</span>
          <img width={32} height={32} src={svgLoader} alt="" />
        </div>
      )}
      {error && <div className="text-center mt-10">Error: {error}</div>}
      {data && <GameBoard imageData={data.images} />}
    </>
  );
}
