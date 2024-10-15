import WaifuCard from "./WaifuCard";

export default function GameBoard({ images }) {
  return (
    <div className="flex flex-wrap gap-16 justify-center max-w-[80%]">
      {images.map(({ image_id, url }) => (
        <WaifuCard key={image_id} imageUrl={url} />
      ))}
    </div>
  );
}
