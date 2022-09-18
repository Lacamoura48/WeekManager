<template>
<div class="mainapp flex w-full">
  <div class="py-5 pl-5">
        <SideBar />

  </div>
    <div class="flex w-full p-5 gap-5">
        
        <div class="flex w-full flex-col gap-5">
            <DivTopLeft class="h-full" @currentDay="switchDay" :percentage="percentage"/>
            <DivBotLeft :timerShown="timerShown" @taskCompleted="completeTask"  class="h-full"/>
        </div>

        <DivRight  class="flex h-full" :taskCompleted="taskCompleted" :currentDay="currentDay" @taskSelected="showTimer" @updatePercentage="updatePercentage"/>
        
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
            currentDay : new Date().getDay(),
            percentage : 0,
            timerShown : '',
            taskCompleted : false,
        }
    },
    methods : {
        switchDay(e){
            this.currentDay = e

        },
        showTimer(e){
        this.timerShown = e
      },
      completeTask(){
       
        this.taskCompleted = true
        setTimeout(()=>{
            this.taskCompleted = false
        },1000)
    
      },

    updatePercentage(e){
        this.percentage = e
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