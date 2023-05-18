const menuBtn = document.querySelector('.menu i');
const closeBtn = document.querySelector('.btnClose');
const header = document.querySelector('.header');
const heroBg = document.querySelector('.bg-hero');
const openMenu = ()=>{
    header.classList.add('navVisibale');
    // heroBg.classList.add('opacity');
}
const closeMenu = ()=>{
    header.classList.remove('navVisibale');
    // heroBg.classList.remove('opacity');
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);


// for drop down 
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("drop");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// for the img observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.add('showtitle');

        }
        else{
            entry.target.classList.remove('show');
            entry.target.classList.remove('showtitle');
        }
    });
})

const hiddenEl = document.querySelectorAll('.hidden');
const hiddenText = document.querySelectorAll('.hiddentitle');
hiddenEl.forEach((el)=> observer.observe(el));
hiddenText.forEach((el)=> observer.observe(el));


// for Dark Theme 

const darkBtn = document.querySelector('.moon i');

const ChangeTheme = ()=>{
    document.body.classList.toggle('darktheme');
    
}
darkBtn.addEventListener('click', ChangeTheme);



// For Learn More btn
function actionMoreLess(){
  var boxOuter = ".data_more_less",
      boxInner = ".data_more_less_inner",
      boxBody = ".data_more_less_body",
      showMore = $(".action_more"),
      showLess = $(".action_less");
  $(boxInner).each(function(){
    var $this = $(this),
        bodyDataH = $this.find(boxBody).height();
    $this.css("max-height", $this.data("height"));
    var $thisH = $this.height();
    if(bodyDataH > $thisH){
        $this.closest(boxOuter).removeClass("action_disabled");
    } else {
      $this.closest(boxOuter).addClass("action_disabled");
    }
  })
  showMore.click(function(e){
    e.preventDefault();
    var $this = $(this),
        boxInnerH = $this.closest(boxOuter).find(boxInner).height(),
        boxInnerUpdate = boxInnerH + $this.closest(boxOuter).find(boxInner).data("increase-by"),
        boxBodyH = $this.closest(boxOuter).find(boxBody).height();
      setTimeout(function(){
        if(boxBodyH > boxInnerUpdate){
          $this.closest(boxOuter).removeClass("less_active").find(boxInner).css("max-height", boxInnerUpdate);
        } else {
          $this.closest(boxOuter).addClass("less_active").find(boxInner).css("max-height", "none");
        }
      },10);
  });
    showLess.click(function(){
      $(this).closest(boxOuter).removeClass("less_active").find(boxInner).css("max-height", $(this).closest(boxOuter).find(boxInner).data("height"));
      return false;
    });
} actionMoreLess();

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
};

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

let backtotop = select('.back-to-top')
if (backtotop) {
 const toggleBacktotop = () => {
   if (window.scrollY > 100) {
     backtotop.classList.add('active')
   } else {
     backtotop.classList.remove('active')
   }
 }
 window.addEventListener('load', toggleBacktotop);
 onscroll(document, toggleBacktotop);
}

    // ++ Preloader ++

 let preloader = select('#preloader');
 if (preloader) {
   window.addEventListener('load', () => {
     preloader.remove()
   });
 }