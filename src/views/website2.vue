<template>
 <div>
   <div class="toptitleup" style="transform: scale(0.5);">
     <div class="mouse">

     </div>
     <p class="mousep" >鼠标滚动</p>
   </div>
 </div>
</template>

<script>
export default {
  name: "website2"
}
</script>
<style scoped>
  .toptitleup {
    /* animation-name: bounceInUp;
    animation-duration: 1s; */
    margin-top: 300px;
    transform: scale(0.5);
  }
p.mousep {
  font-size: 50px;
  font-weight: 300;
  /* margin-top: 50px; */
  font-family: "Microsoft YaHei", "Lantinghei SC", "Open Sans", Arial,
  "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", "SimSun", sans-serif;
  letter-spacing: 12px;
  text-indent: 12px;
  color: black;
  -webkit-animation: colorText 5s ease-out infinite,
  nudgeText 5s ease-out infinite;
  animation: colorText 5s ease-out infinite, nudgeText 5s ease-out infinite;
}
.mouse {
  margin: 0 auto;
  background: #4e5559 -webkit-linear-gradient(transparent 0%, transparent 50%, #ffffff
  50%, #ffffff 100%);
  background: #4e5559
  linear-gradient(transparent 0%, transparent 50%, #ffffff 50%, #ffffff 100%);
  position: relative;
  width: 52px;
  height: 88px;
  background-size: 100% 100%;
  border-radius: 100px;
  background-size: 225%;
  -webkit-animation: colorSlide 5s linear infinite,
  nudgeMouse 5s ease-out infinite;
  animation: colorSlide 5s linear infinite, nudgeMouse 5s ease-out infinite;
}
.mouse:before,
.mouse:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.mouse:before {
  width: 46px;
  height: 82px;
  background-color: #222a30;
  border-radius: 100px;
}
.mouse:after {
  background-color: red;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  -webkit-animation: trackBallSlide 5s linear infinite;
  animation: trackBallSlide 5s linear infinite;
}
@-webkit-keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: #4e5559;
  }
  29.99% {
    background-color: red;
    background-position: 0% 0%;
  }
  30% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: #4e5559;
  }
  59.99% {
    background-color: red;
    background-position: 0% 0%;
  }
  60% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: #4e5559;
  }
  89.99%,
  100% {
    background-color: red;
  }
}
@keyframes colorSlide {
  0% {
    background-position: 0% 100%;
  }
  20% {
    background-position: 0% 0%;
  }
  21% {
    background-color: #4e5559;
  }
  29.99% {
    background-color: red;
    background-position: 0% 0%;
  }
  30% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  50% {
    background-position: 0% 0%;
  }
  51% {
    background-color: #4e5559;
  }
  59.99% {
    background-color: red;
    background-position: 0% 0%;
  }
  60% {
    background-color: #4e5559;
    background-position: 0% 100%;
  }
  80% {
    background-position: 0% 0%;
  }
  81% {
    background-color: #4e5559;
  }
  89.99%,
  100% {
    background-color: red;
  }
}
@-webkit-keyframes trackBallSlide {
  0% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  14% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  15%,
  19% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  28%,
  29.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  44% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  45%,
  49% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  58%,
  59.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  74% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  75%,
  79% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  88%,
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
}
@keyframes trackBallSlide {
  0% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  14% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  15%,
  19% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  28%,
  29.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  44% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  45%,
  49% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  58%,
  59.99% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    -webkit-transform: scale(0.9) translateY(5px);
    transform: scale(0.9) translateY(5px);
  }
  74% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(40px);
    transform: scale(0.4) translateY(40px);
  }
  75%,
  79% {
    opacity: 0;
    -webkit-transform: scale(0.4) translateY(-20px);
    transform: scale(0.4) translateY(-20px);
  }
  88%,
  100% {
    opacity: 1;
    -webkit-transform: scale(1) translateY(-20px);
    transform: scale(1) translateY(-20px);
  }
}
@-webkit-keyframes nudgeMouse {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes nudgeMouse {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes nudgeText {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes nudgeText {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  20% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  30% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  60% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  80% {
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@-webkit-keyframes colorText {
  21% {
    color: rgba(255, 255, 255, 0);
  }
  30% {
    color: black;
  }
  51% {
    color: rgba(255, 255, 255, 0);
  }
  60% {
    color: black;
  }
  81% {
    color: rgba(255, 255, 255, 0);
  }
  90% {
    color: black;
  }
}
@keyframes colorText {
  21% {
    color: rgba(255, 255, 255, 0);
  }
  30% {
    color: black;
  }
  51% {
    color: rgba(255, 255, 255, 0);
  }
  60% {
    color: black;
  }
  81% {
    color: rgba(255, 255, 255, 0);
  }
  90% {
    color: black;
  }
}
</style>