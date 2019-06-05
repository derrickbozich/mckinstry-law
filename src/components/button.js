import React from "react"


function Button(props){
  const { text } = props
  return(
    <div className='button'>
      {text}
    </div>
  )

}

export default Button
