import React from 'react'

const ResultFilter = () => {
  return (
    <div>  
    <div className='mb-6'><div className='w-[90px] bg-[#1A1635] gap-2 py-2 justify-center flex rounded-lg'><img src="filter.svg" alt="" />Filter</div></div>

<div  className=' text-[14px] text-white flex flex-wrap gap-4'>
      <div className=' bg-[#0A8BEC]  rounded-[78px] items-center flex px-3 gap-2
'><button>x</button>
      MAG
      </div>
      <div  className=' bg-[#0A8BEC]  rounded-[78px] flex px-3 py-2 gap-2
'><div>x</div>
      Qualification
      </div>
      <div  className=' bg-[#0A8BEC]  rounded-[78px] flex px-3 py-2 gap-2
'><button>x</button>
    <div>Seniors</div>
      </div>
      <div  className=' bg-[#0A8BEC] rounded-[78px] flex px-3 py-2 gap-2
'><button>x</button>
Apparatus
      </div>
      <div  className=' bg-[#0A8BEC]  rounded-[78px] flex px-3 py-2 gap-2
'><button>x</button>
    Floor Exercise
      </div>
    </div>
    </div>
   
  )
}

export default ResultFilter
