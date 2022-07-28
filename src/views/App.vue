<template>
<div class="mainapp flex w-full">
  
    <SideBar />
    <div class="flex w-full p-10 gap-5">
        
        <div class="flex w-full flex-col items-stretch gap-5">
            <DivTopLeft class="h-full flex-1"/>
            <DivBotLeft  class="h-full flex-1"/>
        </div>

        <DivRight class="flex w-full"/>
        
    </div>
   

</div>
</template>

<script>
import SideBar from '../components/main/SideBar.vue';
import DivBotLeft from '../components/main/DivBotLeft.vue';
import DivRight from '../components/main/DivRight.vue';
import DivTopLeft from '../components/main/DivTopLeft.vue';
export default {
    components: { SideBar, DivBotLeft, DivRight, DivTopLeft }
}
</script>

<style scoped>
    .mainapp {
        background-color: #FFF5F1;
        background-image: url(@/assets/svg/Frame-22.svg);
        background-repeat: no-repeat;
        background-size: cover;

    }
</style>