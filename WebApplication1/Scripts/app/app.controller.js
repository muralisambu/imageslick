(function () {
    'use strict';

    angular
        .module('bhk')
        .controller('AppController', AppController)
        .config(['slickCarouselConfig', function (slickCarouselConfig) {
            slickCarouselConfig.dots = true;
            slickCarouselConfig.autoplay = false;
        }]);

    AppController.$inject = ['$templateCache', '$timeout'];
    function AppController($templateCache, $timeout) {
        var self = this;
        
        self.number4 = [{ label:125 }, { label: 125 }, { label: 200 }, { label: 175 }, { label: 150 }, { label: 180 }, { label: 300 }, { label: 400 }];
        self.slickConfig4Loaded = true;
        self.updateNumber4 = function () {
            self.slickConfig4Loaded = false;
            self.number4[2].label = 123;
            self.number4.push({ label: Math.floor((Math.random() * 10) + 100) });
            $timeout(function () {
                self.slickConfig4Loaded = true;
            });
        };
        self.slickConfig4 = {
            method: {},
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: false,
            variableWidth: true
        };

    }
})();


