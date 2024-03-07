import React from 'react'
import { Loader2 } from "lucide-react"

type Props = {}

const Spinner: React.FC<Props> = (props) => {
  return (
    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
  )
}

export default Spinner
