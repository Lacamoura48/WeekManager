<template>
  <div class="divRight rounded-[50px] bg-white p-10 w-full flex flex-col">
    <div class="flex justify-between w-full">
        <h1 class="font-extrabold text-[#FF6E6A] text-[36px]">Tasks for today</h1>
        <button class="text-center bg-[#ffffff] text-[#bababa] hover:bg-gray-100 py-2 transition px-4 rounded-full text-[24px] flex gap-3 items-center"><div class="rounded-full w-[28px] h-[28px] bg-[#ffb3b1] flex items-center justify-center text-white"><b class="text-white text-[23px] text-center">+</b></div>Add</button>
    </div>

    <TasksList class="h-full"/>
   
    

  </div>
</template>

<script>
import TasksList from './TasksList.vue';
export default {
    components: { TasksList }
}
</script>

<style scoped>
    h1 {
        font-family: 'Dosis';
        
    }
</style>