//メニュー

btn = document.querySelector(".mobile-menu__btn");
btn.addEventListener("click", ()=>{
    document.querySelector(".mobile-menu__btn").classList.toggle("active");
    document.querySelector(".mobile-menu").classList.toggle("menu-open");
    
});



// ここからスライダー
document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();
});


class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            centeredSlides: true,
            slidesPerView: 1,
            speed: 1000,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }
            },
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 3500,
            disableOnInteraction: false
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}

