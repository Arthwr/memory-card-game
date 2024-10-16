import useShuffleImages from "../hooks/useShuffleImages.js";
import WaifuCard from "./WaifuCard.jsx";

export default function GameBoard({ images }) {
  const { imageOrder, shuffleImageOrder } = useShuffleImages(images);

  return (
    <div className="flex flex-wrap gap-16 justify-center max-w-[80%]">
      {imageOrder.map(({ image_id, url }) => (
        <WaifuCard key={image_id} imageUrl={url} onClick={shuffleImageOrder} />
      ))}
    </div>
  );
}
