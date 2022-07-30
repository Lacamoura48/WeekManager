<template>
<div class="mainapp flex w-full">
  
    <SideBar />
    <div class="flex w-full p-10 gap-5">
        
        <div class="flex w-full flex-col gap-5">
            <DivTopLeft class="h-full" @currentDay="switchDay"/>
            <DivBotLeft  class="h-full"/>
        </div>

        <DivRight class="flex" :currentDay="currentDay"/>
        
    </div>
   

</div>
</template>

<script>
import SideBar from '../components/main/SideBar.vue';
import DivBotLeft from '../components/main/divBotLeft/DivBotLeft.vue';
import DivRight from '../components/main/divRight/DivRight.vue';
import DivTopLeft from '../components/main/divTopLeft/DivTopLeft.vue';
export default {
    components: { SideBar, DivBotLeft, DivRight, DivTopLeft },
    data(){
        return{
            currentDay : new Date().getDay()
        }
    },
    methods : {
        switchDay(e){
            this.currentDay = e

        }
    }
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