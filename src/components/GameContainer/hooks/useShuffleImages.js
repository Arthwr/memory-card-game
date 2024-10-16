import { useState } from "react";

export default function useShuffleImages(initialArray) {
  const [imageOrder, setImageOrder] = useState(initialArray);

  const shuffleImageOrder = () => {
    if (imageOrder.length === 0) return;

    const temp = [...imageOrder];
    for (let i = temp.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[rand]] = [temp[rand], temp[i]];
    }

    setImageOrder(temp);
  };

  return { imageOrder, shuffleImageOrder };
}
