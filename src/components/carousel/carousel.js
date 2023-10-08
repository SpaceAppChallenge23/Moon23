// import React from 'react'
// import './carousel.css'
// // import assets from '././assets'


// function Carousel() {
//     return (

// // <html lang="en">

// //   <title>Bootstrap Example</title>
// //   <meta charset="utf-8">
// //   <meta name="viewport" content="width=device-width, initial-scale=1">
// //   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
// //   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
// //   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


//         <div id="myCarousel" className="carousel slide" data-ride="carousel">

//             {/* <!-- Indicators --> */}
//             <ol className="carousel-indicators">
//                 <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//                 <li data-target="#myCarousel" data-slide-to="1"></li>
//                 <li data-target="#myCarousel" data-slide-to="2"></li>
//             </ol>

//             {/* <!-- Wrapper for slides --> */}
//             <div className="carousel-inner">
//                 <div className="item active">
//                     <img src="../test_moon.jpg" alt="Chania"></img>
//                     <div className="carousel-caption">
//                         <h3>Los Angeles</h3>
//                         <p>LA is always so much fun!</p>
//                     </div>
//                 </div>

//                 <div className="item">
//                     <img src="chicago.jpg" alt="Chicago"></img>
//                     <div className="carousel-caption">
//                         <h3>Chicago</h3>
//                         <p>Thank you, Chicago!</p>
//                     </div>
//                 </div>

//                 <div className="item">
//                     <img src="ny.jpg" alt="New York"></img>
//                     <div className="carousel-caption">
//                         <h3>New York</h3>
//                         <p>We love the Big Apple!</p>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Left and right controls --> */}
//             <a className="left carousel-control" href="#myCarousel" data-slide="prev">
//                 <span className="glyphicon glyphicon-chevron-left"></span>
//                 <span className="sr-only">Previous</span>
//             </a>
//             <a className="right carousel-control" href="#myCarousel" data-slide="next">
//                 <span className="glyphicon glyphicon-chevron-right"></span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </div>
//     )
// }

// export default Carousel;


// import React from 'react'
// import './carousel.css'
// import AVTR1 from '../../assets/test_moon.jpg'

// // // import Swiper core and required modules
// // import { Pagination } from 'swiper';
// // // import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// // import { Swiper,SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/swiper.min.css'
// // import './pagination/pagination.min.css';

// import { Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'


// import 'swiper/swiper.min.css'
// import 'swiper/css/pagination'

// const data = [
//   {
//     avatar: AVTR1,
//     name: 'Moon',
//     review: 'lorem ipsum dolor sit amet'
//   }
// ]

// const carousel = () => {
//   return (
//     <section id="carousel"> 
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper
//       // install Swiper modules
//       modules={[ Pagination ]}
//       spaceBetween={40}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//     />

//       <Swiper className="container carousel__container"
//         // install Swiper modules
//         modules={[ Pagination ]}
//         spaceBetween={40}
//         slidesPerView={1}
//         pagination={{ clickable: true }}      
//       >
//         {
//           data.map(({avatar, name, review}, index) => {
//             return (
//               <SwiperSlide key={index} className="testimonial">
//                 <div className="client__avatar">
//                     <img src={avatar} alt={avatar}/>
//                 </div>
//                 <h5 className="client__name">{name}</h5>
//                   <small className="client__review">{review}</small>
//               </SwiperSlide>
//             )
//           })
//         }
//       </Swiper>
//     </section>
//   )
// }

// export default carousel

// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import Test_Moon from '../../assets/test_moon.jpg';

// function Carousel() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <Test_Moon text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Test_Moon text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Test_Moon text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Carousel;