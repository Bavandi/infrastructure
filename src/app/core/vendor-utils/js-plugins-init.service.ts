import { Injectable } from '@angular/core';

declare const $: any;
declare const WOW: any;

@Injectable({
  providedIn: 'root'
})
export class JsPluginsInitService {

  constructor() { }

  initializeStickyMenu() {
    // sticky menu

    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function () {
      var scroll = win.scrollTop();
      if (scroll < 1) {
        header.removeClass("sticky");
      } else {
        header.addClass("sticky");
      }

      $("section").each(function (element: any) {
        const this$ = $(element.currentTarget)
        var elementTop = this$.offset().top - $('#rs-header').outerHeight();
        if (scroll >= elementTop) {
          this$.addClass('loaded');
        }
      });

    });
  }

  windowLoad() {
    //window load
    $("#loading").delay(1500).fadeOut(500);
    $("#loading-center").on('click', function () {
      $("#loading").fadeOut(500);
    })
  }

  openpageNav() {
    // onepage nav
    const navclose = $('#onepage-menu');
    if (navclose.length) {
      $(".nav-menu li a").on("click", function () {
        if ($(".showhide").is(":visible")) {
          $(".showhide").trigger("click");
        }
      });

      if ($.fn.onePageNav) {
        $(".nav-menu").onePageNav({
          currentClass: "current-menu-item"
        });
      }
    }

  }

  searchParent() {
    const searchParent = $('.search-parent');
    if (searchParent.length) {
      $(".search-parent").on("click", function (event: any) {
        event.preventDefault();
        const this$ = $(event.currentTarget);
        this$.toggleClass("open_add_class", 1000);
      });
    }
  }

  sliderSlide1(element: HTMLDivElement) {
    const element$ = $(element);
    // Slider Demo
    if (element$.length) {
      element$.slick({
        autoplay: false,
        infinite: true,
        centerMode: false,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  }

  sliderSlide2() {
    // Slider Demo
    if ($('.slider-slide-2').length) {
      $('.slider-slide-2').slick({
        autoplay: false,
        infinite: true,
        centerMode: false,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  }



  projectSlide1() {
    // Project
    if ($('.project-slide-1').length) {
      $('.project-slide-1').slick({
        autoplay: false,
        infinite: true,
        centerMode: false,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  }

  projectSlide2() {
    // Project
    if ($('.project-slide-2').length) {
      $('.project-slide-2').slick({
        autoplay: false,
        infinite: true,
        centerMode: false,
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1299,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  }

  sliderCarousel3() {
    // Slider
    var slidercarousel3 = $('.slider-carousel3');
    if (slidercarousel3.length) {
      $(".slider-carousel3").owlCarousel({
        margin: 0,
        nav: true,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
        ],
        loop: true,
        dots: true,
        mouseDrag: true,
        items: 1,
        autoplay: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
        responsiveClass: true
      });
    }
  }

  collapseHidden() {
    // collapse hidden  
    const navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
    });
  }

  testiSlide1(element: any) {
    //Testimonials Slider
    const element$ = $(element);

    //Testimonials Slider
    if (element$.length) {
      element$.slick({
        autoplay: true,
        infinite: true,
        centerMode: false,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  }

  testiSlider2() {
    //Testimonials Slider
    if ($('.testi-slide-2').length) {
      $('.testi-slide-2').slick({
        autoplay: true,
        infinite: true,
        centerMode: false,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  }

  teamSlider(element: HTMLDivElement) {
    //Team Slider
    const sliderfor$ = $(element);
    //Team Slider
    if (sliderfor$.length) {
      sliderfor$.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
    }
  }

  sliderNav(element: HTMLDivElement) {
    //Team Slider
    const slidernav$ = $(element);
    if (slidernav$.length) {
      slidernav$.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        verticalSwiping: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              vertical: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              vertical: false,
            }
          },
          {
            breakpoint: 580,
            settings: {
              vertical: false,
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 380,
            settings: {
              vertical: false,
              slidesToShow: 2,
            }
          }
        ]
      });
    }
  }

  wow() {
    // wow init
    new WOW().init();
  }

  imageLoadedPortfolioInit() {
    // image loaded portfolio init
    var gridfilter = $('.grid');
    if (gridfilter.length) {
      $('.grid').imagesLoaded(function () {
        $('.gridFilter').on('click', 'button', function (event: any) {
          const this$ = $(event.currentTarget);
          var filterValue = this$.attr('data-filter');
          $grid.isotope({
            filter: filterValue
          });
        });
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            columnWidth: '.grid-item',
          }
        });
      });
    }
  }

  projectFilter() {
    // project Filter
    if ($('.gridFilter button').length) {
      var projectfiler = $('.gridFilter button');
      if (projectfiler.length) {
        $('.gridFilter button').on('click', function (event: any) {
          const this$ = $(event.currentTarget);
          this$.siblings('.active').removeClass('active');
          this$.addClass('active');
          event.preventDefault();
        });
      }
    }
  }

  magnificPopupInit() {
    // magnificPopup init
    var imagepopup = $('.image-popup');
    if (imagepopup.length) {
      $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
          beforeOpen: function () {
            (this as any).st.image.markup = (this as any).st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
          }
        },
        gallery: {
          enabled: true
        }
      });
    }

  }

  getAQuotePopup() {
    // Get a quote popup
    const popupquote = $('.popup-quote');
    const win = $(window);
    if (popupquote.length) {
      $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500,
        callbacks: {
          beforeOpen: function () {
            (this as any).st.mainClass = (this as any).st.el.attr('data-effect');
            if (win.width() < 800) {
              (this as any).st.focus = false;
            } else {
              (this as any).st.focus = '#qname';
            }
          }
        }
      });
    }
  }

  preloader() {
    //preloader
    $("#pre-load").delay(600).fadeOut(500);
    $(".pre-loader").delay(600).fadeOut(500);

    if ($(window).width() < 992) {
      $('.rs-menu').css('height', '0');
      $('.rs-menu').css('opacity', '0');
      $('.rs-menu').css('z-index', '-1');
      $('.rs-menu-toggle').on('click', function () {
        $('.rs-menu').css('opacity', '1');
        $('.rs-menu').css('z-index', '1');
      });
    }
  }

  videosPopupJQuery(element: HTMLDivElement) {
    //Videos popup jQuery 
    const popupvideos = $(element);
    if (popupvideos.length) {
      popupvideos.magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      });
    }
  }

  owlCarousel(element: HTMLDivElement) {
    /*-------------------------------------
         OwlCarousel
     -------------------------------------*/
    const this$ = $(element);
    const owlCarousel = this$,
      loop = owlCarousel.data('loop'),
      items = owlCarousel.data('items'),
      margin = owlCarousel.data('margin'),
      stagePadding = owlCarousel.data('stage-padding'),
      autoplay = owlCarousel.data('autoplay'),
      autoplayTimeout = owlCarousel.data('autoplay-timeout'),
      smartSpeed = owlCarousel.data('smart-speed'),
      dots = owlCarousel.data('dots'),
      nav = owlCarousel.data('nav'),
      navSpeed = owlCarousel.data('nav-speed'),
      xsDevice = owlCarousel.data('mobile-device'),
      xsDeviceNav = owlCarousel.data('mobile-device-nav'),
      xsDeviceDots = owlCarousel.data('mobile-device-dots'),
      smDevice = owlCarousel.data('ipad-device'),
      smDeviceNav = owlCarousel.data('ipad-device-nav'),
      smDeviceDots = owlCarousel.data('ipad-device-dots'),
      smDevice2 = owlCarousel.data('ipad-device2'),
      smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
      smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
      mdDevice = owlCarousel.data('md-device'),
      centerMode = owlCarousel.data('center-mode'),
      HoverPause = owlCarousel.data('hoverpause'),
      mdDeviceNav = owlCarousel.data('md-device-nav'),
      mdDeviceDots = owlCarousel.data('md-device-dots');
    owlCarousel.owlCarousel({
      loop: (loop ? true : false),
      items: (items ? items : 4),
      lazyLoad: true,
      center: (centerMode ? true : false),
      autoplayHoverPause: (HoverPause ? true : false),
      margin: (margin ? margin : 0),
      //stagePadding: (stagePadding ? stagePadding : 0),
      autoplay: (autoplay ? true : false),
      autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
      smartSpeed: (smartSpeed ? smartSpeed : 250),
      dots: (dots ? true : false),
      nav: (nav ? true : false),
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      navSpeed: (navSpeed ? true : false),
      responsiveClass: true,
      responsive: {
        0: {
          items: (xsDevice ? xsDevice : 1),
          nav: (xsDeviceNav ? true : false),
          dots: (xsDeviceDots ? true : false),
          center: false,
        },
        768: {
          items: (smDevice2 ? smDevice2 : 2),
          nav: (smDeviceNav2 ? true : false),
          dots: (smDeviceDots2 ? true : false),
          center: false,
        },
        992: {
          items: (smDevice ? smDevice : 3),
          nav: (smDeviceNav ? true : false),
          dots: (smDeviceDots ? true : false),
          center: false,
        },
        1200: {
          items: (mdDevice ? mdDevice : 4),
          nav: (mdDeviceNav ? true : false),
          dots: (mdDeviceDots ? true : false),
        }
      }
    });
  }

  skillBar(element: HTMLDivElement) {
    // Skill bar 
    const skillbar = $(element);
    if (skillbar.length) {
      skillbar.skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0,
      });
    }

  }

  rsPic() {
    // Rs Pic 
    const rs_pie = $('.rs-pie-content');
    if (rs_pie.length) {
      $('.rs-pie').easyPieChart({
        size: 170,
        barColor: "#FF6D00",
        scaleLength: 0,
        lineWidth: 8,
        trackColor: "#0a2fa5",
        lineCap: "circle",
        animate: 2000,
      });
    }
  }

  counterUp(element: HTMLDivElement) {
    // Counter Up
    const counter = $(element);
    console.info({ counter })
    if (counter.length) {
      counter.counterUp({ time: 3000 });
    }
  }

  scollTopInit() {
    // scrollTop init	
    const win = $(window);

    var totop = $('#scrollUp');
    win.on('scroll', function () {
      if (win.scrollTop() > 150) {
        totop.fadeIn();
      } else {
        totop.fadeOut();
      }
    });
    totop.on('click', function () {
      $("html,body").animate({
        scrollTop: 0
      }, 500)
    });
  }

  manuallyScroll() {
    $("html,body").animate({
      scrollTop: 0
    }, 500)
  }

  manuallyCloseCanvasMenu() {
    $('body').removeClass('nav-expanded');
  }

  canvasMenu() {
    //canvas menu
    const navexpander = $('#nav-expander');
    if (navexpander.length) {
      $('#nav-expander, #nav-close, #nav-close2, .offwrap').on('click', function (e: any) {
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
      });
    }
    const tilt = $('.js-tilt');
    if (tilt.length) {
      const tilt = $('.js-tilt').tilt();
    }
  }

  singleProductImage() {
    /*----------------------------
     single-productjs active
     ------------------------------ */
    var singleproductimage = $('.single-product-image');
    if (singleproductimage.length) {
      $('.single-product-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-product-nav'
      });
    }
  }

  singleProductNav() {
    /*----------------------------
        single-productjs active
        ------------------------------ */

    var singleproductnav = $('.single-product-nav');
    if (singleproductnav.length) {
      $('.single-product-nav').slick({
        slidesToShow: 3,
        asNavFor: '.single-product-image',
        dots: false,
        focusOnSelect: true,
        centerMode: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 591,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    }
  }

  offCanvasBtn() {
    // Offcanvas btn
    $('.menu-wrap-off a').each(function (element: any) {
      const this$ = $(element);

      var href = this$.attr("href");
      if (href == "#") {
        this$.addClass('hash');
      } else {
        this$.removeClass('hash');
      }
    });
  }

  servicesSelect() {
    var servicesSelect = $('.services_select');
    if (servicesSelect.length) {
      // Select Box Style
      var x, i, j, l, ll, selElmnt, a, b, c;
      /*look for any elements with the class "Services":*/
      x = document.getElementsByClassName("services_select");
      l = x.length;
      for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
          /*for each option in the original select element,
          create a new DIV that will act as an option item:*/
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function (e: any) {
            const thisEl = e.currentTarget;
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h, sl, yl;
            s = thisEl.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = thisEl.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == thisEl.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = thisEl.innerHTML;
                y = thisEl.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                thisEl.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e: any) {
          const thisEl = e.currentTarget;
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(thisEl);
          thisEl.nextSibling.classList.toggle("select-hide");
          thisEl.classList.toggle("select-arrow-active");
        });
      }
      function closeAllSelect(elmnt: any) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < xl; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }
      /*if the user clicks anywhere outside the select box,
      then close all select boxes:*/
      document.addEventListener("click", closeAllSelect);

    }
  }

  mobileNavbarMenu() {
    /******** Mobile Menu Start ********/

    $('.mobile-navbar-menu a').each(function (element: any) {
      const this$ = $(element);
      var href = this$.attr("href");
      if (href = "#") {
        this$.addClass('hash');
      } else {
        this$.removeClass('hash');
      }
    });
  }

  menuMaker() {
    /******** Mobile Menu Start ********/
    const options = {
      format: "multitoggle"
    }

    const mobileNavbarMenu$ = $("#mobile-navbar-menu");


    var mobile_menu = mobileNavbarMenu$, settings = $.extend({
      format: "dropdown",
      sticky: false
    }, options);

    return mobileNavbarMenu$.each(function () {
      mobile_menu.find('li ul').parent().addClass('has-sub');
      var multiTg = function () {
        mobile_menu.find(".has-sub").prepend('<span class="submenu-button"><em></em></span>');
        mobile_menu.find(".hash").parent().addClass('hash-has-sub');
        mobile_menu.find('.submenu-button').on('click', function (event: any) {
          const this$ = $(event.currentTarget);

          this$.toggleClass('submenu-opened');
          if (this$.siblings('ul').hasClass('open-sub')) {
            this$.siblings('ul').removeClass('open-sub').hide('fadeIn');
            this$.siblings('ul').hide('fadeIn');
          }
          else {
            this$.siblings('ul').addClass('open-sub').hide('fadeIn');
            this$.siblings('ul').slideToggle().show('fadeIn');
          }
        });
      };

      if (settings.format === 'multitoggle') multiTg();
      else mobile_menu.addClass('dropdown');
      if (settings.sticky === true) mobile_menu.css('position', 'fixed');
      var resizeFix = function () {
        if ($(window).width() > 991) {
          mobile_menu.find('ul').show('fadeIn');
          mobile_menu.find('ul.sub-menu').hide('fadeIn');
        }
      };
      resizeFix();
      return $(window).on('resize', resizeFix);
    });
  }
}



