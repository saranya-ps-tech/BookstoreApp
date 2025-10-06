import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <Header />
      {/* landing */}
      <div style={{ height: '500px' }} className="flex flex-col  justify-center items-center bg-[url(/landing.jpg)] bg-cover bg-center  text-white">
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.5)' }} className='w-full flex flex-col  justify-center items-center '>
          <h1 className="text-5xl  font-bold">Wonderful Gifts</h1>
          <p>Give your family and friends a book</p>
          <div className="mt-9">
            <input type="text" placeholder='Search Books' className='px-5 w-100 h-10 bg-white text-gray-500 rounded-full' /><FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginLeft: '-40px' }} className='text-gray-500' />
          </div>
        </div>
      </div>

      {/* arrival */}
      <section className='md:px-40 p-5 flex flex-col  justify-center items-center'>
        <h1 className='text-2xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-3xl'>Explore Our Latest Collections</h1>
        <div className='md:grid grid-cols-4 w-full mt-5'>
          <div className='p-3'>
            <div className='shadow p-3 rounded'>
              <img width={'100%'} height={'300px'} src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" alt="book" />
              <div className='flex flex-col  justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <p>$400</p>

              </div>

            </div>

          </div>
          <div className='p-3'>
            <div className='shadow p-3 rounded'>
              <img width={'100%'} height={'300px'} src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" alt="book" />
              <div className='flex flex-col  justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <p>$400</p>

              </div>

            </div>

          </div>
          <div className='p-3'>
            <div className='shadow p-3 rounded'>
              <img width={'100%'} height={'300px'} src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" alt="book" />
              <div className='flex flex-col  justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <p>$400</p>

              </div>

            </div>

          </div>
          <div className='p-3'>
            <div className='shadow p-3 rounded'>
              <img width={'100%'} height={'300px'} src="https://static-cse.canva.com/blob/1427892/ColorfulIllustrationYoungAdultBookCover.jpg" alt="book" />
              <div className='flex flex-col  justify-center items-center'>
                <p className='text-blue-700 text-lg font-bold'>Author</p>
                <p>Book Title</p>
                <p>$400</p>

              </div>

            </div>

          </div>

        </div>


        <div className="text-center my-5">
          <Link to={'/all-books'} className='bg-blue-600 p-3 text-white font-bold'>
            Explore More...
          </Link>
        </div>
      </section>

      {/* author */}

      <section className="md:grid grid-cols-2 my-5 gap-10 md:px-40 p-5">
        <div className="text-center">
          <h1 className='text-lg font-bold'>FEATURED AUTHORS</h1>
          <h2 className='text-xl '>Captivates with every word</h2>
          <p className='text-justify mb-5'>Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Exercitationem recusandae ut neque enim maiores cum, modi id
            beatae velit atque aperiam explicabo aut perspiciatis quia! Suscipit iusto
            dolores enim maxime.
            Explicabo dolorem, doloribus cum, facilis eligendi iste reiciendis, ipsum
            consequuntur perferendis nulla corrupti officia. Beatae, at debitis totam eaque
            explicabo dolores ab assumenda commodi velit ex. Asperiores ea veritatis
            commodi!</p>
          <p className='text-justify '>Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Exercitationem recusandae ut neque enim maiores cum, modi id beatae velit
            atque aperiam explicabo aut perspiciatis quia! Suscipit iusto dolores enim
            maxime.
            Explicabo dolorem, doloribus cum, facilis eligendi iste reiciendis, ipsum
            consequuntur perferendis nulla corrupti officia. Beatae, at debitis totam eaque
            explicabo dolores ab assumenda commodi velit ex. Asperiores ea veritatis
            commodi!</p>
        </div>
        <div className=' p-5 justify-center items-center'>
          <img src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg" alt="autor" />
        </div>


      </section>

      {/* testimony */}
      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-3xl'>See What Others Are Saying</h1>
        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{borderRadius:'50%'}} src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user" />
          <h4 className='my-3'>Treesa Joseph</h4>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
            aspernatur, quo nemo dignissimos obcaecati, libero ipsa rem nulla harum magnam
            quae recusandae dolorem necessitatibus totam ipsum ab aut debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate temporibus in voluptatibus quam illum reiciendis nobis accusantium eaque soluta sed dolor tenetur, id aperiam dignissimos cumque animi? Natus, quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus mollitia vero quaerat deleniti ea, unde repellat officiis. Eius, accusantium, dignissimos quisquam eveniet at maiores ex quibusdam non enim tenetur beatae.</p>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Home