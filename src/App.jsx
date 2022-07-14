import { useState } from "react";
import "./App.css";
import { Bellow } from "./components/Bellow";

const data = [
  {
    heading: "What is your return policy?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    heading: "How do I track my order?",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sed quasi totam?",
  },
  {
    heading: "Can I purchase item again?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores rem, magni esse corporis voluptates ab nulla voluptatum, aut ipsum, quaerat laudantium? Quae animi, cumque optio aut nemo consequuntur eveniet?",
  },
];

function App() {
  const [bellowIndex, setBellowIndex] = useState(-1);

  const show = (index) => {
    if (index === bellowIndex) {
      setBellowIndex(-1);
    } else {
      setBellowIndex(index);
    }
  };

  return (
    <div>
      {data.map((acc, index) => (
        <Bellow
          key={index}
          mainText={acc.heading}
          description={acc.desc}
          showDesc={bellowIndex === index}
          handleClick={() => show(index)}
        />
      ))}
    </div>
  );
}

export default App;
