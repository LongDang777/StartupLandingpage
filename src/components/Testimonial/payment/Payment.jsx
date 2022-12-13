
import React from 'react'
import Button from '../../../Layouts/Button'
import payment from '../../../asset/images/payment.png'
import './payment.scss'

export default function Payment() {
  return (
    <section id='payment'>
      <div className="payment__overlay"></div>
      <div className="container payment__container">
        <div className="payment__img">
          <img src={payment} alt="" />
        </div>
        <div className="payment__right">
          <div className="payment__content">
            <div className="title payment__title">
              <p>PAYMENT SECURITY</p>
              <h2>Secure Payment Transaction System with #1 Ranking</h2>
            </div>
            <p className="description">Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
            <a href='/'>
              <Button className='btn-primary'>Learn More</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
