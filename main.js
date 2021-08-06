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


//スクロール
window.addEventListener('scroll',()=>{
    let scroll = document.documentElement.scrollTop;
    console.log(scroll);
    document.querySelector('#scrollValue').textContent = scroll;

    if (scroll >= 80){
        let block2 = document.querySelector('.block2');
        block2.classList.add('show');

        if(scroll >= 260){
            let block3 = document.querySelector('.block3');
            block3.classList.add('show');

            if(scroll>= 510){
                let block4 = document.querySelector('.block4');
                block4.classList.add('show');

                if(scroll >= 740){
                    let block5 = document.querySelector('.block5');
                    block5.classList.add('show');  
                    
                    if(scroll >= 950){
                        let block6 = document.querySelector('.block6');
                        block6.classList.add('show'); 
                        
                        if(scroll >= 1220){
                            let block7 = document.querySelector('.block7');
                            block7.classList.add('show');   

                            if(scroll >= 1450){
                                let block7 = document.querySelector('.block7');
                                block7.classList.add('show');   

                                if(scroll >= 1450){
                                    let block8 = document.querySelector('.block8');
                                    block8.classList.add('show');   
                                }
                            }
                        }
                    }
                }
            } 
        }
    }
});

