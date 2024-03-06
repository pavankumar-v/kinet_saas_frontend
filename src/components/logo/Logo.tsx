import React from 'react'
import KinetLogo from "@assets/svg/logoKinet.svg"

type Props = {}

const Logo: React.FC<Props> = (props) => {
  return (
    <img src={KinetLogo} alt="" width="200"/>
  )
}

export default Logo
