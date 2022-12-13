import React from 'react'
import './footer.scss'
export default function Footer() {

  const data = [
    {
      name: 'About Us',
      include: [
        "Support Center", "Customer Support", "About Us", "Copyright", "Popular Campaign"
      ]
    },
    {
      name: 'Our Information',
      include: [
        "Return Policy", "Privacy Policy", "Terms & Conditions", "Site Map", "Store Hours"
      ]
    },
    {
      name: 'My Account',
      include: [
        "Press inquiries", "Social media", "directories", "Images & B-roll", "Images & B-roll"
      ]
    },
    {
      name: 'Policy',
      include: [
        "Application security", "Software principles", "Unwanted software policy", "Unwanted software policy"
      ]
    }
  ]

  const Link = props => <a {...props}>{props.children}</a>;

  return (
    <footer id='footer'>
      <div className="container">
        <div className="footer__content">
          {data.map(({ name, include }) => (
            <div className='footer__item' key={name}>
              <h2>{name}</h2>
              <nav>
                {include.map((item, index) => (
                  <Link key={index}>{item}</Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
