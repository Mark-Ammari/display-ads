
googletag.cmd.push(function() {

    var adSlot1 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner1");
    adSlot1.addService(googletag.pubads());
    adSlot1.setCollapseEmptyDiv();


    var adSlot2 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner2");
    adSlot2.addService(googletag.pubads());
    adSlot2.setCollapseEmptyDiv();

    var adSlot3 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner3");
    adSlot3.addService(googletag.pubads());
    adSlot3.setCollapseEmptyDiv();

    var adSlot4 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner4");
    adSlot4.addService(googletag.pubads());
    adSlot4.setCollapseEmptyDiv();

    var adSlot5 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner5");
    adSlot5.addService(googletag.pubads());
    adSlot5.setCollapseEmptyDiv();

    var adSlot6 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner6");
    adSlot6.addService(googletag.pubads());
    adSlot6.setCollapseEmptyDiv();

    var adSlot7 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner7");
    adSlot7.addService(googletag.pubads());
    adSlot7.setCollapseEmptyDiv();

    var adSlot8 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner8");
    adSlot8.addService(googletag.pubads());
    adSlot8.setCollapseEmptyDiv();

    var adSlot9 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner9");
    adSlot9.addService(googletag.pubads());
    adSlot9.setCollapseEmptyDiv();

    var adSlot10 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner10");
    adSlot10.addService(googletag.pubads());
    adSlot10.setCollapseEmptyDiv();

    var adSlot11 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner11");
    adSlot11.addService(googletag.pubads());
    adSlot11.setCollapseEmptyDiv();
  
    var adSlot12 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner12");
    adSlot12.addService(googletag.pubads());
    adSlot12.setCollapseEmptyDiv();

    var adSlot13 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner13");
    adSlot13.addService(googletag.pubads());
    adSlot13.setCollapseEmptyDiv();   
    
    var adSlot14 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner14");
    adSlot14.addService(googletag.pubads());
    adSlot14.setCollapseEmptyDiv();
    
    var adSlot15 = googletag.defineSlot('/8484/ckl/recipes/article',[[300,250],"fluid"], "banner15");
    adSlot15.addService(googletag.pubads());
    adSlot15.setCollapseEmptyDiv();

    googletag.pubads().enableSingleRequest();

    var startTime = performance.timing ? 
    ((performance.timing.fetchStart - performance.timing.navigationStart) / 1000) 
    : window.performance.now();

    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            var i = 0;
            i++;
            console.log('banner is rendered');
            var _thisAdvertisement1 = document.getElementById(event.slot.getSlotElementId());

            console.log('Start Time: ', startTime);
            console.log('End Time: ', window.performance.now() - startTime);

        });

    googletag.enableServices();

});


    
googletag.cmd.push(function() { 
    googletag.display('banner1'); 
    googletag.display('banner2');
    googletag.display('banner3'); 
    googletag.display('banner4');
    googletag.display('banner5'); 
    googletag.display('banner6');
    googletag.display('banner7'); 
    googletag.display('banner8');
    googletag.display('banner9'); 
    googletag.display('banner10'); 
    googletag.display('banner11');
    googletag.display('banner12'); 
    googletag.display('banner13');
    googletag.display('banner14'); 
    googletag.display('banner15');  
});


