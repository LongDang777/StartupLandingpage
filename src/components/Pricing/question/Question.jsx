import React from 'react'
import { useState } from 'react'
import './question.scss'

export default function Question() {

  const [show, setShow] = useState(1)

  const questionData = [
    {
      id: 1,
      hidden: false,
      question: 'How to contact with riders emergency ?',
      answer: 'Get your website ads tests delivered at let collect sample from the victory of the managements that supplies best design system which guidelines ever with multiple features.'
    },
    {
      id: 2,
      hidden: true,
      question: "App installation failed, how to update system information?",
      answer: 'Rhino skin maybe thick but it can be quite sensitive to sunburns and insect bites which is why they like wallow so much – when the mud dries it acts as protection from the sunburns and insects.'
    },
    {
      id: 3,
      hidden: true,
      question: "Website response taking time, how to improve?",
      answer: 'Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home.'
    },
    {
      id: 4,
      hidden: true,
      question: "New update fixed all bug and issues",
      answer: 'If you’re looking to hunt a unicorn, but don’t know where to begin, try Lake Superior State University in Sault Ste. Marie, Michigan. Since 1971, the university has issued permits to unicorn questers.'
    },
  ]

  return (
    <div id='question'>
      <div className="container">
        <div className="title">
          <p>GET YOUR QUESTION ANSWER</p>
          <h2>Frequently asked question</h2>
        </div>
        <div className="question__container">
          {questionData.map(({ id, question, answer }) => (
            <div key={id} className="question__content" onClick={() => setShow(id)}>
              <div className={`question ${show === id && "show"}`}>
                <span></span>
                {question}
              </div>
              <div className={`answer ${show === id && "show"}`}>
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
