/**
    jQuery.simpleTabs v0.1
    Stephen Zsolnai http://www.zolla.co.uk

    @license The MIT License (MIT)
    @preserve Copyright (c) <2012> <Stephen Zsolnai http://www.zolla.co.uk>


*/
/*jslint browser: true, vars: true, white: false, forin: true */
/*global define,require */
(function($){
    'use strict';

    $.simpleTabs = {
        defaults: {
            onClass: 'simpleTabs-on',
            speed: 500
        }
    };

    $.fn.simpleTabs = function(options) {
        return this.each(function(){
            var settings = $.extend({}, $.simpleTabs.defaults, options),
                self = this,
                $simpleTabs = $(this),
                $tabWrap = $simpleTabs.find('> ul'),
                $tabs = $tabWrap.find('li'),
                $containers = $simpleTabs.find('>div'),

                showItem = function($item){
                    $item.siblings('div').hide();
                    $item.show().show();
                },
                initTabs = function(){
                    var $firstLink = $simpleTabs.find('li:first-child a'),
                        $firstContainer = $($firstLink.attr('href'));
                        $firstLink.closest('li').addClass(settings.onClass);
                        showItem($firstContainer);
                };

            
            $tabs.find('a').click(function(e){
                var $this = $(this),
                    $container = $($this.attr('href'));

                $this.closest('li').siblings().removeClass(settings.onClass);
                $this.closest('li').addClass(settings.onClass);
                showItem($container);
                e.preventDefault();
            });

            initTabs();
        });
    };

}(window.jQuery));
