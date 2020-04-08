$(document).ready(function () {
    /* Открытие ссылки в текущей вкладке */
    $('.loc').click(function () {
        window.location = $(this).attr('data-link');
    });
    /*Открытие ссылки в новой вкладке: */
    $('.tar').click(function () {
        var ssilka = $(this).attr('data-link');
        window.open(ssilka, "_blank");
    });

    $('.city').click(function (e) {
        e.preventDefault();
        let city = $('.city .sub');
        city.slideToggle(function () {
            city.css({
                'opacity': '1',
                'transform': 'scaleY(1)',
                'top': '30px',
            });
           
        });
    });

    /* Клик по модальной кнопке с классом navbar-toggle */
    $('.navbar-toggle').click(function (e) {
        e.preventDefault();
        let elem = $('#header .navbar-collapse');
        elem.slideToggle(function (){
            if (elem.is(':hidden')) {
                elem.removeClass('collapsed');
            }
            else {
                elem.addClass('collapsed');
                elem.css({
                    'display': 'flex',
                });
            }
        });       
    })

    let numOfClicks = 0;
   
/* Клик по кнопке в topmenu если есть вложенный список*/
    $('.topmenu .submenu-link').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        ++numOfClicks; 
        if (numOfClicks % 2 !== 0) $(this).addClass('active');
        else $(this).removeClass('active');
        //console.log('Кол-во кликов ' + numOfClicks + ' Событие при клике на Submenu');
    });
 
    $(document).mouseup(function (e) { // событие клика по веб-документу
        block = $(".topmenu .submenu-link .submenu"); // тут указываем элемент на котором нужна проверка события
        if (!block.is(e.target) // если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.topmenu .submenu-link').removeClass('active'); // скрываем его   
        }
    });


    /* Вкладки */
    // вкладки с содержанием
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* в режиме вкладок */
    $("ul.tabs li").click(function () {
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_accordion").removeClass("d_active");
        $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
    });
    /* в режиме аккордеона */
    $(".tab_accordion").click(function () {
        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();
        $(".tab_accordion").removeClass("d_active");
        $(this).addClass("d_active");
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
    });
    /* дополнительный класс tab_last,
    чтобы добавить границу к правой
    стороне последней вкладки. */
    $('ul.tabs li').last().addClass("tab_last");

  
    /* Кнопка вверх */
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});
