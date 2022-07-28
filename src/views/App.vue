<template>
<div class="mainapp">
  
    <SideBar />

</div>
</template>

<script>
import SideBar from '../components/main/SideBar.vue';
export default {
    components: { SideBar }
}
</script>

<style>
    .mainapp {
        background-color: #FFF5F1;
        background-image: url(@/assets/svg/Frame-22.svg);
        background-repeat: no-repeat;
        background-size: cover;

    }
</style>