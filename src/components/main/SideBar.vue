<template>
  
    <div :class="[entended ? 'entended' : '','sidebar z-20 flex flex-col gap-28']">
    <div :class="!entended ? 'flex justify-between pt-20 px-7 ' : 'flex pt-20'">
      <Logo v-if="!entended" class="logo scale-75"/>
      <button :class="!entended ? 'logobtn bg-[#F6F6F6] hover:bg-gray-200 w-14 h-14 rounded-full flex justify-center items-center mt-4 mb-0 mx-0' : ' logobtn bg-[#F6F6F6] hover:bg-gray-200 w-12 h-12 rounded-full flex justify-center items-center mb-4 mt-0  rotate-180  mx-auto'" @click="enextend">
        <img src="@/assets/svg/right-lg.svg" alt="" />
        
      </button>
    </div>
    <div class="btns">
        <ul :class="!entended ? 'flex flex-col gap-5 opacity-1': 'flex flex-col gap-5 opacity-0'">
            <li>
                
                <router-link to="/" class="text-center bg-[#F6F6F6] text-[#999999] hover:bg-gray-200 py-2 transition px-4 rounded-full text-[25px] flex gap-7 items-center ml-9 mr-14"><div class="rounded-full w-[45px] h-[45px] bg-[#FFAEAC] flex items-center justify-center text-white"><font-awesome-icon icon="fa-solid fa-house" /></div>Home</router-link>
            </li>
            <li> <a href="" class="text-center bg-[#F6F6F6] text-[#999999] hover:bg-gray-200 py-2 transition px-4 rounded-full text-[25px] flex gap-7 items-center ml-9 mr-14"><div class="rounded-full w-[45px] h-[45px] bg-[#FFAEAC] flex items-center justify-center text-white"><font-awesome-icon icon="fa-solid fa-circle-info" /></div>About</a></li>
            <li> <a href="https://github.com/Lacamoura48" target="_blank" class="text-center bg-[#F6F6F6] text-[#999999] hover:bg-gray-200 py-2 transition px-4 rounded-full text-[20px] flex gap-7 items-center ml-9 mr-14"><div class="rounded-full w-[45px] h-[45px] bg-[#FFAEAC] flex items-center justify-center text-white"><font-awesome-icon icon="fa-brands fa-github" /></div>My GitHub</a></li>
        </ul>
    </div>
    </div>

</template>

<script>

import Logo from "../Logo.vue";

export default {
  components: { Logo },
  data(){
    return{
        entended : false
    }
  },
  methods : {
    enextend(){
        console.log("yes")
        this.entended = !this.entended
    }
  }
};

</script>

<style scoped>
.sidebar {
  min-height: calc(100vh - 40px);
  background-color: white;
  border-radius: 45px;
  width: 320px;
  transition: width cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.3s;
  transition-delay: 0.1s ;
  
}
.entended {
    width: 100px !important;
}
.logobtn {
    transition: all 0.5s;
}
.logo {
    transition: all 0.5s;
    transition-delay: 0.5s;
}
ul {
    transition: all 0.7s;
}



</style>