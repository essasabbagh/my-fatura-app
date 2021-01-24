<template>
  <!-- component -->
  <div class="container mx-auto h-screen w-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div class="max-h-96 md:h-screen">
        <img
          class="w-screen h-screen object-cover object-top"
          src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div class="flex bg-gray-100 p-10">
        <div class="mb-auto mt-auto max-w-lg">
          <h1 class="text-3xl uppercase">Mohamad Essa Sabbagh</h1>
          <p class="font-semibold mb-5">Front End Developer</p>
          <p>
            Front-End Developer who is open to learning new technologies that
            are especially interested in Web design, UX, and UI design. Working
            to improve my knowledge in these fields. I’m currently learning ...
            Vue.js
          </p>
          <!-- <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">
            Email Me
          </button> -->
          <a
            href="mailto:essasabbagh@gmail.com"
            class="block rounded-md py-3 px-7 mt-10 text-gray-700 "
            >Email Me</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.about {
  height: 100vh !important;
  width: 100% !important;
}
</style>
