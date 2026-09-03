import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import BlogImg from '../../assets/images/construction3.jpg';

function Blog() {
    return (
        <>

            <Header />
            <main>
                <Hero preHeading='Quality. Integrity. Value.' heading='Blogs' text='We excel at transforming visions into reality through<br />outstanding craftsmanship and precise' />
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
            </main>
            <Footer />

        </>
    )
}

export default Blog
