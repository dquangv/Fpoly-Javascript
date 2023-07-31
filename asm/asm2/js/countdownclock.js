// ngày giờ hết hạn giảm giá
let countDownDate = new Date("Sep 7, 2023 07:09:16").getTime();

// tính thời gian sau mỗi 1 giây
let x = setInterval(function() {

  // thời gian hiện tại
  let now = new Date().getTime();
  
  // khoảng thời gian còn lại từ hiện tại đến ngày hết hạn
  let distance = countDownDate - now;
  
  // quy đổi đơn vị
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
  
  // hết hạn thì cái đồng hồ biến mất 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#days").innerHTML = "EXPIRED";
    document.querySelector("#hours").style.display = "none";
    document.querySelector("#minutes").style.display = "none";
    document.querySelector("#seconds").style.display = "none";
    document.querySelector("#countdown-label")[1].style.display = "none";
    document.querySelector("#countdown-label")[2].style.display = "none";
    document.querySelector("#countdown-label")[3].style.display = "none";
  }
}, 1000);