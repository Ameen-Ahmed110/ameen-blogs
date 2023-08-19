import React from 'react'

const PersonalProfile = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="container py-8">
        <h2 className="greetings text-5xl font-bold text-black">
          Profile
        </h2>
      </div>
      <div className="w-full all-blogs-section flex justify-center items-center pt-12">
        <div className="container flex gap-8 py-4">
        <div className="post-blog w-3/4 bg-white border-2 border-gray-200 p-6 rounded-xl" >
            <div className="user-info flex flex-col gap-2 mb-3">
                <img src="https://miro.medium.com/v2/resize:fit:640/0*ngAthWxOvKZHvsw9" alt="" className='user-profile-img'/>
                <h4 className="user-id-name text-2xl font-semibold text-gray-900">Elon Musk - Founder of Computer</h4>
                <h4 className="password-title text-2xl font-semibold text-gray-900  ">Password</h4>
            </div>
            <form className='flex flex-col items-start'>
              <input
                type="password"
                className="w-80 border rounded p-2 mb-4"
                placeholder="Old Password"
              />
              <input
                type="password"
                className="w-80 border rounded p-2 mb-4"
                placeholder="New Password"
              />
              <input
                type="password"
                className="w-80 border rounded p-2 mb-4"
                placeholder="Confirm Password"
              />
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded"
                style={{ backgroundColor: "#7749F8" }}
              >
                Change Your Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalProfile