import React from 'react'
import logoKinet from "@assets/svg/kinetLogo.svg"

type Props = {}

const KinetLogo: React.FC<Props> = (props) => {
  return (
    <img src={logoKinet} alt="" width="150"/>
  )
}

export default KinetLogo
