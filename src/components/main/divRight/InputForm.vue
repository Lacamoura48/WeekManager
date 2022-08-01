<template>
<div class="flex flex-col">
    <div class="px-10 mt-5 flex gap-4"  >
    <input v-model="taskText" class="bg-[#F6F6F6] appearance-none rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-[#f3f3f3] hover:bg-[#f3f3f3]" id="taskinput" type="text" @keydown.enter="addTask">
    <button class="text-center bg-[#ffd558] text-[#ffffff] hover:bg-[#fccc3d] py-1 transition px-4 rounded-full" @click="addTask" >Confirm</button>
    <button class="text-center bg-[#ffb3b1] hover:bg-[#ea9c99] text-white py-1 transition px-4 rounded-full" @click="$emit('closeTab')">Cancel</button>
    </div>
    <transition-group name="transitionError">
    <p v-if="error == 'empty'" class="text-start pl-10 pt-2 text-[20px] text-red-500">* Oh no ! You can't add an empty task.</p>
   <p v-if="error == 'long'" class="text-start pl-10 pt-2 text-[20px] text-red-500">* Hold on... I think the text is too long.</p>
</transition-group>
</div>
   
</template>

<script>
export default {
    methods : {
         
      addTask(){
        if(this.taskText == ''){
            this.error = 'empty'
            setTimeout(() => {
                this.error = undefined
            }, 3000);
        } else if (this.taskText.length > 48){
            this.error = 'long'
            setTimeout(() => {
                this.error = undefined
            }, 3000);
        } else {
            this.InAllTasks[this.currentDay].unshift(
          {
            id : Date.now() + this.taskText,
            title : this.taskText,
            checked : false
          }
          
        )
       this.$emit('taskAdded', this.InAllTasks)
       this.taskText = ''
        }
        
        
      },
    },
    data(){
        return {
            error : undefined,
            InAllTasks : [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],
            taskText : '',
            addToggle : false,
        }
    },
    props : {
        currentDay : Number,
        allTasks : Array,
    },
    mounted(){
        this.InAllTasks =  this.allTasks
    }

   
}
</script>

<style scoped>
      .transitionError-enter-from{
      opacity: 0;
      transform: translateX(-30px);
    }
    .transitionError-enter-to{
      opacity: 1;
      transform: translateX(0px);
    }
    .transitionError-leave-from{
      opacity: 1;
      transform: translateX(0px);
    }
    .transitionError-leave-to{
      opacity: 0;
      transform: translateX(30px);
    }
    .transitionError-enter-active{
      transition: all 0.3s;
    }
    .transitionError-leave-active{
      transition: all 0.3s;
    }
</style>