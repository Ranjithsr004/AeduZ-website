import React from 'react'
import data from '../../data';
import Why_Us from '../Why_Us/Why_Us';
import './Items.css'
function Items() {
    const card = data.map((item) => {
      return <Why_Us image={item.img} name={item.name} content={item.content} />
    })
    
    return (
      <>
      <div className="boody">
      <h1 className="heading text-[#37517e] pb-4 md:text-5xl text-3xl">Why do Mentees Trust Us?</h1>
      <div className="wraper">{card}</div>
      </div>
      </>
    );
  }
export default Items
