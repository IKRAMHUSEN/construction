import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg'

function About() {
    return (
        <section className='section-2 py-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={AboutImg} className='w-100' />
                    </div>
                    <div className='col-md-6'>
                        <span>
                            about us
                        </span>
                        <h2>
                            Crafting structure that last a lifetime
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum obcaecati eveniet voluptas, tenetur quibusdam suscipit nihil exercitationem quidem vero. Voluptatem debitis eaque quaerat aut hic nobis possimus, voluptas quo!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
