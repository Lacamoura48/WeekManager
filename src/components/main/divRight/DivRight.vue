<template>
  <div class="divRight rounded-[50px] bg-white p-10 w-full flex flex-col">
    <div class="flex justify-between w-full">
        <h1 class="font-extrabold text-[#FF6E6A] text-[36px]">Tasks for today</h1>
        <button @click="showAdd" class="text-center bg-[#ffffff] text-[#bababa] hover:bg-gray-100 py-2 transition px-4 rounded-full text-[24px] flex gap-3 items-center"><div class="rounded-full w-[28px] h-[28px] bg-[#ffb3b1] flex items-center justify-center text-white"><b class="text-white text-[23px] text-center">+</b></div>Add</button>
    </div>

    <transition name="addtask">
    <div class="px-10 mt-5 flex gap-4"  v-if="addToggle">
    <input v-model="taskText" class="bg-[#F6F6F6] appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#f3f3f3] hover:bg-[#f3f3f3]" id="taskinput" type="text">
    <button class="text-center bg-[#ffd558] text-[#ffffff] hover:bg-[#fccc3d] py-1 transition px-4 rounded-full" @click="addTask">Confirm</button>
    <button class="text-center bg-[#ffb3b1] hover:bg-[#ea9c99] text-white py-1 transition px-4 rounded-full" @click="showAdd">Cancel</button>
    </div>
    </transition>
    
    <TasksList class="h-full" :tasksArray="allTasks" :currentDay="currentDay"/>
    
    

  </div>
</template>

<script>
import TasksList from './TasksList.vue';
export default {
    components: { TasksList },
    data(){
      return{
        // currenttDay : this.currentDay,
        addToggle : false,
        taskText : '',
        allTasks : [
          [],
          [],
          [],
          [],
          [],
          [],
          [],
        ]
      }
    },
    props : {
      currentDay : Number,
    },

    methods : {
      showAdd(){
        this.addToggle = !this.addToggle
      },
      addTask(){
        this.allTasks[this.currentDay].unshift(
          {
            id : Date.now() + this.taskText,
            title : this.taskText,
          }
        )
        console.log(this.allTasks)
        
      }
    }
}
</script>

<style scoped>
    h1, input {
        font-family: 'Dosis';
        
    }
    .addtask-enter-from{
      opacity: 0;
      transform: translateY(-30px);
    }
    .addtask-enter-to{
      opacity: 1;
      transform: translateY(0px);
    }
    .addtask-leave-from{
      opacity: 1;
      transform: translateY(0px);
    }
    .addtask-leave-to{
      opacity: 0;
      transform: translateY(-30px);
    }
    .addtask-enter-active{
      transition: all 0.5s;
    }
    .addtask-leave-active{
      transition: all 0.3s;
    }
    
    

</style>