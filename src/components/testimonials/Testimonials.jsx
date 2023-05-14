import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avartar: AVTR1,
    name: "Ahmed Shah",
    review: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit. Nesciunt quas culpa eos officiis tenetur nisi quod rerum quia repellendusadipisci numquam ea voluptate, quidem sequi dignissimos magnam fugiat obcaecati. Distinctio!'

 },
 {
  avartar: AVTR2,
  name: "Ahmed Shah",
  review: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit. Nesciunt quas culpa eos officiis tenetur nisi quod rerum quia repellendusadipisci numquam ea voluptate, quidem sequi dignissimos magnam fugiat obcaecati. Distinctio!'

},
{
  avartar: AVTR3,
  name: "Ahmed Shah",
  review: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit. Nesciunt quas culpa eos officiis tenetur nisi quod rerum quia repellendusadipisci numquam ea voluptate, quidem sequi dignissimos magnam fugiat obcaecati. Distinctio!'

},
{
  avartar: AVTR4,
  name: "Ahmed Shah",
  review: 'Lorem ipsum dolor sit amet consectetur  adipisicing elit. Nesciunt quas culpa eos officiis tenetur nisi quod rerum quia repellendusadipisci numquam ea voluptate, quidem sequi dignissimos magnam fugiat obcaecati. Distinctio!'

}
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"  
         // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
     
        
      >

       {
        data.map(({avartar,name, review},index)=>{
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
             <img src={avartar} />
          
            </div>
            <h5 className='client__name'>{name}</h5>
             <small className='client__review'>{review}</small>
         </SwiperSlide>
          )
        })
       }

    {   /* <article className='testimonial'>
           <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
           </div>

           <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Incidunt non numquam cupiditate expedita. 
            Ea dolores voluptas placeat 
            eligendi magni numquam ipsa inventore corporis distinctio, 
            illo perferendis molestiae nesciunt quibusdam nemo?</small>
        </article>

        <article className='testimonial'>
           <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
           </div>

           <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Incidunt non numquam cupiditate expedita. 
            Ea dolores voluptas placeat 
            eligendi magni numquam ipsa inventore corporis distinctio, 
            illo perferendis molestiae nesciunt quibusdam nemo?</small>
        </article>

        <article className='testimonial'>
           <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
           </div>

           <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Incidunt non numquam cupiditate expedita. 
            Ea dolores voluptas placeat 
            eligendi magni numquam ipsa inventore corporis distinctio, 
            illo perferendis molestiae nesciunt quibusdam nemo?</small>
        </article>*/
}
      </Swiper>
    </section>
  )
}

export default Testimonials