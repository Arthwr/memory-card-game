import { useRef, useState } from "react";

export default function useScore(data) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const createActiveIdList = () => new Set(data.map((item) => item.image_id));
  const activeListRef = useRef(createActiveIdList());

  const updateBestScore = (currentScore) => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  const updateScore = (id) => {
    if (activeListRef.current.has(id)) {
      setScore((prev) => prev + 1);
      activeListRef.current.delete(id);
    } else {
      updateBestScore(score);
      setScore(0);
      activeListRef.current = createActiveIdList();
    }
  };

  return { score, bestScore, updateScore };
}
