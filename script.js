// يمكنك إضافة تأثيرات التحريك هنا باستخدام JavaScript أو مكتبات مثل GSAP أو Anime.js
// مثال بسيط:
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

var typed = new Typed(".secText",{
    strings : ["UI/UX Designer", "Graphic Designer", "Front-End Developer", "Freelancer","Flutter Developer"],
    typeSpeed : 90,
    backSpeed : 10,
    loop : true
});

// الحصول على الزر
let mybutton = document.getElementById("scrollToTopBtn");

// إظهار الزر عند التمرير لأسفل الصفحة
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// عند الضغط على الزر، العودة إلى أعلى الصفحة
mybutton.onclick = function() {
  document.body.scrollTop = 0; // لمواقع الويب التي تستخدم body للتمرير
  document.documentElement.scrollTop = 0; // لمواقع الويب التي تستخدم documentElement للتمرير
}

// الحصول على القائمة

let scroolCont = document.getElementById("ga");
let bbtn = document.getElementById("bbtn");
let nbtn = document.getElementById("nbtn");

scroolCont.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scroolCont.scrollLeft += evt.deltaY;
});

nbtn.addEventListener("click", ()=>{
    scroolCont.style.scrollBehavior = "smooth";
    scroolCont.scrollLeft += 900;
});

bbtn.addEventListener("click", ()=>{
    scroolCont.style.scrollBehavior = "smooth";
    scroolCont.scrollLeft += -900;
});

const imagePaths = [
  "img/1-10/img1.png",
  "img/1-10/img2.png",
  "img/1-10/img1.png",
  "img/1-10/img2.png",
  "img/1-10/img1.png",
  "img/1-10/img2.png",
  "img/1-10/img1.png",
  "img/1-10/img2.png",
  "img/1-10/img1.png",
  "img/1-10/img2.png",
  // يمكنك إضافة المزيد من المسارات هنا
];

const gallery = document.getElementById("ga");
let currentRow;

imagePaths.forEach((path, index) => {
  // إنشاء صفوف جديدة كل 5 صور
  if (index % 5 === 0) {
      currentRow = document.createElement("div");
      gallery.appendChild(currentRow);
  }

  // إنشاء عنصر span و img
  const span = document.createElement("span");
  const img = document.createElement("img");
  img.src = path;

  // إضافة الصورة إلى span ثم إلى الصف الحالي
  span.appendChild(img);
  currentRow.appendChild(span);
});


