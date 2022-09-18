<template>
<div>
    <svg :id="checked ? 'circle1' : 'circleOne'" width="45" height="45" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" />
</svg>

    <svg :id="checked ? 'circle2' : 'circleTwo'" width="45" height="45" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20"  />
</svg>
<transition name="seenth">
<svg v-if="checked" id="seen" width="58" height="72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5345 35.3797C10.8612 35.0808 11.3001 34.917 11.7545 34.9243C12.2088 34.9316 12.6415 35.1094 12.9574 35.4186L18.4508 40.8L31.0878 28.9816C31.4172 28.7133 31.842 28.5736 32.2762 28.5905C32.7105 28.6075 33.1216 28.78 33.4265 29.073C33.7314 29.3661 33.9073 29.7578 33.9184 30.1689C33.9296 30.58 33.7753 30.9798 33.4867 31.2872L19.6228 44.2585C19.3034 44.5574 18.8727 44.7257 18.4234 44.7271H18.408C18.1818 44.7258 17.9582 44.6821 17.75 44.5986C17.5418 44.5151 17.3531 44.3935 17.1948 44.2407L10.4934 37.6723C10.1775 37.3631 10.0044 36.9479 10.0121 36.5179C10.0199 36.088 10.2078 35.6785 10.5345 35.3797ZM41.3687 28.9816L28.7369 40.8L28.2862 40.3574C28.1301 40.2034 27.9433 40.08 27.7367 39.9945C27.53 39.9089 27.3076 39.8628 27.0821 39.8588C26.8565 39.8548 26.6324 39.8929 26.4225 39.971C26.2126 40.0492 26.0211 40.1658 25.8589 40.3141C25.6967 40.4624 25.5671 40.6396 25.4774 40.8355C25.3878 41.0313 25.3399 41.242 25.3365 41.4554C25.3331 41.6688 25.3742 41.8808 25.4576 42.0791C25.5409 42.2774 25.6649 42.4582 25.8222 42.6111L27.4775 44.2325C27.6358 44.3854 27.8244 44.507 28.0327 44.5905C28.2409 44.674 28.4645 44.7177 28.6906 44.719H28.7095C29.1587 44.7176 29.5895 44.5493 29.9089 44.2504L43.7727 31.2791C44.0552 30.9703 44.204 30.572 44.1895 30.1638C44.175 29.7556 43.9983 29.3676 43.6946 29.0774C43.3909 28.7872 42.9827 28.6161 42.5515 28.5983C42.1203 28.5806 41.6979 28.7174 41.3687 28.9816Z" fill="white"/>
</svg>
</transition>
</div>
  
</template>

<script scoped>
    import a1 from '../../../assets/sounds/notif.mp3';
    import { Howl } from 'howler';
export default {
    name : 'Checkbox',
    data(){
        return{
            doneSound : new Howl({
        src: [a1],
        volume:1,
       
        autoplay: false, loop: false,
    }),
        }
    },
    props : {
        checked : Boolean,
    },
    watch : {
        checked:function(newv){
            
            this.$emit('checkdone', newv)
            if(newv == true){
                            this.doneSound.play()

            }
        }
    }
   
    
}
</script>

<style scoped>
div {
   
    position: relative;
    width: 64px;
    height: 47px;
  
    
}
#seen {
    position: absolute;
    left: 5%;
    top: -35%;
    width:58px;
    height:72px;
}
#circle1 {
     position: absolute;
     width: 45px;
     fill : #FF6666;
     opacity: 0.7;
     transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
}
#circleOne {
     position: absolute;
     width: 45px;
     fill : #F4F4F4;
     opacity: 1;
     transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}
#circle2 {
    position: absolute;
    width: 45px;
    left: 20px;
    fill:#FCDE62;
    opacity: 0.7;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
} 
#circleTwo {
    position: absolute;
    width: 45px;
    left: 0px;
    fill:#F4F4F4;
    opacity: 1;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
} 
.seenth-enter-from {
        opacity: 0;
        transform: translateX(-30px);
}
.seenth-enter-to {
    opacity: 1;
    transform: translateX(0);
}   
.seenth-enter-active {
    transition: all cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
}
</style>