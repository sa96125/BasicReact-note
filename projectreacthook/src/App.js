import "./App.css";
import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";

const data = [
  {
    title: "basic react project",
    content: "learn create-react-app",
  },
  {
    title: "react hooks",
    content: "awesome functionality",
  },
];

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);

  const { currentIdx, currentTab } = useTabs("0", data);

  return (
    <>
      <input {...name} />
      <div>
        {data.map((section, index) => (
          <button onClick={() => currentIdx(index)}>{section.title}</button>
        ))}
        <div>{currentTab.content}</div>
      </div>
    </>
  );
};

export default App;
