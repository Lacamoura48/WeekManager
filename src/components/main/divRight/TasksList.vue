<template>
  
    <transition-group name="addtask" tag="ul" class="flex flex-col gap-5 pt-10">
        <li v-for="task in tasksArray[currentDay]" :key="task.id">
           <Task @updateList="updateList" :task="task"/>
        </li>
        
    </transition-group>
    
  
</template>

<script>
import Logo from '../../Logo.vue'
import Task from './Task.vue'
export default {
  components: { Logo, Task },

  props : {
    tasksArray : Array,
    currentDay : Number,
  },
  updated(){
    
  },
  methods:{
    updateList(e){
      this.$emit('updateList', e)
    }
    
  }

}
</script>

<style scoped>
 li {
    font-family : 'Dongle';
    font-weight: 300;
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
      transform: translateX(-30px);
    }
    .addtask-enter-active{
      transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
    }
    .addtask-leave-active{
      transition: all 0.3s;
    }
</style>