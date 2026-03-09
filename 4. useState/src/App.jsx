import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("Elcan");
  // const [lastName, setLastName] = useState("Quliyev");

  // const [names, setNames] = useState(["Elcan", "Elnur", "Eltun", "Eldar"]);

  const [userInfo, setInfo] = useState({
    username: "quliyev",
    password: "1212",
  });

  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(true);
  return (
    // <div>
    //   <div>
    //     {firstName} {lastName}
    //   </div>

    //   <div>
    //     <button
    //       onClick={() => {
    //         setFirstName("elnur");
    //       }}
    //     >
    //       ad deyisdir
    //     </button>
    //   </div>
    // </div>

    // <div>
    //   {names.map((name, index) => (
    //     <div key={index}>{name}</div>
    //   ))}
    // </div>

    // <div>
    //   {userInfo.username} {userInfo.password}
    // </div>

    <div>
      {show ? <div> {userInfo.username} {userInfo.password}</div> : <div>melumati gosterme!</div>}
    </div>
  );
}

export default App;
