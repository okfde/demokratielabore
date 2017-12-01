/**
 * Author: CReich
 * Company: Rainbow Unicorn
 * Date: 21.11.2017
 * Created: 15:33
 **/
(function(window){

    Controller.prototype.constructor = Controller;
    Controller.prototype = {

    };

    var ref, $, $mobileMenueToggle, $nav;
    function Controller(jQuery){

        $ = jQuery;
        ref = this;

        Logger.useDefaults();
        //Logger.setLevel(Logger.OFF);

        var browser = ref.getBrowser();
        $('body').addClass(browser.name.toLowerCase()).addClass('version-' + browser.version.toLowerCase());

    };

    Controller.prototype.init = function(){

        Logger.log("init page.");

        $nav = $('.nav-wrap');

        $mobileMenueToggle = $('.mobile-menu-toggle');
        $mobileMenueToggle.click(function(e){
            ref.toggleMenu();
            e.preventDefault();
        });

        /*********************
         resize event
         *********************/
        var delay = (function(){
            var timer = 0;
            return function(callback, ms){
                clearTimeout (timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(window).resize(function () {
            delay(function () {
                ref.resize();
            }, 50);
        });
        ref.resize();

    };

    Controller.prototype.toggleMenu = function(){
        $mobileMenueToggle.toggleClass('is-active');
        $nav.toggleClass('gone');
    };

    /*********************
     resize event handler
     *********************/
    Controller.prototype.resize = function(){

    };

    /*********************
     viewport().width, viewport().height
     *********************/
    Controller.prototype.viewport = function()
    {
        var e = window, a = 'inner';
        if (!('innerWidth' in window )) {
            a = 'client';
            e = document.documentElement || document.body;
        }
        return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
    };

    /*********************
     get browser type + version
     *********************/
    Controller.prototype.getBrowser = function()
    {
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
            return {name:'IE',version:(tem[1]||'')};
        }
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
            name: M[0],
            version: M[1]
        };
    };

    window.Controller = Controller;

}(window));