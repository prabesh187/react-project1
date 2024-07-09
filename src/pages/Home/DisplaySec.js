import React from 'react'

const DisplaySec = () => {
  return (
    <div className='grid grid-cols-2 items-center'>

      <div className="dis-img h-[600px]">

        <dotlottie-player src="https://lottie.host/caf203fc-0aa4-450f-aa6c-efec67c04c38/kZZXiqEFBh.json" background="transparent" speed="1" loop autoplay></dotlottie-player>

      </div>



      <div className="dis-info space-y-3">
        <h1 className='text-3xl font-bold'>Pet Available For Near You </h1>
        <p className='text-red-700 italic'>Every Pet Deserves A Good Home </p>
        <p>A pet adoption portal serves as a comprehensive online platform connecting adoptable pets with potential owners. It features detailed profiles of animals including photos, descriptions, and sometimes videos to showcase their personality and appearance. Users can search for pets based on criteria like species, breed, age, and location, making it easier to find a suitable match. The portal provides information on the adoption process, including requirements, fees, and paperwork, ensuring clarity for both adopters and the organizations managing the listings. It also offers educational resources on pet care and ownership, fostering responsible adoption decisions. By supporting multiple shelters and rescues, the portal enhances visibility for pets in need, facilitating successful adoptions and enriching the lives of both pets and adoptive families.</p>
      </div>



    </div>
  )
}

export default DisplaySec