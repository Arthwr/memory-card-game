export default function WaifuCard({ imageUrl }) {
  return (
    <div className="max-w-64 max-h-80 rounded-md overflow-hidden">
      <img className="object-cover  max-w-full" width={256} height={320} src={imageUrl} alt="waifu" />
    </div>
  );
}
