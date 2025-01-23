import React from 'react'
import PropTypes from 'prop-types'

function SwiperCard({Image, Activity, Description}) {
  return (
    <div className='relative rounded-xl overflow-hidden mb-10 shadow-customShadow'>
        <img src={Image} alt="Actvity Image" />
        <div className='absolute px-2 bottom-0 bg-gradient-to-b from-black/0 to-black/100 text-text w-full h-[70%] flex items-center justify-end pb-3 flex-col'>
            <div className='text-center font-bold text-yellow'>
                <p>{Activity}</p>
            </div>
            <div className='text-center text-[0.75rem] font-light'>
                <p>{Description}</p>
            </div>
        </div>
    </div>
  )
}

SwiperCard.propTypes = {
    Image: PropTypes.string.isRequired,
    Activity: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
}

export default SwiperCard