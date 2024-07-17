import React from 'react';
import { useSelector } from 'react-redux';
import './LandingPage.css';

const PaymentDone = () => {
  const exampleState = useSelector((state) => state.example);

  return (
    <div className="landing-page" dir="rtl">
      <nav className="navbar">
        <ul className="menu">
          <li><a href="#home">صفحه اصلی</a></li>
          <li><a href="#about">اینستاگرام ما</a></li>
          <li><a href="#services">خدمات</a></li>
        </ul>
      </nav>
      <div className="content">
        <h1>لورم ایپسوم متن ساختگی با تولید </h1>
        <p>{exampleState}</p>
      </div>
    </div>
  );
};

export default PaymentDone;
