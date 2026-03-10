import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman isleyir");
  });

  useEffect(() => {
    console.log("ilk render olanda isleyir");
  }, []);

  // useEffect(() => {
  //   console.log("ad cagrilan da ve ilk render olanda");
  // }, [firstName]);

  useEffect(() => {
    console.log("soyad hem ad cagrilan da ve ilk render olanda");
  }, [lastName, firstName]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Elcan")}>ad deyis</button>
      </div>
      <div>
        <button onClick={() => setFirstName("Quliyev")}>soyad deyis</button>
      </div>
    </div>
  );
}

export default App;
