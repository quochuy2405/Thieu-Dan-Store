import React, { useEffect } from 'react';
import './styles.scss';
import $ from "jquery";
function Slider(props) {
   useEffect(()=>{
    $('.sliders_item img:gt(0)').hide();
	var time=setInterval(function(){
      $('.sliders_item :first-child').fadeOut(2000) //FadeOut là ảnh đang hiện
      .next('img').fadeIn("slow") //fadeIn ảnh tiếp theo
      .end().appendTo('.sliders_item'); // chuyển vị trí ảnh xuống cuối
  	}, 5000);
      return()=>clearInterval(time)
   },[]
   )
    return (
        <div className="Slider">
            <div className="sliders_item">
               
                <img src="https://images.pexels.com/photos/7045726/pexels-photo-7045726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <img src="https://images.pexels.com/photos/7045578/pexels-photo-7045578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <img src="https://images.pexels.com/photos/4428290/pexels-photo-4428290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <img src="https://images.pexels.com/photos/7045547/pexels-photo-7045547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <img src="https://images.pexels.com/photos/7045384/pexels-photo-7045384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
        </div>
    );
}

export default Slider;