import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg from '../../assets/images/construction1.jpg';
import ProjectImg from '../../assets/images/construction2.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AvatarImg from '../../assets/images/author-2.jpg';
import { Pagination } from 'swiper/modules';
import BlogImg from '../../assets/images/construction3.jpg';
import About from '../common/About';
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
                                    <a className='btn btn-primary large'>Contact me</a>
                                    <a className='btn btn-secondary ms-2 large'>View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
                <About />

                <section className='section-3 bg-light py-5'>
                    <div className='container-fluid py-5'>
                        <div className='section-header text-center'>
                            <span>Our Services</span>
                            <h2>Our Construction Services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                    </div>
                    <div className='row pt-4 px-2 px-md-4 g-4'>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
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
                    <div className='row pt-4 px-2 px-md-4 g-4'>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
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
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure quis quasi distinctio corporis aut molestias voluptas esse exercitationem maxime.</p>
                                    </div>
                                    <a href='#' className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-5 py-4 py-md-5'>
                    <div className='container'>
                        <div className='section-header text-center mx-auto mb-4 mb-md-5'>
                            <span>Testimonial</span>
                            <h2 className='mb-3'>What Our Clients Say</h2>
                            <p className='mb-0 px-2 px-md-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                        </div>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                576: { slidesPerView: 2, spaceBetween: 20 },
                                992: { slidesPerView: 3, spaceBetween: 32 },
                            }}
                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide className='h-auto'>
                                <div className='card h-100 w-100 shadow border-0'>
                                    <div className='card-body d-flex flex-column p-3 p-md-4 p-xl-5'>
                                        <div className='rating d-flex flex-wrap gap-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pt-md-4 pb-2'>
                                            <p className='mb-0'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem quam aut aperiam temporibus porro, pariatur officia ut ex.
                                            </p>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center mt-auto meta'>
                                            <div className='flex-shrink-0'>
                                                <img src={AvatarImg} alt="" width={50} className='img-fluid rounded-circle' />
                                            </div>

                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-auto'>
                                <div className='card h-100 w-100 shadow border-0'>
                                    <div className='card-body d-flex flex-column p-3 p-md-4 p-xl-5'>
                                        <div className='rating d-flex flex-wrap gap-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pt-md-4 pb-2'>
                                            <p className='mb-0'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem quam aut aperiam temporibus porro, pariatur officia ut ex.
                                            </p>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center mt-auto meta'>
                                            <div className='flex-shrink-0'>
                                                <img src={AvatarImg} alt="" width={50} className='img-fluid rounded-circle' />
                                            </div>

                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-auto'>
                                <div className='card h-100 w-100 shadow border-0'>
                                    <div className='card-body d-flex flex-column p-3 p-md-4 p-xl-5'>
                                        <div className='rating d-flex flex-wrap gap-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pt-md-4 pb-2'>
                                            <p className='mb-0'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem quam aut aperiam temporibus porro, pariatur officia ut ex.
                                            </p>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center mt-auto meta'>
                                            <div className='flex-shrink-0'>
                                                <img src={AvatarImg} alt="" width={50} className='img-fluid rounded-circle' />
                                            </div>

                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='h-auto'>
                                <div className='card h-100 w-100 shadow border-0'>
                                    <div className='card-body d-flex flex-column p-3 p-md-4 p-xl-5'>
                                        <div className='rating d-flex flex-wrap gap-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-3 pt-md-4 pb-2'>
                                            <p className='mb-0'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem quam aut aperiam temporibus porro, pariatur officia ut ex.
                                            </p>
                                        </div>
                                        <hr />
                                        <div className='d-flex align-items-center mt-auto meta'>
                                            <div className='flex-shrink-0'>
                                                <img src={AvatarImg} alt="" width={50} className='img-fluid rounded-circle' />
                                            </div>

                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>

                <section className='section-6 py-5'>
                    <div className='section-header text-center'>
                        <span>Blog & News</span>
                        <h2>Articles and News</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    </div>
                    <div className='row pt-4 px-2 px-md-4 g-4'>
                        <div className='col-md-4'>
                            <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={BlogImg} className='w-100' />
                                </div>

                                <div className='card-body p-4'>
                                    <div className='mb-3'>
                                        <a href="" className='title'>Dummy Title</a>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                         <div className='col-md-4'>
                            <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={BlogImg} className='w-100' />
                                </div>

                                <div className='card-body p-4'>
                                    <div className='mb-3'>
                                        <a href="" className='title'>Dummy Title</a>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                         <div className='col-md-4'>
                            <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={BlogImg} className='w-100' />
                                </div>

                                <div className='card-body p-4'>
                                    <div className='mb-3'>
                                        <a href="" className='title'>Dummy Title</a>
                                    </div>
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />

        </>
    )
}

export default Home
