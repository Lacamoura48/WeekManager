<template>
  <div class="divRight rounded-[50px] bg-white p-10 w-full flex flex-col">
    <div class="flex justify-between w-full">
        <h1 class="font-extrabold text-[#FF6E6A] text-[36px]">Tasks for today</h1>
        <button @click="showAdd" class="text-center bg-[#ffffff] text-[#bababa] hover:bg-gray-100 py-2 transition px-4 rounded-full text-[24px] flex gap-3 items-center"><div class="rounded-full w-[28px] h-[28px] bg-[#ffb3b1] flex items-center justify-center text-white"><b class="text-white text-[23px] text-center">+</b></div>Add</button>
    </div>

    <transition name="addtask"> 
      <InputForm :currentDay="currentDay" :allTasks="allTasks" v-if="addToggle" @taskAdded="updateTaskList" @closeTab="showAdd"/>
    </transition>
    
    <TasksList class="h-full" @deleteTask="deleteTask" :tasksArray="allTasks" :currentDay="currentDay" @updateList="updateList" @updatePercentage="updatePercentage"/>
    
    

  </div>
</template>

<script>
import TasksList from './TasksList.vue';
import InputForm from './InputForm.vue';


export default {
    components: { TasksList, InputForm },
    data(){
      return{
        // currenttDay : this.currentDay,
        addToggle : false,
        percentage : 0 ,
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
   created(){
    if(localStorage.getItem('taskList')){

      this.allTasks = JSON.parse(localStorage.getItem("taskList"));
      // localStorage.clear()
    }else {
      const taskListJson = JSON.stringify(this.allTasks)
      localStorage.setItem('taskList', taskListJson)
    }
      
      this.percentage = this.doTheMath(this.allTasks, this.currentDay);
      this.$emit("updatePercentage",this.percentage);
  },

    methods : {
      
      showAdd(){
        this.addToggle = !this.addToggle
      },
        updateList(e){
      this.allTasks[this.currentDay] = this.allTasks[this.currentDay].map((element)=> element.id == e[0]? {...element, checked:e[1]} : element)
      this.percentage = this.doTheMath(this.allTasks, this.currentDay)
      const tasksjson = JSON.stringify(this.allTasks);
      localStorage.setItem('taskList', tasksjson)
      this.$emit('updatePercentage',this.percentage)
      
    },
    updatePercentage(){
      this.percentage = this.doTheMath(this.allTasks, this.currentDay)
     
      this.$emit('updatePercentage',this.percentage)
    },
    updateTaskList(e){
        this.allTasks = e
        const addTaskjson = JSON.stringify(e)
        localStorage.setItem('taskList', addTaskjson)
        this.percentage = this.doTheMath(this.allTasks, this.currentDay)
        this.$emit('updatePercentage',this.percentage)
        
    },
    deleteTask(e){
      this.allTasks[this.currentDay] = this.allTasks[this.currentDay].filter((item)=> item.id != e)
      const tasksjson = JSON.stringify(this.allTasks);
      localStorage.setItem('taskList', tasksjson)
      this.percentage = this.doTheMath(this.allTasks, this.currentDay)
      this.$emit('updatePercentage',this.percentage)
     

    },
    doTheMath(theList, currd){
        const daysList = theList[currd];
       
      let tasksDone = 0;
      for (let i = 0; i < daysList.length; i++) {
        if(daysList[i].checked == true){
          tasksDone++
        }  
      }
      return Math.floor((tasksDone/daysList.length ) * 100 ? (tasksDone/daysList.length ) * 100 : 0)
      
      }
    },
  
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