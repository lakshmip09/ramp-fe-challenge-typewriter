import { useState, useEffect } from "react";

function useTypeWriterEffect(text, delay) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(
          (prevText) => prevText + text[currentIndex].toUpperCase()
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [text, delay, currentIndex]);

  return displayedText;
}

export default useTypeWriterEffect;
