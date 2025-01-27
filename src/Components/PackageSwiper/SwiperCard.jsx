import React from 'react'
import PropTypes from 'prop-types'
import Button from "../Buttons/LinkButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

function SwiperCard({Image, Link}) {
  return (
    <div className='relative rounded-xl overflow-hidden mb-10'>
        <img src={Image} alt="Actvity Image" className='rounded-xl'/>
        <div className='absolute bg-gradient-to-b rounded-xl from-text/0 to-text/30 h-[80%] w-full bottom-0'></div>
        <div>
            <Button 
                content={
                    <span className="inline-block">
                        <span className="hidden sm:block">
                            Book Now
                        </span>
                        <span className="block sm:hidden">
                            <FontAwesomeIcon
                                icon={faTags}
                                className="text-primary"
                            />
                        </span>
                    </span>
                }
                className={"absolute bottom-3 right-3 font-semibold hover:scale-110 bg-text text-primary px-3 py-1 text-sm rounded-lg duration-300 ease-out cursor-pointer"}
                link={Link}
            />
        </div>
    </div>
  )
}

SwiperCard.propTypes = {
    Image: PropTypes.string.isRequired,
    Link: PropTypes.string.isRequired
}

export default SwiperCard