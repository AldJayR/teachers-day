import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery'
import { Footer } from './components/Footer'
import Notes from './components/Notes'
import groupImgOne from './images/gimg1.jpg';
import groupImgTwo from './images/gimg2.jpg';
import groupImgThree from './images/gimg3.jpg';
import groupImgFour from './images/gimg4.jpg';
import groupImgFive from './images/gimg5.jpeg';
import groupImgSix from './images/gimeg6.jpeg';
import groupImgSeven from './images/gimg7.jpeg';
import groupImgEight from './images/gimg8.jpeg'

function App() {
  const images = [groupImgOne, groupImgTwo, groupImgThree, groupImgFour, groupImgFive, groupImgSix, groupImgSeven, groupImgEight];

  return (
    <>
      <Header />
      <Hero />
      <Gallery images={images}/>
      <Notes />
      <Footer />
    </>
  )
}

export default App;
