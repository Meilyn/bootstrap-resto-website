// register service worker - BEGINNING
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/bootstrap-resto-website/sw.js', { scope: '/bootstrap-resto-website/' }).then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
// register service worker - END



    
//Opening Hours
    var d = new Date();
    var h = d.getHours();
    var day =d.getDay();

     
    if (h >= 9 && h <=17) {
    	if (day === 0 && day === 6) {
    	document.getElementById('heure').innerHTML = "Sorry! We're close";
    }
    else if (h >= 9 && h <=17){
    	document.getElementById('heure').innerHTML = "Hi! we're open";
    }
    }
   

// End opening hours    

// Onload Script
// var name = prompt('What is your name?');

// function name(){


