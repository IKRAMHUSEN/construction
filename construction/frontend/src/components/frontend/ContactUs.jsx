import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'


function ContactUs() {
    return (
        <>
            <Header />
            <main>
                <Hero preHeading='Quality. Integrity. Value.' heading='Contact Us' text='We excel at transforming visions into reality through<br />outstanding craftsmanship and precise' />

                <section className="section-9 py-5">
                    <div className='container'>
                        <div className='section-header text-center'>
                            <h2>Conatct Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.<br />Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <div className="card shadow border-0 mb-3">
                                    <div className="card-body p-4">
                                        <h3>
                                            Call Us
                                        </h3>
                                        <div>
                                            <a href="tel:+1234567890">+1 234 567 890</a>
                                        </div>
                                        <h3 className='mt-4'>
                                            You can write us
                                        </h3>
                                        <div>
                                            <a href="">admin@example.com</a>
                                        </div>
                                        <h3 className='mt-4'>
                                            Address
                                        </h3>
                                        <div>123 Main Street, City, Country</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <form action="">
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="phone" className="form-label">Phone</label>
                                                    <input type="text" className="form-control form-control-lg" id="phone" placeholder="Enter your phone" />
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="subject" className="form-label">Subject</label>
                                                    <input type="subject" className="form-control form-control-lg" id="subject" placeholder="Enter your subject" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="form-label">Message</label>
                                                <textarea className="form-control form-control-lg" id="message" rows={5} placeholder="Enter your message"></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary large mt-3">Submit</button>
                                        </form>
                                    </div>
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

export default ContactUs
