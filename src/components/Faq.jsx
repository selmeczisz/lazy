import React from 'react'
import {questions} from '../data'
import { useState } from 'react'
import { SingleQuestion } from './SingleQuestion'
import { useNavigate } from 'react-router-dom'

export const Faq = () => {

    const navigate=useNavigate()

const [faq, setFaq] = useState(questions)
console.log(faq)
  return (
    <div className='faq'>
        {faq.map(obj=><SingleQuestion {...obj} key={obj.id}/>)}

<button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}
