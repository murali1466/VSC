import React from 'react'
import PropTypes from 'prop-types'

function SwiperCard({Image, Activity, Description}) {
  return (
    <div className='relative rounded-xl overflow-hidden mb-10'>
        <img src={Image} alt="Actvity Image" />
        <div className='absolute bottom-0 bg-gradient-to-b from-black/0 to-black/100 text-text w-full h-[70%] flex items-center justify-end pb-5 flex-col'>
            <div className='text-center font-bold text-yellow'>
                <p>{Activity}</p>
            </div>
            <div className='text-center text-sm font-light'>
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