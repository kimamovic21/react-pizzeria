import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
        <div className='about'>
            
            <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}>

            </div>

            <div className='aboutBottom'>
                <h1> ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Curabitur mi sem, ultrices non tincidunt nec, eleifend
                      convallis augue. Sed commodo eu nulla sed egestas. Donec
                       ac tincidunt est. Suspendisse sit amet tellus at odio
                        euismod varius. Mauris scelerisque ex libero, nec
                         elementum felis vehicula vel. In consectetur quis
                          neque quis euismod. Donec efficitur neque id auctor
                           laoreet. Vestibulum pretium, ante non ultricies
                            tincidunt, nibh libero pulvinar ipsum, vel euismod
                             ipsum sem faucibus lorem.</p>
            </div>

        </div>
    )
}

export default About
