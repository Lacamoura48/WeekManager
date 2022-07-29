<template>
  <div>
    <ul class="flex flex-col gap-5 pt-10">
        <li>
           <Task />
        </li>
        <li><Task /></li>
        <li><Task /></li>
        <li><Task /></li>
    </ul>
  </div>
</template>

<script>
import Logo from '../../Logo.vue'
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