export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="flex gap-16 max-w-fit text-lg px-4 py-2 mx-auto mt-8 rounded-md border border-slate-100 text-slate-700 bg-slate-200">
      <span>Current Score: {currentScore}</span>
      <span>Best Score: {bestScore}</span>
    </div>
  );
}
