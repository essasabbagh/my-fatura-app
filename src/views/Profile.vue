<template>
  <div class="flex justify-start  ">
    <div class="w-full xl:w-3/4 lg:w-11/12 flex">
      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <div class="px-8  text-left">
          <h3 class="pt-4 text-4xl">Profile:</h3>
        </div>
        <form class="px-8 pt-5 pb-8 mb-4 bg-white rounded">
          <!-- Alert Success -->
          <div
            v-if="successMessage"
            class="bg-green-200 px-6 py-4 rounded-md text-sm flex items-center mx-auto "
          >
            <svg
              viewBox="0 0 24 24"
              class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <span class="text-green-800">{{ successMessage }}</span>
          </div>
          <!-- End Alert Success -->
          <!-- Alert Error -->
          <div
            v-if="errorMessage"
            class="bg-red-200 px-6 py-4 rounded-md text-sm flex items-center mx-auto "
          >
            <svg
              viewBox="0 0 24 24"
              class="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
            >
              <path
                fill="currentColor"
                d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
              ></path>
            </svg>
            <span class="text-red-800">{{ errorMessage }} </span>
          </div>
          <!-- End Alert Error -->

          <!-- component -->
          <div
            class=" my-12 pb-6 w-full flex flex-row justify-start items-center md:max-w-sm rounded-lg mx-auto"
          >
            <!-- <div class="relative h-40">
        <img class="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80">
      </div> -->
            <div
              class="avatar relative shadow h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4 transition ease-in-out"
            >
              <input
                @change="selectImage"
                class="invisible absolute"
                ref="profileImage"
                type="file"
                name="avatar"
                accept="image/png,
        image/jpeg"
              />
              <i
                @click="$refs.profileImage.click()"
                class="fas fa-upload absolute top-1/4 left-1/3 text-3xl z-10 text-gray-500 invisible "
              ></i>
              <img
                class="object-cover w-full h-full"
                :src="userInfo.imageUrl"
              />
            </div>
            <div>
              <h1 class="text-2xl font-semibold ml-5">
                {{ userInfo.name }}
              </h1>
            </div>
          </div>

          <div class="mb-6 mt-6 text-center">
            <hr class="my-5 border-t" />
            <button
              @click="uploadImage"
              class="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline transition-all"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selectedImage: "",
    };
  },
  methods: {
    uploadImage() {
      this.$store.dispatch("uploadProfileImage", this.selectedImage);
    },
    selectImage(event) {
      this.selectedImage = event.target.files[0];
      console.log(this.selectedImage);
    },
  },
  mounted() {
    this.$store.commit("setSuccess", null);
  },
  computed: {
    ...mapGetters({
      errorMessage: "errMessage",
      successMessage: "sucMessage",
      userInfo: "userInfo",
    }),
  },
};
</script>

<style>
.avatar:hover i {
  visibility: visible;
}
</style>
