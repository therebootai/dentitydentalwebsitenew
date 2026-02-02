import React, { Suspense } from 'react'
import AdminTemplate from '../../templates/AdminTemplate'
import UserFullPage from '../../components/adminpanel/userComponent/UserFullPage'

const UserManagement = () => {
  return (
    <AdminTemplate>
        <Suspense fallback={<div>Loading....</div>}>
        <UserFullPage/></Suspense>
    </AdminTemplate>
  )
}

export default UserManagement
