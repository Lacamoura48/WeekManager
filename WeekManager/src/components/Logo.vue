<template>
<div>
    <img id="circle1" src="@/assets/svg/Ellipse1.svg" alt="">
    <img id="circle2" src="@/assets/svg/Ellipse2.svg" alt="">
</div>
  
</template>

<script>
export default {
    name : 'Logo'
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
</style>