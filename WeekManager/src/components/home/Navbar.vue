<template>
  <div class="mx-36 pt-8 flex justify-between items-center">
    <Logo />
    <div class="flex gap-[45px] text-[25px] text-[#8A8A8A] items-center">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">More</a>
        <router-link to="/app" class=" w-[113px] h-[52px] text-center bg-gradient-to-b from-[#FF6666] to-[#FF9595] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[13px] font-semibold text-[25px]">Use it</router-link>
    </div>
    
    
  </div>
</template>

<script>
import Logo from '../Logo.vue';

export default {
    name: "Navbar",
    components: { Logo }
}
</script>

<style>

</style>