import React from "react";
import Alerta from "./components/Alerta/Alerta";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Lista from "./components/Lista/Lista";

function App() {
  const [lista, setLista] = React.useState([]);
  const [valorInput, setValores] = React.useState("");
  const [alerta, setAlerta] = React.useState(null);
  //precisar fazer ref no input
  const inputItem = React.useRef();

  let tempo = 0;
  const handleClick = () => {
    if (valorInput.length > 0) {
      setLista([...lista, valorInput]);
      inputItem.current.focus();
      setAlerta(() => <Alerta></Alerta>);
      clearInterval(tempo);
      tempo = setTimeout(() => {
        setAlerta(null);
      }, 1000);
      setValores("");
    }
  };

  const estilos = {
    maxWidth: "500px",
    marginTop: "20px",
  };

  function handleChange(e) {
    setValores(e.target.value);
  }

  return (
    <div className="container-fluid">
      <div className="container d-flex flex-column " style={estilos}>
        <div className="row gap-4">
          <Lista lista={lista} />
          {/* <ul>
            {lista.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))}
          </ul> */}
          {alerta}
          <Input
            handleChange={handleChange}
            inputItem={inputItem}
            type="text"
            value={valorInput}
          />
          <Button handleClick={handleClick} placeholder="Digite sua tarefa" />
        </div>
      </div>
    </div>
  );
}

export default App;
