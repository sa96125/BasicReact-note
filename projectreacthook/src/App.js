import "./App.css";
import { useInput } from "./hooks/useInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);

  return (
    <>
      <input {...name} />
    </>
  );
};

export default App;
