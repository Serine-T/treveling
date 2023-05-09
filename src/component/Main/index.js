import "./styles.css";
import { useState } from  'react';
import data from "../../data";

const Main = ({ info, handleNotInterested }) => {

  const [readMore, setReadMore] = useState(true);

  const handleShowMore = () => {
    setReadMore(!readMore)
  }
  const {text, image, title, id} = info;
 
  return (
    <main>
        <h2>Our Tours</h2>
      <div className="for-Grid">
      <div className="div1 same-styles-for-div" style = {{display : 'block', height : '320px'}}>
      <img src= {image} alt="eror" className="image-Paris-N1 samestyles"/>
      <h5>{title}</h5>
      <p>{readMore ? `${ text.slice(0, 30) }...` : text}</p>
      <span className ={`other-span ${readMore ?  'read-more' : ''}`} onClick={handleShowMore}>
        {readMore ? 'Show More': 'Show Less'}
      </span>
      <button onClick={() => handleNotInterested(id)}>Not Interesed</button>
      </div>
      </div>
    </main>
  )
}

export default Main;



























































// const Main = () => {
//   const handler1 = () => {
//     setText(newtext)
//     setReadmore (!oldreadmore);
//   }
  
//   const handler2 = () => {
//     setText1 (newtext1)
//     setReadmore1 (!oldreadmore1);
//   }
  
//   const oldertext = <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...</p>
//   const newtext = <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!</p>
//   const oldertext1 = <p>Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...</p>
//   const newtext1 = <p>Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!</p>
//   const [oldtext, setText] = useState (oldertext);
//   const [oldreadmore, setReadmore] = useState (false);

//   const [oldtext1, setText1] = useState (oldertext1);
//   const [oldreadmore1, setReadmore1] = useState (false);


 
//   return (
//   <main>
//     <h2>Our Tours</h2>
//     <div className="for-Grid">
//       <div className="div1 same-styles-for-div">
//         <img
//           src="https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752593/react-tours-project/tour-1_bners3.jpg"
//           className="image-Paris-N1 samestyles" 
//         />
//         <h5>Best Of Paris In 7 Days Tour</h5>
//         <p>{oldtext}</p>
//          {<p className="other-p N1-p" onClick={handler1}>{oldreadmore ? 'Show Less'  : 'Read More'}</p>}
          
//         <button>Not Interesed</button>
//       </div>
//        <div className="div2 same-styles-for-div">
//         <img
//           src="https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752630/react-tours-project/tour-2_sghc0f.jpg"
//           className="image-Ireland-N2 samestyles"
//         />
//         <h5>Best Of Ireland In 14 Days Tour</h5>
//         {oldtext1}
//         <p className = 'other-p' onClick={handler2}>{oldreadmore1 ? 'Show Less' : 'Read More'}</p>
//         <button>Not Interesed</button>
//       </div>
//       <div className="div3 same-styles-for-div">
//         <img
//           src="https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752656/react-tours-project/tour-3_dnr0ce.jpg"
//           className="image-Salzburg-&-Vienna-N3 samestyles"
//         />
//         <h5>Best Of Salzburg & Vienna In 8 Days Tour</h5>
//         <p>Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring th...</p>
//         <p className = 'other-p'>Read More</p>
//         <button>Not Interesed</button>
//       </div>
//       <div className = 'div4 same-styles-for-div'>
//         <img
//           src="https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752689/react-tours-project/tour-4_dcvwb6.jpg"
//           className="image-Rome-N4 samestyles other-style"
//         />
//         <h5>Best Of Rome In 7 Days Tour</h5>
//         <p>Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...</p>
//         <p className = 'other-p'>Read More</p>
//         <button>Not Interesed</button>
//       </div>
//       <div className="div5 same-styles-for-div">
//         <img
//           src="https://res.cloudinary.com/dt2g7mgtv/image/upload/v1681752720/react-tours-project/tour-5_bowbnw.jpg"
//           className="image-Poland-N5 samestyles other-style"
//         />
//         <h5>Best Of Poland In 10 Days Tour</h5>
//         <p>Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...</p>
//         <p className = 'other-p'>Read More</p>
//         <button>Not Interesed</button>
//       </div> 
//     </div>
//   </main>
//   )
//   }

// export default Main;