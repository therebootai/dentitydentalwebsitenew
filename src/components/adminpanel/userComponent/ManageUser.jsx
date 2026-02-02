import React from 'react'

const ManageUser = () => {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className=' text-lg font-semibold text-site-text'>Manage User</h1>
        <div className=' flex flex-col border border-site-gray rounded-md'>
          <div className=" w-full flex items-center bg-site-main p-3 py-4 text-white text-sm font-semibold rounded-t-md ">
          <div className=" flex-1">User Name</div>
          <div className=" flex-1">Email</div>
          <div className="flex-1">Phone</div>
          <div className=" flex-1">Status</div>
          <div className=" flex-1">Action</div>
        </div>
        </div>
      
    </div>
  )
}

export default ManageUser
