<template>
<div class="relative w-[280px] h-[280px]">
 
  <!-- <div v-bind:style="{transition: 'background 0.5s',background : editOption }" id="chart" class="w-[240px] h-[240px] rounded-full absolute"></div> -->
  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" tabindex="-1" width="280"  viewBox="0 0 100 100">
         <circle cx="50" cy="50" r="40" stroke="#F2F2F2" stroke-width="3" fill="none" />
        <circle id="bar" cx="50" cy="50" r="40" :stroke="percentage < 50 ? '#FFB3B3' : percentage < 100 ? '#FFDD78' : '#99FFBC'" stroke-width="6" :stroke-dasharray="`${percentage} 100`" fill="none" pathLength="100" transform="rotate(90 50 50)"/>
       
        
      </svg>
  <div  class="w-[160px] h-[160px] rounded-full absolute top-[59px] left-[60px] flex justify-center items-center">
    <div>
        <span class=" flex justify-center items-center text-[32px]">{{percentage}}%</span>
        <p class="text-[17px]">tasks completed</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
   
    props : {
        percentage : Number,
    },
    
}
</script>

<style>
span, p {
    text-align: center;
    font-family: 'Nunito';
    font-weight: 300;
    color: #C6C6C6;
}
#bar {
    transition: all cubic-bezier(0.215, 0.610, 0.355, 1) 0.6s;
}

</style>