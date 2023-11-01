import React from 'react'

function Body() {
  return (
    <div><section class="bg-white dark:bg-white">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-black">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full  rounded-lg" src="https://img.freepik.com/premium-photo/photography-outdoor-cafe-daylight-with-smooth-lighting-ai-generated_837315-3722.jpg" alt="office content 1"/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyds1bmaSgKEydfzPMHYhNSMeifE2apOS89w&usqp=CAU" alt="office content 2"/>
        </div>
    </div>
</section></div>
  )
}

export default Body