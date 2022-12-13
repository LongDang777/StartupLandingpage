import React from 'react'
import './featureWorks.scss'

export default function FeatureWorks() {

  const data = [
    {
      id: 1,
      number: '01',
      title: 'Set disbursement Instructions',
      text : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
      id: 2,
      number: '02',
      title: 'Assembly retrieves funds from your account',
      text : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
      id: 3,
      number: '03',
      title: 'Assembly initiates disbursement',
      text : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
    {
      id: 4,
      number: '04',
      title: 'Customer receives funds payment',
      text : 'Get your blood tests delivered at home collect a sample from the your blood tests.'
    },
  ]

  return (
    <section id='featureWork'>
      <div className="featureWork__contains">
        <div className="featureWork__title">
          <p>Whats the function</p>
          <h2>Let’s see how it works</h2>
        </div>
        <div className="featureWork__content">
          {data.map(({id,number, title, text})=>(
            <div className='featureWork__item' key={id}>
              <div className="feature__number">{number}</div>
              <div className="feature__text">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
