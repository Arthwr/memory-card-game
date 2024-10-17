import { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder.jsx";

export default function WaifuCard({ imageUrl, onClick }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      onClick={onClick}
      className="max-w-64 max-h-80 rounded-md overflow-hidden hover:ring-2 ring-slate-200 ring-offset-4 ring-offset-[#96A0F8] cursor-pointer"
    >
      {isLoading && <ImagePlaceholder />}
      <img
        className={`object-cover  max-w-full ${isLoading ? "opacity-0" : "opacity-100"}`}
        width={256}
        height={320}
        src={imageUrl}
        alt="waifu"
        onLoad={handleImageLoad}
      />
    </div>
  );
}
