import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg'
import Header from '../common/Header';
import Footer from '../common/Footer';

function Home() {
    return (
        <>
            <Header />

            <main>
                <section className='section-1'>
                    <div className='hero d-flex align-items-center '>
                        <div className='container-fluid'>
                            <div className='text-center'>
                                <span>Welcome Amazing Constructions</span>
                                <h2>Crafting dream with <br /> precision and excellence.</h2>
                                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise</p>
                                <div className='mt-4'>
                                    <a className='btn btn-primary '>Contact me</a>
                                    <a className='btn btn-secondary ms-2'>View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit ad expedita impedit, distinctio quae reiciendis quam odit laudantium vel itaque quos assumenda iste ex minus minima magni praesentium totam!</p>
                            </div>

                        </div>

                    </div>
                </section>
            </main>
            <Footer />
         
        </>
    )
}

export default Home
