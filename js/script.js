//  Powered | CoderX ©2020 | Andrei Abd
//  █▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
//  █▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
//  CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
//  mail      :  usr.g0a1@gmial.com
//  CoderX    :  https://coderx-project.blogspot.com/
//  Whatsapp  :  +963934820511
//  Pinterest :  https://www.pinterest.com/andreiabd93/
//  Instagram :  https://www.instagram.com/andrei_abd/
//  Linkeden  :  https://www.linkedin.com/in/andreiabd
//  Facebook  :  https://www.facebook.com/andreiaabd/
//  Github    :  https://github.com/AndreiAbd

var
    webSites = document.getElementById("btn-web-sites"),
    webApplication = document.getElementById("btn-web-application"),
    android = document.getElementById("btn-android"),
    scripts = document.getElementById("btn-scripts"),
    artWork = document.getElementById("btn-artwork"),
    btnContact = document.getElementById("btn-main-contact"),
    btnBio = document.getElementById("btn-main-bio"),
    btnCerti = document.getElementById("btn-main-certi");

webSites.onclick = ()=>{
    var x = document.getElementById("websites");
    var xx = document.getElementById("intro-main-page");
    var xxx = document.getElementById("web-application");
    var xxxx = document.getElementById("android");
    var xxxxx = document.getElementById("scripts");
    var xxxxxx = document.getElementById("artwork");
    if (x.style.display == "none"){
        x.style.display = "block";
        xx.style.display = "none";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
        xxxxxxx.style.display = "none";
    } else {
        x.style.display = "none";
        xx.style.display = "block";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
        xxxxxxx.style.display = "none";
    }
};
webApplication.onclick = ()=>{
    var x = document.getElementById("web-application");
    var xx = document.getElementById("intro-main-page");
    var xxx = document.getElementById("websites");
    var xxxx = document.getElementById("android");
    var xxxxx = document.getElementById("scripts");
    var xxxxxx = document.getElementById("artwork");
    if (x.style.display == "none"){
        x.style.display = "block";
        xx.style.display = "none";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
    } else {
        x.style.display = "none";
        xx.style.display = "block";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
        xxxxxxx.style.display = "none";
    }
};
android.onclick = ()=>{
    var x = document.getElementById("android");
    var xx = document.getElementById("intro-main-page");
    var xxx = document.getElementById("websites");
    var xxxx = document.getElementById("web-application");
    var xxxxx = document.getElementById("scripts");
    var xxxxxx = document.getElementById("artwork");
    if (x.style.display == "none"){
        x.style.display = "block";
        xx.style.display = "none";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
    } else {
        x.style.display = "none";
        xx.style.display = "block";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
        xxxxxxx.style.display = "none";
    }
};
scripts.onclick = ()=>{
    var x = document.getElementById("scripts");
    var xx = document.getElementById("intro-main-page");
    var xxx = document.getElementById("websites");
    var xxxx = document.getElementById("web-application");
    var xxxxx = document.getElementById("android");
    var xxxxxx = document.getElementById("artwork");
    if (x.style.display == "none"){
        x.style.display = "block";
        xx.style.display = "none";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
    } else {
        x.style.display = "none";
        xx.style.display = "block";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
        xxxxxxx.style.display = "none";
    }
};
artWork.onclick = ()=>{
    var x = document.getElementById("artwork");
    var xx = document.getElementById("intro-main-page");
    var xxx = document.getElementById("websites");
    var xxxx = document.getElementById("web-application");
    var xxxxx = document.getElementById("android");
    var xxxxxx = document.getElementById("scripts");
    if (x.style.display == "none"){
        x.style.display = "block";
        xx.style.display = "none";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
    } else {
        x.style.display = "none";
        xx.style.display = "block";
        xxx.style.display = "none";
        xxxx.style.display = "none";
        xxxxx.style.display = "none";
        xxxxxx.style.display = "none";
        xxxxxxx.style.display = "none";
    }
};

function startTime() {
var today = new Date();
var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
hr = (hr == 0) ? 12 : hr;
hr = (hr > 12) ? hr - 12 : hr;
//Add a zero in front of numbers<10
hr = checkTime(hr);
min = checkTime(min);
sec = checkTime(sec);
document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var curWeekDay = days[today.getDay()];
var curDay = today.getDate();
var curMonth = months[today.getMonth()];
var curYear = today.getFullYear();
var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
document.getElementById("date").innerHTML = date;

var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
if (i < 10) {
i = "0" + i;
}
return i;
}

function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}


//back to top button

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
  if(!backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnExit");
    backToTopButton.classList.add("btnEntrance");
    backToTopButton.style.display = "block";
  }
  }
  else { // Hide backToTopButton
  if(backToTopButton.classList.contains("btnEntrance")) {
    backToTopButton.classList.remove("btnEntrance");
    backToTopButton.classList.add("btnExit");
    setTimeout(function() {
    backToTopButton.style.display = "none";
    }, 250);
  }
  }
};

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
  if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};

function CustomAlert() { // About and Contact, Box Alert. 
  this.render = function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById("dialogoverlay");
      var dialogbox = document.getElementById("dialogbox");
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH +"px";
      dialogbox.style.left = (winW/2) - (250 * .5)+"px";
      dialogbox.style.top = "50px";
      dialogbox.style.display = "block";
      document.getElementById("dialogboxbody").innerHTML = dialog;
      document.getElementById("dialogboxfooter").innerHTML = '<button style="background-color:#333;margin: 10px;border-radius: 5px;border: 1px solid #999;color: #999;" onclick="Alert.ok()">Close</i></button>';
  }
  this.ok = function(){
      document.getElementById("dialogbox").style.display = "none";
      document.getElementById("dialogoverlay").style.display = "none";
  }
};
var Alert = new CustomAlert();

btnContact.onclick= ()=>{
  Alert.render('<p><strong><i class="fas fa-toolbox"></i> Contact via:</strong></p><a href="https://github.com/AndreiAbd" target="_blank"><i class="fab fa-github"></i> Github</a><br><a href="https://www.linkedin.com/in/andreiabd" target="_blank"><i class="fab fa-linkedin-in"></i> Linkedin</a><br><a href="https://www.facebook.com/andreiaabd/" target="_blank"><i class="fab fa-facebook-f"></i> Facebook</a><br><a href="https://www.instagram.com/andrei_abd/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a><br><a href="https://www.pinterest.com/andreiabd93/" target="_blank"><i class="fab fa-pinterest"></i> Pinterest</a>');
}
btnBio.onclick= ()=>{
  Alert.render('<p><strong><i class="fas fa-user-circle"></i> Biograph:</strong><p>Andrei Abd, web designer and developer under the programmer name - X, in addition to programming Android applications and Shell Scripts - visitors can obtain more information by browsing the site\'s menus or communicating via the Contact Buttons .</p>');
}
btnCerti.onclick= ()=>{
  Alert.render('<p><strong><i class="fas fa-certificate"></i> Certificates:</strong><a href="https://academy.codershiyar.com/validity-certificate/index.php" target="_blank"><p>HTML: Credential ID CSC-20200507-2903</p></a><a href="https://academy.codershiyar.com/validity-certificate/index.php" target="_blank"><p>CSS: Credential ID CSC-20200520-4259</p></a><a href="https://academy.codershiyar.com/validity-certificate/index.php" target="_blank"><p>BOOTSTRAP: Credential ID CSC-20200520-3403</p></a><a href="https://academy.codershiyar.com/validity-certificate/index.php" target="_blank"><p>Java Script: Credential ID CSC-20200529-2106</p></a><a href="https://academy.codershiyar.com/validity-certificate/index.php" target="_blank"><p>Java: Credential ID CSC-20201017-5728</p></a><a href="https://academy.codershiyar.com/validity-certificate/index.php" target="_blank"><p>PHP: Credential ID CSC-20201105-3613</p></a><a href="https://academy.codershiyar.com/validity-certificate/index.php" target="_blank"><p>MYSQL-SQL: Credential ID CSC-20201108-2622</p></a>');
}