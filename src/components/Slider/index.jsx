import React, { useEffect, useState } from "react";
import "./styles.scss";
const ListImage = [
  {
    link_img:
      "https://images.pexels.com/photos/7045384/pexels-photo-7045384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    link_img:
      "https://images.pexels.com/photos/7045547/pexels-photo-7045547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    link_img:
      "https://images.pexels.com/photos/4428290/pexels-photo-4428290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    link_img:
      "https://images.pexels.com/photos/7045726/pexels-photo-7045726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

function Slider() {
  var [count, SetCount] = useState(0);
  var [time, Settime] = useState(1800);
  useEffect(() => {
    const list = document.querySelector(".Slider_imgs");

    const list_dots = document.querySelectorAll(".dots .dot");
    const dotactive = document.querySelector(".dots .dot.dot_active");
    if (dotactive) {
      dotactive.classList.remove("dot_active");
    }
    list.style.transform = `translateX(calc( (100% / ${
      ListImage.length 
    }) * -${count} )`;
    list_dots[count].classList.add("dot_active");
  }, [count]);

  useEffect(() => {
    const Time = setInterval(() => {
      var temp = count++;
      if (temp >ListImage.length - 1) {
        SetCount(0);
      } else {
        SetCount(temp++);
      }

      Settime(1800);
    }, time); 
    return () => {
      clearInterval(Time);
    };
  });

  return (
    <>
      <div className="Sliders">
        <ul
          className="Slider_imgs"
          style={{ width: (ListImage.length ) * 100 + "%" }}
        >
          {ListImage.map((img, index) =>
            img.link_img ? (
              <li className="Slider_img" key={index}>
                <img src={img.link_img} alt="" />
              </li>
            ) : (
              <div key={index}></div>
            )
          )}
        </ul>
      </div>
      <div className="dots">
        {ListImage.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              SetCount(index);
              Settime(0);
            }}
          >
            {" "}
            <div className="dot"></div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Slider;
