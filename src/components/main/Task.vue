<template>
     <div class="flex justify-evenly ">
            <button @click="sendChecked"><Checkbox class="logomark" :checked="checked"/></button>
            <span>some text</span>
            <button><img id="threedots" src="@/assets/svg/three-dots.svg" alt=""></button>
        </div>
</template>

<script>
import Logo from '../Logo.vue'
import Checkbox from '../Checkbox.vue'
export default {
  components: { Logo, Checkbox },
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

<style>
 .logomark {
    width : 47px !important;
    height : 47px !important;
 }
</style>