import "./styles.css";
import Accordion from "./Accordion/Accordion";

const DATA = [
  {
    title: "Accordion 1",
    content: "Content 1",
  },
  {
    title: "Accordion 2",
    content: "Content 2",
  },
  {
    title: "Accordion 3",
    content: "Content 3",
  },
];

export default function App() {
  return (
    <div className="App">
      <h1>React Accordion</h1>
      <Accordion data={DATA} />
    </div>
  );
}
