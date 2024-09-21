import { useState } from "react";

const data = [
  {
    section: "Section 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id: 1,
  },
  {
    section: "Section 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id: 2,
  },
  {
    section: "Section 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id: 3,
  },
];
const banner = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  backgroundColor: "lightgray",
  cursor: "pointer",
};

function App() {
  const [selected, setSelected] = useState(null);
  const handleClick = (id) => {
    setSelected(id);
  };
  return data.map((item) => (
    <Accordion
      item={item}
      key={item.id}
      selected={selected}
      handleClick={handleClick}
    />
  ));
}

function Accordion({ item, selected, handleClick }) {
  return (
    <>
      <div style={banner} onClick={() => handleClick(item.id)}>
        <span>{item.section}</span>
        <span>{selected === item.id ? "-" : "+"}</span>
      </div>
      {selected === item.id ? <p>{item.text}</p> : null}
    </>
  );
}
export default App;
