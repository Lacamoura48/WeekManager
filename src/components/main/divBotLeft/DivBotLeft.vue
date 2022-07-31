<template>
  <div class="divBotLeft rounded-[50px] bg-white p-10 w-full flex flex-col">
    <h1 class="font-extrabold text-[#FF6E6A] text-[36px]">More...</h1>
    <div class="flex h-full justify-around items-center px-4">
      <div class="border-r border-1 h-1/2 flex items-center pr-10">
        <font-awesome-icon icon="fa-solid fa-gear" class="text-[80px] text-[#dddddd] gearone animate-spin"/>
        <font-awesome-icon icon="fa-solid fa-gear" class="text-[60px] text-[#c5c5c5] geartwo"/>
      </div>
      
      
        
        <h2 class="text-[25px] text-[#B9B9B9]">Work is still in progress...</h2>
      
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
 h1 {
        font-family: 'Dosis';
        
    }
    .gearone{
      animation: spin 6s linear infinite !important;
      animation-delay: 0.5s !important;
    }
    .geartwo{
      animation: spin 6s reverse linear infinite !important;
    }
    h2 {
       
    }
    
</style>