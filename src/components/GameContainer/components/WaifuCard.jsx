export default function WaifuCard({ imageUrl, onClick }) {
  return (
    <div
      onClick={onClick}
      className="max-w-64 max-h-80 rounded-md overflow-hidden hover:ring-2 ring-slate-200 ring-offset-4 ring-offset-[#96A0F8] cursor-pointer"
    >
      <img className="object-cover  max-w-full" width={256} height={320} src={imageUrl} alt="waifu" />
    </div>
  );
}
