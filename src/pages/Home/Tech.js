import React from 'react'
import { DiAndroid, DiAppstore, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiPython, DiReact } from 'react-icons/di'
const Tech = () => {
  return (
    <div className='space-y-5'>

      <h1 className='text-4xl font-bold text-center'>Technologies I use</h1>

      <div className="dev-icons grid grid-cols-4 justify-items-center gap-10">





        <DiAndroid size={200} className='animate-pulse' />
        <DiPython size={200} />
        <DiCss3 size={200} />
        <DiReact size={200} className='animate-bounce' />
        <DiHtml5 size={200} />
        <DiJavascript size={200} />
        <DiNodejs size={200} className='animate-spin' />
        <DiAppstore size={200} />


      </div>




    </div>
  )
}

export default Tech