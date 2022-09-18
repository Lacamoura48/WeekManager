<template>
  <div @click="unselect">
    <transition-group name="addtask" tag="ul" class="flex justify-center flex-col gap-5 pt-10 cursor-pointer">
        <li @click="taskSelected(task.id, $event)" v-for="task in tasksArray[animatedDay]" :key="task.id">
           <Task :class="`task ${task.id == taskSelectedId && 'selected'} ${taskSelectedId && task.id != taskSelectedId ? 'unselected' : ''}`"  @updateList="updateList" @deleteTask="deleteTask" :task="task"/>
        </li>
        
    </transition-group>
  </div>
    
    
  
</template>

<script>


import Task from './Task.vue'
export default {
  components: {Task },
  data(){
    return{
      taskSelectedId : undefined,
      animatedDay : null,
    }
  },
  mounted(){
    this.animatedDay = this.currentDay
  },
  props : {
    tasksArray : Array,
    currentDay : Number,
  },
  updated(){
    this.$emit('updatePercentage')
  },
  
  methods:{
    updateList(e){
      this.$emit('updateList', e)
    },
    unselect(){
      this.taskSelectedId = null
      this.$emit('taskSelected', '')
    },
    taskSelected(id, e ){
      e.stopPropagation()
      this.taskSelectedId = id
      this.$emit('taskSelected', id)
    },
    deleteTask(e){
      this.$emit('deleteTask', e)
    }
    
  },
  watch: {
    currentDay:function(newV){
      this.unselect()
      this.animatedDay = null
      setTimeout(()=>{
              this.animatedDay = newV

      }, 300)
    }
  }

}
</script>

<style scoped>
 li {
    font-family : 'Dongle';
    font-weight: 300;
   
 }
 .task {
  transition: all 0.2s;

 }
 .selected {
  transform: scale(1.02);
  transition: all 0.2s;
  box-shadow: 0 10px 45px rgba(0, 0, 0, 0.066);
  border-radius: 15px;
  padding: 15px 0;
  
 }
 .unselected {
  opacity: 0.4;
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
      transition: all  0.3s;
    }
    .addtask-leave-active{
      transition: all  0.3s;
    }
</style>