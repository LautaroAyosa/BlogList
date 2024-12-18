import React, { useState } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const classesOpen = `open ${props.contentDivClassName}`;

  return (
    <div className={props.className} >
      <div className={props.showDivClassName}>
        <button className='openButton' onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div className={ visible ? classesOpen : props.contentDivClassName}>
        <button className='closeButton' onClick={toggleVisibility}>{props.hideLabel ? props.hideLabel : 'cancel'}</button>
        {props.children}
      </div>
    </div>
  )
})

export default Togglable
