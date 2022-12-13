import React from "react";
import "./pricingWork.scss";
import { check, unchecked } from "../../../asset/icons";
import Button from "../../../Layouts/Button";
export default function PricingWork() {
  const data = [
    {
      id: 1,
      titleAbove: "",
      packageCourse: "Free Plan",
      title: "For Small teams or office",
      type: "free",
      statusPrice: "",
      price: '',
      packageList: [
        {
          id: 1,
          status: "open",
          description: 'Ultimate access to all course, exercises and assessments',
          icon: '',
        },
        {
          id: 2,
          status: "open",
          description: 'Free access for all kind of exercise corrections with downloads.',
          icon: '',
        },
        {
          id: 3,
          status: "open",
          description: 'Total assessment corrections with free download access system',
          icon: '',
        },
        {
          id: 4,
          status: "close",
          description: 'Unlimited download of courses on the mobile app contents',
          icon: '',
        },
        {
          id: 5,
          status: "close",
          description: 'Download and print courses and exercises in PDF',
          icon: '',
        },
      ]
    },
    {
      id: 2,
      titleAbove: "Recommended",
      packageCourse: "Premium",
      title: "For startup enterprise",
      type: "premium",
      statusPrice: "Starting from",
      price: '$29.99/mo',
      packageList: [
        {
          id: 1,
          status: "open",
          description: 'Ultimate access to all course, exercises and assessments',
          icon: '',
        },
        {
          id: 2,
          status: "open",
          description: 'Free access for all kind of exercise corrections with downloads.',
          icon: '',
        },
        {
          id: 3,
          status: "open",
          description: 'Total assessment corrections with free download access system',
          icon: '',
        },
        {
          id: 4,
          status: "open",
          description: 'Unlimited download of courses on the mobile app contents',
          icon: '',
        },
        {
          id: 5,
          status: "open",
          description: 'Download and print courses and exercises in PDF',
          icon: '',
        },
      ]
    },
  ];

  const RenderItemWork = () => {
    return (
      <div className="pricingWork__content">
        {data.map((item) => {
          const { id, titleAbove, packageCourse, title, type, statusPrice, price, packageList } = item;
          return (
            <div
              key={id}
              className="pricing__item"
              style={
                type === "premium"
                  ? { backgroundColor: "white", color: "#343D48" }
                  : { backgroundColor: "#2F5392", color: "white" }
              }
            >
              <div className="item__container">
                {type === "premium" && <p className="title__above">{titleAbove}</p> }
                <div className="item__content">
                  <div className="item__top">
                    <div className="item__top-left">
                      <h2>{packageCourse}</h2>
                      <p>{title}</p>
                    </div>
                    <div className="item__top-right">
                      <span>{statusPrice}</span>
                      <div className="price">{price}</div>
                    </div>
                  </div>
                  <ul className="item__main">
                    {packageList.map(({ id, status, description }) => (
                      <li className="item__description" key={id} style={{ opacity: status !== "open" && 0.5 }}>
                        <button>
                          {status === "open" ? check : unchecked}
                        </button>
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="btn__signup">
                  <Button className={type === "premium" ? "btn-primary" : "btn-secondary"}>Signup Now</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="pricingWork">
      <div className="pricingWork__container">
        <div className="pricingWork__title">
          <p>Whats the function</p>
          <h2>Let’s see how it works</h2>
        </div>
          {RenderItemWork()}
      </div>
    </section>
  );
}
