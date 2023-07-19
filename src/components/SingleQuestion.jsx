import React from 'react'
import {Button, PopoverHeader, PopoverBody, Popover} from 'reactstrap'
import { useState } from 'react'

export const SingleQuestion = ({id,title,info}) => {

    const [popOverOpen, setPopOverOpen] = useState(false)
  return (
    <div className='row m-1'>
    <Button
      id={'Popover'+id} type="button">
      {title}
    </Button>
    <Popover
      flip
      isOpen={popOverOpen}
      placement='bottom'
      target={'Popover'+id}
      toggle={()=>setPopOverOpen(!popOverOpen)}
    >
      <PopoverHeader>
{title}     </PopoverHeader>
      <PopoverBody>
        {info}
      </PopoverBody>
    </Popover>
  </div>
  )
}
