<template>
  <div>
     <div class="flex justify-between px-10 mb-2">
      <div class="flex gap-5">
        <button @click="sendChecked"><Checkbox class="logomark" :checked="checked"/></button>
            <span>{{task.title}}</span>
      </div>
            
            <button><img id="threedots" class="w-8" src="@/assets/svg/three-dots.svg" alt=""></button>
        </div>
          <svg class="m-auto" width="436" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H436" stroke="#C8C8C8"/>
          </svg>
        </div>
</template>

<script>
import Logo from '../../Logo.vue'
import Checkbox from './Checkbox.vue'
export default {
  components: { Logo, Checkbox },
  props : {
    task : Object,
  },

  data(){
    return {
        checked : false
    }
  },
  methods : {
    sendChecked(){
      this.checked = !this.checked
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
</style>