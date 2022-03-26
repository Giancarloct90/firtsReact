import { useState } from "react";

const App2 = () => {
  const [txtNombre, setTxtNombre] = useState("");
  const [lblTxt, setlblTxt] = useState("");
  return (
    <>
      <div className="app2">
        <h1 className="txtTitle">Testing React Reactive</h1>
        <input
          className="txtNombre"
          type="text"
          value={txtNombre}
          placeholder="Escribe tu Nombre"
          onChange={(e) => {
            setTxtNombre(e.target.value);
          }}
        />
        <button
          className="btnTest"
          onClick={() => setlblTxt(`Tu Nombre es ${txtNombre}`)}
        >
          Click!!
        </button>
        <label htmlFor="" className="lblTest">
          {lblTxt}
        </label>
      </div>
    </>
  );
};

export default App2;
