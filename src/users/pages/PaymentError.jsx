import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PaymentError() {
  return (
    <>
    <Header />
            <div className="container my-10">

                <div className="md:grid grid-cols-2 px-20 justify-center items-center">
                    <div>
                        <h1 className="md:text-4xl text-red-600">Sorry...Your payment is unsuccessfull...!!!</h1>
                        <p className="text-2xl my-4">We Apologies for the inconvenience caused and appreciate the vist to BookStore...</p>
                        <Link to={'/all-books'} className=' bg-red-800 px-4 py-3  text-white my-5'><FontAwesomeIcon icon={faBackward} />Explore More Books</Link>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='img-fluid' src='https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1' alt="failed" />
                    </div>
                </div>

            </div>
            <Footer />
    
    </>
  )
}

export default PaymentError