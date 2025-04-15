import '../css/HomePage.css'

import Header from '../components/Header'
import Slides from '../components/Slides'


function HomePage() {

  const slideImages = [
    'https://placehold.co/400x200',
    'https://placehold.co/400x200',
    'https://placehold.co/400x200',
    'https://placehold.co/400x200',
    'https://placehold.co/400x200',
    'https://placehold.co/400x200',
  ]

  return (
    <>
      <Header></Header>
      <div className="top-banner">
        <div>
          <h1>Welcome to the Store</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ratione et assumenda facilis maiores debitis soluta eius fugiat.</p>
        </div>
        <img src="https://placehold.co/400x200" alt="" />
      </div>
      <h2>Limitless Options</h2>

      <Slides slides={slideImages} />
    </>
  )
}

export default HomePage;