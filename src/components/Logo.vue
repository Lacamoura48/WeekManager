<template>
<div>
    <img id="circle1" src="@/assets/svg/Ellipse1.svg" alt="">
    <transition name="liftright">
    <img id="circle2" src="@/assets/svg/Ellipse2.svg" alt="" v-if="showthis">
    </transition>
</div>
  
</template>

<script scoped>
export default {
    name : 'Logo',
    data(){
        return{
            showthis : false
        }
    },
    mounted(){
        this.showthis = true
    }
    
}
</script>

<style scoped>
div {
   
    position: relative;
    width: 120px;
    height: 80px;
  
    
}
#circle1 {
     position: absolute;
     width: 80px;
     
}
#circle2 {
    position: absolute;
    width: 80px;
    left: 40px;
} 
.liftright-enter-from {
        opacity: 0;
        transform: translateX(-40px);
}
.liftright-enter-to {
    opacity: 1;
    transform: translateX(0);
}   
.liftright-enter-active {
    transition: all cubic-bezier(0.77, 0, 0.175, 1) 1s;
}
</style>