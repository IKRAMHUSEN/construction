import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg'
import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';
import ProjectImg from '../../assets/images/construction2.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';


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

                <section className='section-3 bg-light py-5'>
                    <div className='container-fluid py-5'>
                        <div className='section-header text-center'>
                            <span>Our Services</span>
                            <h2>Our Construction Services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Speciality Construction</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-4 py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>Why Choose Us</span>
                            <h2>Discover the Benefits</h2>
                            <p>We offer a wide range of services to meet your construction needs,<br />
                                from residential to commercial projects.</p>
                        </div>
                        <div className='row g-4'>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon1} alt='' />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Expertise and Experience</h3>
                                    </div>

                                    <p>Our team of skilled professionals has extensive experience in the construction industry, ensuring high-quality workmanship and attention to detail.</p>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon2} alt='' />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Expertise and Experience</h3>
                                    </div>

                                    <p>Our team of skilled professionals has extensive experience in the construction industry, ensuring high-quality workmanship and attention to detail.</p>

                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon3} alt='' />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Expertise and Experience</h3>
                                    </div>

                                    <p>Our team of skilled professionals has extensive experience in the construction industry, ensuring high-quality workmanship and attention to detail.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-3 bg-light py-5'>
                    <div className='container-fluid py-5'>
                        <div className='section-header text-center'>
                            <span>Our Projects</span>
                            <h2>Recent Projects</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                    </div>
                    <div className='row pt-4'>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ServiceImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ProjectImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ProjectImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3'>
                            <div className='item'>
                                <div className='service-image'>
                                    <img src={ProjectImg} className='w-100' />
                                </div>
                                <div className='service-body'>
                                    <div className='service-title'>
                                        <h3>Kolkata Project</h3>
                                    </div>
                                    <div className='service-content'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime adipisci quod quo, earum sequi alias nihil, temporibus neque saepe.
                                            Eveniet ducimus officia minima aliquid non sequi facere minus tempore. Assumenda, ea error? Ad nam amet corporis veniam, quod vel quibusdam dolore quo dolorem. Assumenda, fugiat debitis? Ut, voluptates sequi.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary'>Read More</a>
                                </div>
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
