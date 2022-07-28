<template>
  <div class="heroSection">
    <div class=" gap-20 flex justify-center items-center pt-[61px] w-full">
      <div class=" relative w-[750px] h-[588px]">
        <img
          class="victor-3 absolute top-0 left-0 right-0 bottom-0"
          src="@/assets/svg/Vector-3.svg"
          alt=""
        />
        <h1 class="bigtext">
          Get the <span> best </span> <br />
          out of your <span> Week </span>
        </h1>
        <p class="text-white text-[26px] font-light absolute top-[275px] left-[87px] max-w-[700px]">
          Use the shortest possible time to create tasks, <br> and don’t waste a
          second of your time.
        </p>
         <router-link to="/app" class=" absolute top-[390px] left-[87px] w-[200px] h-[52px] text-center bg-white text-[#ff6666] py-2 px-4 rounded-[13px] font-semibold text-[25px]">Try it Now</router-link>
      </div>

      <img class="willow z-10" src="@/assets/svg/Willow-guy.svg" alt="" />
    </div>
    <img class="victor-2" src="@/assets/svg/Vector-2.svg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.victor-2 {
  /* width: 1026px; */

  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.victor-3 {
  width : 100%;
  min-width: 100%;
  height: 588px;
}
.willow {
  max-width: 100%;
}
.bigtext {
  position: absolute;
  left: 87px;
  top: 105px;
  font-family: "Patua One" !important ;
  font-size: 72px;
  color: white;
  line-height: 70px;
}
span {
  font-family: "Patua One" !important ;
  color: #ff6666;
}
@media only screen and (max-width:1400px) {
    p {
      font-size : 19px !important;
      top : 320px !important;
    }
}
@media only screen and (max-width:1300px) {
    .willow {
  display: none;

}
.victor-2 {
  width : 50%;
}
    p {
      font-size : 19px !important;
      top : 320px !important;
    }
}
@media only screen and (max-width:570px) {
    .willow {
  display: none;

}
.victor-2 {
  width : 30%;
}
    p {
      font-size : 15px !important;
      top : 320px !important;
    }
}
</style>