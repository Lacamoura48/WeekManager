<template>
<div class="relative w-[240px] h-[240px]">
  <div class="w-[225px] h-[225px] rounded-full border-8 absolute top-[7px] left-[7px]"></div>
  <div v-bind:style="{background : editOption }" id="chart" class="w-[240px] h-[240px] rounded-full absolute"></div>
  <div  class="w-[195px] h-[195px] rounded-full absolute bg-white top-[23px] left-[22px] flex justify-center items-center">
    <div>
        <span class=" flex justify-center items-center text-[34px]">65%</span>
        <p class="text-[21px]">tasks completed</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            editOption : `conic-gradient(#FFDD78 0% ${30}%,transparent 0% 100%)`
        }
    }
}
</script>

<style>
span, p {
    text-align: center;
    font-family: 'Nunito';
    font-weight: 300;
    color: #C6C6C6;
}
</style>