import React from 'react';
import './preloaded.css'; // import your CSS file
import pre1 from '../../assets/pre1.png';
import pre2 from '../../assets/pre2.png';
import pre3 from '../../assets/pre3.png';
import pre4 from '../../assets/pre4.png';
import pre5 from '../../assets/pre5.png';
import pre6 from '../../assets/pre6.png';
import pre7 from '../../assets/pre7.png';
import pre8 from '../../assets/pre8.png';

const Preloaded = () => {
  return (
    <div className="pregroup">
      <div className='h-pregroup'>
        <h2>Preloaded Quizzes</h2>
        <div className="image-container1">
          <PreloadedImage src={pre1} />
          
          <PreloadedImage src={pre2} />
          <PreloadedImage src={pre3} />
          <PreloadedImage src={pre4} />
          
        </div>
        <div className="image-container2">
        <PreloadedImage src={pre5} />
          <PreloadedImage src={pre6} />
          <PreloadedImage src={pre7} />
          <PreloadedImage src={pre8} />
          </div>
      </div>
    </div>
  );
}

const PreloadedImage = ({ src }) => {
  return (
    <div className="preloaded-image">
      <img src={src} alt="Preloaded Quiz" />
    </div>
  );
}

export default Preloaded;
