import React from 'react'
import './DecriptionBox.css'


function DecriptionBox() {
  return (
    <div className='decriptionbox'>
        <div className='decriptionbox-navigator'>
            <div className='decriptionbox-nav-box'>Description</div>
            <div className='decriptionbox-nav-box-fade'>Reviews (122)</div>
        </div>
        <div className='decriptionbox-decription'>
            <p>
            Describing clothes can reveal much about our personality, 
            cultural background, and even mood. 
            As you navigate the world of fashion and style, remember the power of words. 
            The right description can transform a simple garment into an emblem of elegance and personal expression.
            </p>
            <p>
            Note texture (smooth, coarse),
            weight (light, heavy), 
            and weave (knit, woven).
            Mention functional qualities like breathability, stretch, or waterproofing relevant to the garment’s purpose and comfort. 
            The examples below show how to talk about materials while describing clothes.
            </p>
        </div>
    </div>
  )
}

export default DecriptionBox