import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/swapy.png'
import IMG2 from '../../assets/ticketM.png'
import IMG3 from '../../assets/amazon1.png'
import IMG4 from '../../assets/faucet.jpg'
import IMG5 from '../../assets/Zillow.jpg'
import IMG6 from '../../assets/token1.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Sample Dex token swap Interface',
    github: 'https://github.com/Atabs0',
    demo: 'https://github.com/Atabs0/Dex'

  },
  {
    id:2,
    image: IMG2,
    title: 'Sample Decentralized Ticket Master Dapp',
    github: 'https://github.com/Atabs0',
    demo: 'https://github.com/Atabs0/tokenmaster'

  },
  {
    id:3,
    image: IMG3,
    title: 'Decentralized Amazazon clone',
    github: 'https://github.com/Atabs0',
    demo: 'https://github.com/Atabs0/dappazon'

  },
  {
    id:4,
    image: IMG4,
    title: 'Demo Faucet Dev',
    github: 'https://github.com/Atabs0',
    demo: 'https://github.com/Atabs0/FaucetDev'

  },
  {
    id:5,
    image: IMG5,
    title: 'Decentralized Zillow Clone',
    github: 'https://github.com/Atabs0',
    demo: 'https://github.com/Atabs0/ZillowClone'

  },
  {
    id:6,
    image: IMG6,
    title: 'Digital Token',
    github: 'https://github.com/Atabs0',
    demo: 'https://github.com/Atabs0/Token'

  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Devops</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo}className='btn btn-primary' target='_blank'>Code</a>
              </div>
             
            </article>
            )
          })
        }

       {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target='_blank'>Github</a>
          <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
         
        </article>*/}
      </div>
    </section>
  )
}

export default Portfolio