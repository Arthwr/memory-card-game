import useScore from "../hooks/useScore.js";
import useShuffleImages from "../hooks/useShuffleImages.js";
import Scoreboard from "./Scoreboard.jsx";
import WaifuCard from "./WaifuCard.jsx";

export default function GameBoard({ imageData }) {
  const { score, bestScore, updateScore } = useScore(imageData);
  const { imageOrder, shuffleImageOrder } = useShuffleImages(imageData);

  const handleClick = (id) => {
    updateScore(id);
    shuffleImageOrder();
  };

  return (
    <div className="flex flex-col items-center gap-16 px-6">
      <Scoreboard currentScore={score} bestScore={bestScore} />
      <div className="flex flex-wrap gap-16 justify-center max-w-[80%]">
        {imageOrder.map(({ image_id, url }) => (
          <WaifuCard key={image_id} imageUrl={url} onClick={() => handleClick(image_id)} />
        ))}
      </div>
    </div>
  );
}
