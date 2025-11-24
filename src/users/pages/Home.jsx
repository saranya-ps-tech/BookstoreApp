import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { getHomeBooksAPI } from '../../services/allAPI'
import { toast, ToastContainer } from 'react-toastify'
import { searchBookContext } from '../../contextAPI/ContextShare'






const Home = () => {

  const [homeBooks, setHomeBooks] = useState([])
  const navigate = useNavigate()
  const { searchKey, setSearchKey } = useContext(searchBookContext)

  useEffect(() => {
    setSearchKey("")
    getHomeBooks()
  }, [])

  // console.log(homeBooks);
  const searchBook = () => {
    if (!searchKey) {
      toast.warning("Plesese provide a Book Title here!!!")
    } else if (!sessionStorage.getItem("token")) {
      toast.warning("please Login to Search books... ")
      setTimeout(() => {
        navigate('/login')
      }, 2500);
    } else if (sessionStorage.getItem("token") && searchKey) {
      navigate("/all-books")
    } else {
      toast.error("Something went wrong!!!")
    }
  }


  const getHomeBooks = async () => {
    try {
      const result = await getHomeBooksAPI()
      if (result.status == 200) {
        setHomeBooks(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header />
      {/* landing */}
      <div style={{ height: '500px' }}
        className="flex flex-col justify-center items-center bg-[url(/landing.jpg)] bg-cover bg-center text-white">

        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.5)' }}
          className="w-full flex flex-col justify-center items-center p-5">

          <h1 className="text-3xl md:text-5xl font-bold text-center">Wonderful Gifts</h1>
          <p className="text-sm md:text-lg text-center mt-2">Give your family and friends a book</p>

          <div className="mt-6 w-full flex justify-center">
            <div className="relative w-3/4 sm:w-2/4 md:w-1/3">
              <input
                onChange={e => setSearchKey(e.target.value)}
                type="text"
                placeholder="Search Books"
                className="px-5 w-full h-10 bg-white rounded-full text-black"
              />
              <FontAwesomeIcon
                onClick={searchBook}
                icon={faMagnifyingGlass}
                className="absolute right-4 top-3 text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>


      {/* arrival */}
      <section className="p-5 md:px-40 flex flex-col justify-center items-center">
        <h1 className="text-xl md:text-2xl font-bold text-center">NEW ARRIVALS</h1>
        <h1 className="text-2xl md:text-3xl text-center">Explore Our Latest Collections</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full mt-5">
          {homeBooks.length > 0 ? (
            homeBooks.map((book, index) => (
              <div key={index} className="shadow rounded p-3">
                <img
                  className="w-full h-60 object-cover rounded"
                  src={book.imageUrl}
                  alt="book"
                />
                <div className="flex flex-col justify-center items-center mt-4">
                  <p className="text-blue-700 font-bold text-lg">{book.author}</p>
                  <p className="text-center">{book.title}</p>
                  <p>${book.discountPrice}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="text-center my-5">
          <Link className="bg-blue-600 p-3 text-white font-bold rounded" to="/all-books">
            Explore More...
          </Link>
        </div>
      </section>



      {/* author */}

      <section className="md:grid grid-cols-2 my-5 gap-10 md:px-40 p-5">
        <div className="text-center">
          <h1 className="text-lg md:text-2xl font-bold">FEATURED AUTHORS</h1>
          <h2 className="text-xl md:text-3xl">Captivates with every word</h2>

          <p className="text-justify mt-3 mb-5">Lorem ipsum, dolor sit amet consectetur
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
        <h1 className="text-xl md:text-2xl font-bold text-center">TESTIMONIALS</h1>
        <h1 className="text-2xl md:text-3xl text-center">See What Others Are Saying</h1>

        <div className='my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user" />
          <h4 className='my-3'>Treesa Joseph</h4>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sit
            aspernatur, quo nemo dignissimos obcaecati, libero ipsa rem nulla harum magnam
            quae recusandae dolorem necessitatibus totam ipsum ab aut debitis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate temporibus in voluptatibus quam illum reiciendis nobis accusantium eaque soluta sed dolor tenetur, id aperiam dignissimos cumque animi? Natus, quas. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus mollitia vero quaerat deleniti ea, unde repellat officiis. Eius, accusantium, dignissimos quisquam eveniet at maiores ex quibusdam non enim tenetur beatae.</p>
        </div>
      </section>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"

      />
    </>
  )
}

export default Home