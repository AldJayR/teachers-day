import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery'
import Notes from './components/Notes'
import groupImgOne from './images/gimg1.jpg';
import groupImgTwo from './images/gimg2.jpg';
import groupImgThree from './images/gimg3.jpg';
import groupImgFour from './images/gimg4.jpg';

function App() {
  const images = [groupImgOne, groupImgTwo, groupImgThree, groupImgFour]

  return (
    <>
      <Header />
      <Hero />
      <Gallery images={images}/>
      <Notes />
    </>
  )
}

export default App;
