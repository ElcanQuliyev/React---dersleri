import React from "react";

function product(props) {
  console.log(props);
  return (
    <div>
      <div>Mehsullar</div>

      <div>
        <div>mehsul adi: {props.productName}</div>
        <div>qiymeti: {props.qiymet}</div>
      </div>
    </div>
  );
}

export default product;
