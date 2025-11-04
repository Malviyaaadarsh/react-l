import React from 'react'

const rightcardcontent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between '>
                <h2 className='bg-white rounded-full h-12 text-xl font-semibold  w-12 flex justify-center items-center'>{props.id+1}</h2>
                <div><p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aspernatur ut rerum est dolor.</p>
                    <div className='flex justify-between'><button className='bg-blue-600 text-white font-medium px-7 py-3 rounded-full '>{props.tag}</button>
                        <button className='bg-blue-600 text-white font-semibold px-4 py-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default rightcardcontent
