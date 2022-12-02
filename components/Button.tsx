import React, { Fragment } from 'react'
type Props = {
  name: string,
}

const Button = (props: Props) => {
  return (
    <Fragment>
      <button className="bg-[#FF7A00] px-12 py-5 rounded-lg">{props.name}</button>
    </Fragment>
  )
}

export default Button;