<template>
   <div class="divTopLeft rounded-[50px] bg-white p-10 w-full flex flex-col">
    <h1 class="font-extrabold text-[#FF6E6A] text-[36px]">Tasks for today</h1>
    <div class="flex h-full justify-between items-center px-4">
      <ul class="border-r text-center w-1/2 flex flex-col gap-1">
        <li v-for="day in weekDays" v-bind:key="day.id"><button :class="[day.current? 'text-black bg-[#F3F3F3]':'text-[#B9B9B9]',' px-4 py-1 rounded-xl hover:bg-[#F3F3F3] transition']" @click="selectDay(day.id)">{{day.day}}</button></li>
      </ul>
      <Chart :percentage="percentageV"/>
    </div>
    
    

  </div>
</template>

<script>
import Chart from './Chart.vue';
export default {
    components: { Chart },
    data(){
      return {
        
        weekDays : [
          {id:1, day :'Monday', current : false},
          {id:2,day :'Tuesday', current : false},
          {id:3,day :'Wednesday', current : false},
          {id:4,day :'Thursday', current : false},
          {id:5,day :'Friday', current : false},
          {id:6,day :'Saturday', current : false},
          {id:0,day :'Sunday', current : false},
        ],
        currentDay : new Date().getDay(),
        percentageV : 0
      }
    },
    props:{
        percentage : Number,
    },
    updated(){
      
      
    },
    created(){
        
        this.weekDays = this.weekDays.map((element)=> element.id == this.currentDay ? {id: element.id , day : element.day , current : true} : element) 
    },
    mounted(){
      
    },


    methods : {
      selectDay(e){
        
        this.weekDays = this.weekDays.map((element)=>{
          return {id: element.id , day : element.day , current : false}
        })
        this.weekDays = this.weekDays.map((element)=> element.id == e ? {id: element.id , day : element.day , current : true} : element) 
        this.currentDay = this.weekDays.find((element)=> element.current == true).id
        this.$emit('currentDay' , this.currentDay)
        //  this.percentage = this.doTheMath(this.tasksList)
        // console.log(this.tasksList)
      },
      
    },
    watch:{
     percentage:function(newv,oldv){
        this.percentageV = newv
    },
    

     },
 
    } 

</script>

<style scoped>
    h1 {
        font-family: 'Dosis';
        
    }
    button {
      letter-spacing: 4px;
    }
</style>