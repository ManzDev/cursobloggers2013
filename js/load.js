//(function () {
//    'use strict';

    var options = {};
    options.steps = {
        "init":         { scale: 3, x: 0,     y: 0 },
        "logo":         { scale: 3, x: 0,     y: 2000 },
        "screenshot":   { scale: 3, x: -6000, y: 2000, z:100, rotate: 90, rotate-y:-100 },
        "data1":        { scale: 3, x: -6000, y:-2000,        rotate: 90, rotate-y:-100 }
    };
    impress.init(options);

/*
    hljs.initHighlightingOnLoad();

    if (!document.querySelector || !Array.prototype.forEach) {
        return;
    }
    var forEach = Array.prototype.forEach
      , keys = Object.keys
      , steps = document.querySelectorAll("div.step")

    forEach.call(steps, function (dom, index) {
        if (dom.id !== 'overview') {
            var wrap = document.createElement("div");
            wrap.className = 'wrap';
            while (dom.firstChild) {
                wrap.appendChild(dom.firstChild);
            }
            dom.appendChild(wrap);
            var counter = wrap.appendChild(document.createElement('div'));
            counter.className = "counter";
            counter.innerHTML = (index + 1) + " / " + steps.length;
        }
    });

    var start = Date.now();
    var timerDom = document.getElementById('timer')
      , log = window.TIMELOG = [];

    var durationToStr = function () {
        var now = Date.now()
          , min = String(Math.floor((now - start)/(1000*60)))
          , sec = String(Math.floor((now - start)/(1000))%60);
        return ((min.length > 1) ? min : ('0' + min)) + ':' +
            ((sec.length > 1) ? sec : ('0' + sec));
    };
    // setInterval(function () {
    //     timerDom.innerHTML = durationToStr();
    // }, 1000);

    window.addEventListener("hashchange", function () {
        console.log("HASH CHANGE", location.hash);
        log.push([location.hash, durationToStr()]);
    }, false);
*/

//}());