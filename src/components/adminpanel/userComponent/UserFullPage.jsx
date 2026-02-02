import React from 'react'
import UserHeader from './UserHeader'
import ManageUser from './ManageUser'

const UserFullPage = () => {
  return (
    <div className=' p-6 flex flex-col gap-6'>
      <div>
        <UserHeader/>
      </div>
      <div >
        <ManageUser/>
      </div>
      
    </div>
  )
}

export default UserFullPage
