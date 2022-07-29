<template>
   <div class="divTopLeft rounded-[50px] bg-white">
    <div class="flex h-full justify-between items-center px-16">
      <ul class="border-r text-center w-1/2">
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wedensday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
        <li>Sunday</li>
      </ul>
      <Chart />
    </div>
    
    

  </div>
</template>

<script>
import Chart from './Chart.vue';
export default {
    components: { Chart }
}
</script>

<style>

</style>