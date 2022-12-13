import { useRef } from "react";
import "./style.css";
import { testUser } from "../../constants";

function Testimonial() {
  const renderStar = (amount) => {
    return [...Array(5).keys()].map((index) => ({
      id: index,
      value: index < amount - 1,
    }));
  };
  let count = 0;
  const handleSlide = (dir) => {
    const widthScroll = slideRef.current.offsetWidth;
    const items = document.querySelectorAll(".testimonial-item");
    const itemWidth = items[0].offsetWidth;
    const amountScroll = Math.round(widthScroll / itemWidth);
    const widthSlide = itemWidth * items.length + items.length * 30;
 
    if (dir === "prev") {
      count -= itemWidth * amountScroll + amountScroll * 30;
      // console.log(count);
      if (count < 0) {
        count = widthSlide - itemWidth * amountScroll - amountScroll * 30;
      }

      slideRef.current.style.transform = `translateX(${-count}px)`;
    } else {
      count += itemWidth * amountScroll + amountScroll * 30;
      // console.log(count);
      if (count > widthSlide - itemWidth * amountScroll) {
        count = 0;
      }
      slideRef.current.style.transform = `translateX(${-count}px)`;
    }
  };
  const slideRef = useRef();
  return (
    <div id="testimonial" className="testimonial wrapper">
      <div className="testimonial-container">
        <div className="testimonial-head">
          <h5>TESTIMONIAL</h5>
          <h3 className="testimonial-title">Meet Client Satisfaction</h3>
        </div>
        <div className="testimonial-slide">
          <div ref={slideRef} className="testimonial-items">
            {testUser.map((item, index) => (
              <div key={item.id} className="testimonial-item">
                <div className="testimonial-star">
                  {renderStar(item.star).map((item) => (
                    <i
                      key={item.id}
                      className={`fa-solid fa-star ${item.value ? "fill" : ""}`}
                    ></i>
                  ))}
                </div>
                <div className="testimonial-title">{item.title}</div>
                <div className="testimonial-desc">{item.desc}</div>
                <div className="testimonial-user">
                  <img
                    className="testimonial-user-avatar"
                    src={item.img}
                    alt=""
                  />
                  <div className="testimonial-user-content">
                    <p className="testimonial-name">{item.name}</p>
                    <p className="testimonial-email">{item.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-control">
          <div
            onClick={() => {
              handleSlide("prev");
            }}
            className="slide-prev"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div
            onClick={() => {
              handleSlide("next");
            }}
            className="slide-next"
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
