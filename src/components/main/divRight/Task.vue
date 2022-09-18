<template>
  <div>
     <div class="flex justify-between px-7 items-center">
      <div class="flex gap-6 items-center">
        <button @click="sendChecked"><Checkbox class="logomark scale-110" @checkdone="updateList" :checked="checked"/></button>
            <span>{{task.title}}</span>
      </div>
            <div class="relative flex items-center">
              <button @click="openPannel"><img v-if="opened" class="w-7" src="@/assets/svg/remove.svg" alt=""><img v-else id="threedots" class="w-8" src="@/assets/svg/three-dots.svg" alt=""></button>
              <button @click="deleteTask" :class="[opened ? 'trash-opened':'trash-closed','absolute -top-2 px-3 py-2 bg-gray-100 hover:bg-red-100 group rounded-full']"><font-awesome-icon class="text-[25px] text-gray-400 group-hover:text-red-600" icon="fa-solid fa-trash" /></button>
              <button :class="[opened ? 'edit-opened':'edit-closed','absolute -top-2 px-3 py-2 bg-gray-100 rounded-full hover:bg-yellow-100 group']"><font-awesome-icon class="text-[25px] text-gray-400  group-hover:text-yellow-400" icon="fa-solid fa-pen-to-square" /></button>
              
            </div>
        </div>
        
        </div>
</template>

<script>

import Checkbox from './Checkbox.vue'
export default {
  components: {Checkbox },
  props : {
    task : Object,
  },

  data(){
    return {
        checked : this.task.checked,
        taskChecked : this.task.checked,
        opened : false,
    }
  },
  methods : {
    sendChecked(e){
      e.stopPropagation()
      this.checked = !this.checked
    },
    openPannel(e){
      e.stopPropagation()
      this.opened = !this.opened
     
    },
    updateList(e){
    
    this.$emit('updateList', [this.task.id , e])
  },
  deleteTask(){
    this.$emit('deleteTask', this.task.id)

  }
  },
 watch:{
  task:function(newV){
    this.checked = newV.checked
  }
 }
  

}
</script>

<style scoped>
 .logomark {
    width : 47px !important;
    height : 47px !important;
 }
 span {
  font-family: 'Dongle';
  font-size: 36px;
  font-weight: 300;
  color: #A5A5A5;
 }
 .trash-closed{
    left: 0;
    opacity: 0;
    transition: all 0.3s;
    pointer-events: none;
    
 }
 .trash-opened{
  left: -54px;
  opacity: 1;
  transition: all 0.3s;
 }
 .edit-closed{
  right: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
 }
 .edit-opened{
  right: -54px;
  opacity: 1;
  transition: all 0.3s;
  transition-delay: 0.1s;
 }
</style>