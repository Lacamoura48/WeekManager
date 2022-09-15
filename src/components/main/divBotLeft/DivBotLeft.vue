<template>
  <div class="rounded-[50px] bg-white w-full p-6">
    <div v-if="false" class="w-full h-full flex justify-center items-center">
      <p class="text-3xl">choose a task to start the timer !</p>
    </div>
    <div class="w-full h-full relative overflow-hidden flex justify-center items-center rounded-[40px] bg-[#ffffff]">
      <div class="blob-cont z-0 absolute scale-150 w-full h-full top-0">
      </div>
      <div class="blob-conts z-0 absolute left-0 top-0 bottom-0">

      </div>
      <div v-if="started" class="flex flex-col gap-8 z-10">
        <span class="text-7xl">{{minutesDisplay > 9 ? minutesDisplay : '0'+minutesDisplay}}:{{secondsDisplay > 9 ? secondsDisplay : '0'+secondsDisplay}} </span><span v-if="false" class="text-3xl text-red-500">BREAK TIMER</span>
        <div class="flex gap-5 justify-center">
          <button v-if="!paused" @click="pauseCounter" class="bg-[#FFE7A0] text-white px-5 py-3 text-2xl rounded-full hover:bg-[#e6cd80] transition border-2 border-white"><font-awesome-icon icon="fa-solid fa-pause" /></button>
          <button v-else @click="playAfterPause" class="bg-[#FFE7A0] text-white px-5 py-3 text-2xl rounded-full hover:bg-[#e6cd80] transition border-2 border-white"><font-awesome-icon icon="fa-solid fa-play" /></button>
          <button @click="stopCounter" class="text-white bg-[#FFAEAC] px-5 py-3 text-2xl rounded-full hover:bg-[#ee8280] transition"><font-awesome-icon icon="fa-solid fa-stop" /></button>
        </div>
      </div>
      <div v-else class="flex flex-col gap-8 z-10">
        <p class="text-7xl text-gray-400">{{times[currentTime].display}}<span class="text-3xl">minutes</span> </p>
        <div class="flex gap-5 justify-center text-gray-400">
          <button @click="selectTime(1)" class="bg-white px-5 py-3 text-2xl rounded-full hover:text-black transition"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
          <button @click="startCounter" class="bg-white border-b-4 px-5 py-3 text-2xl rounded-full hover:text-black transition"><font-awesome-icon icon="fa-solid fa-play" /></button>
          <button @click="selectTime(2)" class="bg-white px-5 py-3 text-2xl rounded-full rotate-180  hover:text-black transition"><font-awesome-icon icon="fa-solid fa-chevron-left" /></button>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
    import { Howl, Howler } from 'howler';
    import a1 from '../../../assets/sounds/empty_loop_for_js_performance.ogg'
    import a2 from '../../../assets/sounds/empty_loop_for_js_performance.wav'

export default {

  data(){
    return {
      progress : 0,
      started : false,
      paused : false,
      times : [
       {display : '1,5', time : 90},
        {display : '5', time : 300},
        {display : '10', time : 600},
        {display : '20', time : 1200},
        {display : '40', time : 2400},
        {display : '60', time : 3600},
        {display : '75', time : 4500},
    ],
    currentTime : 0,
    emptySound : new Howl({
        src: [a1,a2],
        volume:0.5,
       
        autoplay: false, loop: true,
    }),
      minutesDisplay : 0,
      secondsDisplay : 0,
      theInterval : null
    }
  },
  props :{
    taskSelected : Boolean,
  },
  mounted(){
    let timeRemaining = this.times[this.currentTime].time
        this.minutesDisplay = Math.floor(timeRemaining / 60)
        this.secondsDisplay = timeRemaining % 60
          const lolo = document.querySelector('.blob-cont');
          const bobo = document.querySelector('.blob-conts');
          lolo.style.left = this.progress -118  + '%'
          bobo.style.right = this.progress * -1 + 100  + '%'
  },
  methods : {
    selectTime(n){
      switch(n){
        case 1 :{
          if(this.currentTime != 0){
            this.currentTime--
          }    
          break
        }
        case 2 :{
          if(this.currentTime != this.times.length -1){
            this.currentTime++
          }
          break
        }
      }
    },
    counterMath(){
        
        if(this.minutesDisplay == 0 && this.secondsDisplay == 0){
          this.stopCounter()
        }else {
          if(this.secondsDisplay == 0){
            this.minutesDisplay--
            this.secondsDisplay = 59
            this.progress = (((this.minutesDisplay*60)+this.secondsDisplay)*100/this.times[this.currentTime].time)*-1 + 100
            
          }else {
            this.secondsDisplay--
            this.progress = (((this.minutesDisplay*60)+this.secondsDisplay)*100/this.times[this.currentTime].time)*-1 + 100
            
          }
        }
      
      },
    startCounter(){
      this.started = true
      this.theInterval = setInterval(this.counterMath,1000)
      this.emptySound.play()
    },
   
    pauseCounter(){
      clearInterval(this.theInterval)
      this.paused = true
    },
    playAfterPause(){
      this.paused = false
      this.theInterval = setInterval(this.counterMath,1000)

    },
    
   


    stopCounter(){
      let timeRemaining = this.times[this.currentTime].time
        this.minutesDisplay = Math.floor(timeRemaining / 60)
        this.secondsDisplay = timeRemaining % 60
      this.started = false
      this.progress = 0
      clearInterval(this.theInterval)
      this.currentTime = 0
      this.emptySound.stop()
    }
  },
  watch : {
          progress:function (newV){
            
            const lolo = document.querySelector('.blob-cont');
          const bobo = document.querySelector('.blob-conts');
          if(newV > 95){
            lolo.style.left = newV - 105 + '%'

          }else {
                      lolo.style.left = newV - 118  + '%'

          }
     
          bobo.style.right = ((newV - 25) * -1) + 100  + '%'
          },
          currentTime:function(newww){
            let timeRemaining = this.times[newww].time
        this.minutesDisplay = Math.floor(timeRemaining / 60)
        this.secondsDisplay = timeRemaining % 60
          }
        }
}
</script>

<style>
.blob-cont {
  background-image: url(@/assets/svg/blob.svg);
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat ;
  transition: all 0.5s;
}
.blob-conts {
  background-color: #FFE7A0;
  transition: all 0.5s;
}
    
</style>