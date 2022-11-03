import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer'

import './css/App.css';


import img1 from './images/slider/sd1.jpg';
import img2 from './images/slider/sd2.jpg';
import img3 from './images/slider/sd3.jpg';
import img4 from './images/slider/sd4.jpg';
import img5 from './images/slider/sd5.jpg';
import img6 from './images/slider/sd6.jpg';
import img7 from './images/slider/sd7.jpg';

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption six" },
  { src: img7, caption: "Caption seven" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
