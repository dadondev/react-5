import { useState } from "react";
import "./app.css";

const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "c"];
const phone = [];
let img = "";
const logos = {
  90: "./beeline.png",
  91: "./beeline.png",
  95: "./uzmobile.jpeg",
  99: "./uzmobile.jpeg",
  94: "./ucell.png",
  93: "./ucell.png",
  33: "./humans.jpeg",
};
function Site() {
  const [number, setNumber] = useState(1);
  const putImgUrl = (str) => {
    if (logos[Number(str)]) {
      console.log(str);
      img = logos[Number(str)];
    }
  };

  const clicked = (n) => {
    if (n === "c") {
      phone.pop();
    } else if (n === 0 || n) {
      phone.push(n);
      setNumber(number + 1);
    }
    setNumber(number + 1);
  };

  const display = () => {
    let str = "";
    phone.forEach((n, i) => {
      if (i === 1) {
        putImgUrl(str + n);
        str = str + n + " ";
      } else if (i === 4 || i === 6) {
        str = str + n + "-";
      } else {
        str += n;
      }
    });
    return str;
  };
  return (
    <div className="main">
      <div className="display">
        <div className="display-logo">
          <img src={img} alt="logo" />
        </div>
        <div className="display-main">
          <span className="phone-number">{display()}</span>
        </div>
      </div>
      <div className="buttons">
        {btns.map((n, i) => (
          <button
            key={i}
            className="button"
            onClick={() => {
              clicked(n);
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Site;
