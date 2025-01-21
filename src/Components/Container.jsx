import React from 'react'

function Container({children}) {
  return (
    <>
        <div className='flex items-center justify-center'>
            <div className='w-full xl:w-[65rem]'>
                {children}
            </div>
        </div>
    </>
  )
}

export default Container