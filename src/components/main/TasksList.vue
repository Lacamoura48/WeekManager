<template>
  <div>
    <ul class="flex flex-col">
        <li>
           <Task />
        </li>
        <li class="border"><Task /></li>
        <li class="border"><Task /></li>
        <li class="border"><Task /></li>
    </ul>
  </div>
</template>

<script>
import Logo from '../Logo.vue'
import Task from './Task.vue'
export default {
  components: { Logo, Task },

}
</script>

<style scoped>
 li {
    font-family : 'Dongle';
    font-weight: 300;
 }

</style>