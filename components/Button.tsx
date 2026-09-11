import React, { Fragment } from 'react'
type Props = {
  name: string,
}

const Button = (props: Props) => {
  return (
    <Fragment>
      <button className="bg-[#FF7A00] px-12 py-5 rounded-lg font-bold transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 active:translate-y-0 active:shadow-none">{props.name}</button>
    </Fragment>
  )
}

export default Button;
