    
//Opening Hours
    var d = new Date();
    var h = d.getHours();
    var day =d.getDay();

    if (h >= 9 && h <=17 ) {
    	document.getElementById('heure').innerHTML = "Hi! Our restaurant is OPEN";
    }
    else {
    	document.getElementById('heure').innerHTML = "Sorry! We're close";
    }
   

// End opening hours    