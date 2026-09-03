import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ServiceImg from '../../assets/images/construction1.jpg';
import ProjectImg from '../../assets/images/construction2.jpg';

function Projects() {
    return (
        <>
            <div>
                <Header />
                <main>
                    <Hero preHeading='Quality. Integrity. Value.' heading='Our Projects' text='We excel at transforming visions into reality through<br />outstanding craftsmanship and precise' />
                    <section className='section-3 bg-light py-5'>
                        <div className='container py-5'>
                            <div className='section-header text-center'>
                                <span>Our Projects</span>
                                <h2>Recent Projects</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            </div>
                        </div>
                        <div className='row pt-4 px-2 px-md-4 g-4'>
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 col-lg-4'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ProjectImg} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Projects
