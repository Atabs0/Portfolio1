import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
             <h3>Blockchain and Crypto Tutor</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Fundamentals of cryptocurrencies.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Blockchain Technology and Use Cases.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Decentralized Finance (DeFi).</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Security Best Practices and Wallet Setup.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Chart Analysis</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Regulatory Compliance.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Wallet Setup</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Crypto Research and Best Tools</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Market Analysis Tokenomics</p>
            </li>
            
          </ul>
        </article>
         {/* END OF UX/UI */}
         <article className='service'>
          <div className='service__head'>
             <h3>Solidity Devs</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Write, Debug and Test smart contracts in Solidity.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Deploy and interact with smart contracts on the Ethereum blockchain.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Develop decentralized applications (DApps) using Solidity.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Use Ethereum development tools like ethers.js libraries, Remix, and Hardhat to interact with smart contracts.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Keep up-to-date with Ethereum and Solidity updates and innovations</p>
            </li>
 
            
          </ul>
        </article>
         {/* END OF WEBDEV */}
         <article className='service'>
          <div className='service__head'>
             <h3>Smart Contract Auditing</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Code Review and Security Assessment</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Gas Optimization and Static Analysis</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Dynamic Testing and Rist Assessment.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Compliance Verification and Documentation Review.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Reentrancy Checks, Access Control and Upgradeability.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Privacy Considerations, Test Coverage Analysis, Communication.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/>
            <p>Continuous Learning</p>
            </li>
            
          </ul>
        </article>
         {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services