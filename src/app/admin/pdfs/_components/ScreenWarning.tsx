import React from 'react'

const ScreenWarning = () => {
  return (
    <div>
            <div className="flex justify-center items-center h-screen">
      <div className="bg-white max-w-[500px] rounded-2xl p-6 drop-shadow-2xl flex flex-col gap-6 justify-center">
        <h1 className="text-[20px] font-500 text-center font-plus-jakarta-sans">
          The dashboard is not supported on devices with a screen width smaller
          than <span className="text-primary-500">1300 pixels</span>. Please use a larger device.
        </h1>
      </div>
    </div>

    </div>
  )
}

export default ScreenWarning