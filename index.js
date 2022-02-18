function imprimer_page(){
    window.print();
  }
  function mobilecheck() {
    return (typeof window.orientation !== "undefined") 
    || (navigator.userAgent.indexOf('IEMobile') !== -1
    );
  };
  let resuslt =  mobilecheck();
    console.log(resuslt);
// function isMobileDevice() { 
//   if( navigator.userAgent.match(/iPhone/i)
//   || navigator.userAgent.match(/webOS/i)
//   || navigator.userAgent.match(/Android/i)
//   || navigator.userAgent.match(/iPad/i)
//   || navigator.userAgent.match(/iPod/i)
//   || navigator.userAgent.match(/BlackBerry/i)
//   || navigator.userAgent.match(/Windows Phone/i)
//   ){
//     return true;
//   }
//   else {
//     return false;
//   }
// };
// let result = isMobileDevice();
//    console.log(result);