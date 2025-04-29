
import React from 'react'
import LiveTable from '@/app/Components/LiveTable/LiveTable'
import DropDown2 from "@/app/Components/DropDown2/DropDown2"

const Live = () => {
  return (
    <div>
        <section className=' hidden md:block'>     
        <LiveTable/>
    </section>

    <section className='  block md:hidden'>
      <DropDown2  />
    </section>
    </div>
  )
}

export default Live
