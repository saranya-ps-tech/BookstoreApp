import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function PaymentSuccess() {
    return (
        <>
            <Header />
            <div className="container my-10">

                <div className="md:grid grid-cols-2 px-20 justify-center items-center">
                    <div>
                        <h1 className="md:text-4xl text-blue-600">Congratulation!!!</h1>
                        <p className="text-2xl my-4">Thank you for purchasing with
                            BookStore. Hope you have a good time with us...</p>
                        <Link to={'/all-books'} className=' bg-blue-800 px-4 py-3  text-white my-5'><FontAwesomeIcon icon={faBackward} />Explore More Books</Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='img-fluid' src='https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif' alt="success" />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}


export default PaymentSuccess