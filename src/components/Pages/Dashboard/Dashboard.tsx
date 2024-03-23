import LogoutButton from '@/components/auth/LogoutButton'
import React from 'react'

type Props = {}

const Dashboard: React.FC<Props> = (props) => {
  return (
    <div>Dashboard
      <LogoutButton />
    </div>
  )
}

export default Dashboard
