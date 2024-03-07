import useTypeWriterEffect from "../hooks/useTypeWriterEffect";

const Typewriter = ({ text, delay }) => {
  const displayText = useTypeWriterEffect(text, delay);

  return <p>{displayText}</p>;
};

export default Typewriter;
