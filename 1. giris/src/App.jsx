import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // bu hissede js kodlari yazilacaq
  // let a = 15;
  // const firstName = "Elcan";

  // let num1 = 10;
  // let num2 = 80;

  // let son = false;

  let isimler = ["Elcan", "Elnur", "Eltun", "Eltac", "Elman"];
  return (
    //  burda html kodlari yazilir
    // js kodunu gostermek ucun bezekli morterizeden istifade edilir
    <div>
      {/* <p>a nin qiymeti : {a}</p>
      <p>istifadeci adi : {firstName}</p> */}
      {/* <p>Ortalama : {(num1 + num2) / 2}</p> */}
      {/* {son ? <p>Prava ala bildin</p> : <p>Prava ala bilmezsen</p>} */}
      {/* {(num1 + num2) / 2 >= 50 ? (
        <p>imtahandan kecdin</p>
      ) : (
        <p>imtahandan kece bilmedin </p>
      )} */}

      {isimler.map((isim, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }}
          key={index}
        >
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;
