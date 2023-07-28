
window.addEventListener('scroll', function () {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  let whiteSymbol = document.querySelector('#nav .white-pch-symbol')
  if (scrollPosition >= 90) {
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
  } else if (scrollPosition <= 90) {
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.remove('navbar-white');
    topBtn.classList.remove('topBtn');
  }
  const whiteDiv = document.getElementById('whiteDivSection');
  const estimatedCalculatorBoxSection = document.getElementById('estimatedCalculatorBoxSection');
  const darkSectionDiv = document.getElementById('darkSection');
  const FAQDiv = document.getElementById('FAQ');
  const whiteDivEleOffset = whiteDiv.offsetTop;
  // const whiteDiv1EleOffset = estimatedCalculatorBoxSection.offsetTop;
  // const darkSectionDivOffset = darkSectionDiv.offsetTop;
  // const FAQDivOffset = FAQDiv.offsetTop;
  if(scrollPosition >= whiteDivEleOffset){ 
    whiteSymbol.style.filter = "invert(1)";
  }else{
    whiteSymbol.style.filter = "invert(0)";
  }
  var videothumbnail = document.getElementById('videothumbnail');
  var playIcon = document.getElementById('playIcon');
  var playingvideo = document.getElementById('Playingvideo');
  playIcon.addEventListener('click', () => {
    playingvideo.classList.remove('d-none');
    videothumbnail.classList.add('d-none')
    playIcon.classList.add('d-none')
    playingvideo.src += '?autoplay=1';
  })
});

//To scroll to the top
var scrollToTopBtn = document.getElementById('scrollTopBtn');

scrollToTopBtn.addEventListener('click', function () {
  container.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// inner page  
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const container = document.querySelector('#fullpage');
const items = document.querySelectorAll('#fullpage section');
container.addEventListener('wheel', (event) => {

  const homeFooter = document.querySelector("#home #footer");
  homeFooter.classList.add('opacity0')
  console.log(homeFooter)

  event.preventDefault();
  const delta = event.deltaY;

  container.scrollBy({
    top: delta,
    behavior: 'smooth'
  });
});

// inext 
container.addEventListener('scroll', () => {
  var container = document.querySelector('#fullpage');
  const items = document.querySelectorAll('#fullpage section');
  var scrollTop = container.scrollTop;
  var snappedItemIndex = -1;
  var scrollTop = container.scrollTop;
  var snappedItemIndex = -1;
  var buffer = 5;

  for (var i = 0; i < items.length; i++) {
    var itemTop = items[i].offsetTop;
    var itemHeight = items[i].offsetHeight;

    if (scrollTop + buffer >= itemTop && scrollTop < itemTop + itemHeight - buffer) {
      snappedItemIndex = i;
      break;
    }
  }

  console.log('Snapped item index:', snappedItemIndex);
  let whiteSymbol = document.querySelector('#nav .white-pch-symbol')

  if(snappedItemIndex == 3 || snappedItemIndex == 4 || snappedItemIndex == 5 || snappedItemIndex == 6){
    whiteSymbol.style.filter = "invert(1)";
  }else{
    whiteSymbol.style.filter = "invert(0)";
  }

  if (snappedItemIndex == 1) {
    const whatIsPch = document.getElementById('whatIsPch');
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
    setTimeout(() => {
      whatIsPch.classList.add('opacity-1')
    }, 100);
    const element = document.querySelector('#section2 h2');
    if (element) {
      element.classList.add('animate__animated');
      element.classList.add('animate__fadeInUp');
      element.classList.add('animate__delay-1s');
    }
    const elementP = document.querySelector('#section2 p');
    if (elementP) {
      elementP.classList.add('animate__animated');
      elementP.classList.add('animate__fadeInUp');
      elementP.classList.add('animate__delay-1s');
    }
    const elementA = document.querySelector('#section2 a');
    if (elementA) {
      elementA.classList.add('animate__animated');
      elementA.classList.add('animate__fadeInUp');
      elementA.classList.add('animate__delay-1s');
    }
    const elementV = document.querySelector('#section2 #animation_container');
    if (elementV) {
      elementV.classList.add('animate__animated');
      elementV.classList.add('animate__bounceInRight');
    }
  }
  else if (snappedItemIndex == 2) {
    const whatWeDo = document.getElementById('whatWeDo');
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
    setTimeout(() => {
      whatWeDo.classList.add('opacity-1');
    }, 100);
    const elementWWDBG = document.querySelector('#whatWeDoTextDiv');
    if (elementWWDBG) {
      elementWWDBG.classList.add('animate__animated');
      elementWWDBG.classList.add('animate__fadeInRight');
    }
    const element = document.querySelector('#section3 h2');
    if (element) {
      element.classList.add('animate__animated');
      element.classList.add('animate__fadeInUp');
      element.classList.add('animate__delay-1s');
    }
    const elementP = document.querySelector('#section3 p');
    if (elementP) {
      elementP.classList.add('animate__animated');
      elementP.classList.add('animate__fadeInUp');
      elementP.classList.add('animate__delay-1s');
    }

  }
  else if (snappedItemIndex == 3) {
    
    const certificationsAndAwards = document.getElementById('certificationsAndAwards');
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
    setTimeout(() => {
      certificationsAndAwards.classList.add('opacity-1');
    }, 100);
    const element = document.querySelector('#section4 .awards-text-col');
    if (element) {
      element.classList.add('animate__animated');
      element.classList.add('animate__fadeInLeft');
    }
    const elementh = document.querySelector('#section4 h2');
    if (elementh) {
      elementh.classList.add('animate__animated');
      elementh.classList.add('animate__fadeInUp');
      elementh.classList.add('animate__delay-1s');
    }
    const elementP = document.querySelector('#section4 p');
    if (elementP) {
      elementP.classList.add('animate__animated');
      elementP.classList.add('animate__fadeInUp');
      elementP.classList.add('animate__delay-1s');
    }
  }
  else if (snappedItemIndex == 4) {
    const pbppSection = document.getElementById('pbppSection');
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
    setTimeout(() => {
      pbppSection.classList.add('opacity-1');
    }, 100);
    const elementDiv = document.querySelector('#section5 .payers-section-row');
    if (elementDiv) {
      elementDiv.classList.add('animate__animated');
      elementDiv.classList.add('animate__fadeInRight');
      elementDiv.classList.add('animate__delay-2s');
    }
    const elementL0 = document.querySelector('#section5 #v-pills-tabContent');
    if (elementL0) {
      elementL0.classList.add('payers-title-box-animation');
      elementL0.classList.add('animate__animated');
      elementL0.classList.add('animate__fadeInUp');
      elementL0.classList.add('animate__delay-0_1s');
    }
    const elementL1 = document.querySelector('#section5 #v-pills-home-tab');
    if (elementL1) {
      elementL1.classList.add('animate__animated');
      elementL1.classList.add('animate__fadeInLeft');
      elementL1.classList.add('animate__delay-0_5s');
    }
    const elementL2 = document.querySelector('#section5 #v-pills-profile-tab');
    if (elementL2) {
      elementL2.classList.add('animate__animated');
      elementL2.classList.add('animate__fadeInLeft');
      elementL2.classList.add('animate__delay-0_7s');
    }
    const elementL3 = document.querySelector('#section5 #v-pills-messages-tab');
    if (elementL3) {
      elementL3.classList.add('animate__animated');
      elementL3.classList.add('animate__fadeInLeft');
      elementL3.classList.add('animate__delay-0_9s');
    }
    const elementL4 = document.querySelector('#section5 #v-pills-settings-tab');
    if (elementL4) {
      elementL4.classList.add('animate__animated');
      elementL4.classList.add('animate__fadeInLeft');
      elementL4.classList.add('animate__delay-1s');
    }
    const elementcircle= document.querySelector('.payers-bg-circle');
    elementcircle.style.opacity= 0;
    setTimeout(() => {
      elementcircle.style.opacity= 1;
    }, 1500);
    setTimeout(() => { elementcircle.classList.add("payers-bg-circle-circle-animation") 
    }, 2200)
  }
  else if (snappedItemIndex == 5) {
    const clientSection = document.getElementById('clientSection');
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
    setTimeout(() => {
      clientSection.classList.add('opacity-1');
    }, 100);
    const elementh2 = document.querySelector('#section6 h2');
    if (elementh2) {
      elementh2.classList.add('animate__animated');
      elementh2.classList.add('animate__fadeInUp');
    }

    const elementhP = document.querySelector('#section6 p');
    if (elementhP) {
      elementhP.classList.add('animate__animated');
      elementhP.classList.add('animate__fadeInUp');
    }

    const elementhImg1 = document.querySelector('#section6 #client-img-1');
    if (elementhImg1) {
      elementhImg1.classList.add('animate__animated');
      elementhImg1.classList.add('animate__zoomIn');
    }

    const elementhImg2 = document.querySelector('#section6 #client-img-2');
    if (elementhImg2) {
      elementhImg2.classList.add('animate__animated');
      elementhImg2.classList.add('animate__zoomIn');
    }

    const elementhImg3 = document.querySelector('#section6 #client-img-3');
    if (elementhImg3) {
      elementhImg3.classList.add('animate__animated');
      elementhImg3.classList.add('animate__zoomIn');
    }

    const elementhImg4 = document.querySelector('#section6 #client-img-4');
    if (elementhImg4) {
      elementhImg4.classList.add('animate__animated');
      elementhImg4.classList.add('animate__zoomIn');
    }

    const elementhImg5 = document.querySelector('#section6 #client-img-5');
    if (elementhImg5) {
      elementhImg5.classList.add('animate__animated');
      elementhImg5.classList.add('animate__zoomIn');
    }
    

  }
  else if (snappedItemIndex == 6) {
    const blogSection = document.getElementById('blogSection');
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
    setTimeout(() => {
      blogSection.classList.add('opacity-1')
    }, 100);
    const elementh12 = document.querySelector('#section7 #blogSection1 h2');
    if (elementh12) {
      elementh12.classList.add('animate__animated');
      elementh12.classList.add('animate__fadeInUp');
      elementh12.classList.add('animate__delay-1s');
    }

    const element1P = document.querySelector('#section7 #blogSection1 p');
    if (element1P) {
      element1P.classList.add('animate__animated');
      element1P.classList.add('animate__fadeInUp');
      element1P.classList.add('animate__delay-1s');
    }

    const element1A = document.querySelector('#section7 #blogSection1 a');
    if (element1A) {
      element1A.classList.add('animate__animated');
      element1A.classList.add('animate__fadeInUp');
      element1A.classList.add('animate__delay-2s');
    }

    const elementh22 = document.querySelector('#section7 #blogSection2 h2');
    if (elementh22) {
      elementh22.classList.add('animate__animated');
      elementh22.classList.add('animate__fadeInUp');
      elementh22.classList.add('animate__delay-1s');
    }

    const element2P = document.querySelector('#section7 #blogSection2 p');
    if (element2P) {
      element2P.classList.add('animate__animated');
      element2P.classList.add('animate__fadeInUp');
      element2P.classList.add('animate__delay-1s');
    }

    const element2A = document.querySelector('#section7 #blogSection2 a');
    if (element2A) {
      element2A.classList.add('animate__animated');
      element2A.classList.add('animate__fadeInUp');
      element2A.classList.add('animate__delay-2s');
    }

    const elementh32 = document.querySelector('#section7 #blogSection3 h2');
    if (elementh32) {
      elementh32.classList.add('animate__animated');
      elementh32.classList.add('animate__fadeInUp');
      elementh32.classList.add('animate__delay-1s');
    }

    const element3P = document.querySelector('#section7 #blogSection3 p');
    if (element3P) {
      element3P.classList.add('animate__animated');
      element3P.classList.add('animate__fadeInUp');
      element3P.classList.add('animate__delay-1s');
    }

    const element3A = document.querySelector('#section7 #blogSection3 a');
    if (element3A) {
      element3A.classList.add('animate__animated');
      element3A.classList.add('animate__fadeInUp');
      element3A.classList.add('animate__delay-2s');
    }
  }
  else if (snappedItemIndex == 7) {
    const homeFooter = document.querySelector("#home #footer");
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.add('navbar-white');
    topBtn.classList.add('topBtn');
    const footer = document.getElementById('footer');
    setTimeout(() => {
      homeFooter.classList.add('opacity-1')
    }, 100);
    if(footer){
      footer.classList.add('animate__animated')
      footer.classList.add('animate__fadeInUp')
      footer.classList.add('animate__delay-1s');
    }
    
  } else if(snappedItemIndex == 8 ){
    const footer = document.getElementById('footer');
    if(footer){
      footer.classList.add('animate__animated')
      footer.classList.add('animate__fadeInUp')
      footer.classList.add('animate__delay-1s');
    }
  } else {
    var targetElement = document.getElementById('nav');
    const topBtn = this.document.getElementById('scrollTopBtn')
    targetElement.classList.remove('navbar-white');
    topBtn.classList.remove('topBtn');
  }
});


