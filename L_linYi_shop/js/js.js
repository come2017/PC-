$(document).ready(function(e) {
    ////////////////////////////////////////////
    //////////////--------左右滚动----------//////////////////

    /*方法*/
    function animat_banner(obj1, obj, num, btnl, btnr, css, timer) {
        var objL = $(obj).length;
        var objW = $(obj).width();
        if (parseInt($(obj).css("margin-left")) > 0) {
            objW += parseInt($(obj).css("margin-left"));
        }

        if (parseInt($(obj).css("margin-right")) > 0) {
            objW += parseInt($(obj).css("margin-right"))

        }

        var objHtml = $(obj1).html();
        var dq_ind = objL;
        var settimesdw;
        $(obj1).html(objHtml + objHtml + objHtml)
        $(obj1).width(objL * objW * 3)
        $(obj1).css("left", dq_ind * objW * -1)
        $(num).eq(0).addClass(css)
        settimesdw = setInterval(settimesdw_hs, timer)
        function settimesdw_hs() {

            if (dq_ind > objL * 2 - 1) {
                dq_ind = objL
                $(obj1).css("left", objL * objW * -1)
            }
            dq_ind++;
            tweener(dq_ind)

        }

        function tweener(int) {
            $(obj1).stop().animate({left: int * objW * -1}, 300)
            $(num).removeClass(css)
            $(num).eq(int % objL).addClass(css)
        }

        $(btnl).click(function() {
            clearInterval(settimesdw)
            settimesdw = setInterval(settimesdw_hs, timer)
            if (dq_ind < objL) {
                dq_ind = objL * 2 - 1
                $(obj1).css("left", dq_ind * objW * -1)
            }
            dq_ind--;
            tweener(dq_ind)

        })
        $(btnr).click(function() {
            clearInterval(settimesdw)
            settimesdw = setInterval(settimesdw_hs, timer)
            if (dq_ind > objL * 2 - 1) {
                dq_ind = objL
                $(obj1).css("left", objL * objW * -1)
            }
            dq_ind++;
            tweener(dq_ind)
        })
        $(num).click(function() {
            clearInterval(settimesdw)
            settimesdw = setInterval(settimesdw_hs, timer)
            dq_ind = $(num).index(this)
            tweener(dq_ind)
        })
    }

    /*调用*/
    animat_banner(".HL_zhengcefg_GD ul", ".HL_zhengcefg_GD ul li", ".HL_zhengcefg_GD p span", "bfgf", "bfgbg", "current", 5000);
    animat_banner(".HL_about_rGD_ul ul", ".HL_about_rGD_ul ul li", "dfdv", ".HL_leftbtn", ".HL_rightbtn", "current", 5000);
    $(".HL_leftbtn").hover(function() {
        $(this).attr("src", "images/HL_pic35hover.gif")
    }, function() {
        $(this).attr("src", "images/HL_pic35.gif")
    })
    $(".HL_rightbtn").hover(function() {
        $(this).attr("src", "images/HL_pic36hover.gif")
    }, function() {
        $(this).attr("src", "images/HL_pic36.gif")
    })


    /***************个人中心******************/

    var isShow = true;
    $('.zhuanzu').click(function() {
        if (isShow) {
            $('#zhuanzu-con').show();
            isShow = false;
        } else {
            $('#zhuanzu-con').hide();
            isShow = true;
        }
    })

    $('.gongqiu').click(function() {
        if (isShow) {
            $('#gongqiu-con').show();
            isShow = false;
        } else {
            $('#gongqiu-con').hide();
            isShow = true;
        }
    })


    /*********首页***********/
    /*会展服务*/
    $('.mr_frUl02 li').hover(function() {
        $(this).stop().animate({'margin-left': '-266px'}, 200);
    }, function() {
        $(this).stop().animate({'margin-left': '0px'}, 200);
    });

    /*便民服务*/
    $('.index-sixL ul li').click(function() {
        $(this).addClass("six-cur").siblings().removeClass();
        $(".index-sixR .six-tab > li").hide().eq($('.index-sixL ul > li').index(this)).show();
    });

    $('.index-sixL dl dt').click(function() {
        $(this).addClass("sixL-cur").siblings().removeClass();
    });

//返回顶部
    $('.back').click(function() {
        $('html,body').scrollTop(0);
    })

//便民服务右侧导航
    var body = $("html, body");
    var scrolling = false;
    $('.lvyouNavR').find('a').on('click', function() {

        scrolling = true;

        $(this).siblings().removeClass('crrtrnte').end().addClass('crrtrnte');
        var hint = $(this).attr('id');
        var scrollTop = $('[data-hint="' + hint + '"]').offset().top;

        body.stop().animate({
            scrollTop: scrollTop - 10
        }, '500', 'swing', function() {
            scrolling = false;
        });
    });

    $(window).scroll(function() {
        if (!scrolling) {
            ['chuxing', 'yule', 'jiudian', 'lvyou', 'meishi'].forEach(function(item) {
                if ($(this).scrollTop() < $('[data-hint="' + item + '"]').offset().top) {

                    if ($(this).scrollTop() < 653) {
                        $('.lvyouNavR').hide();
                    } else {
                        $('.lvyouNavR').show();
                    }

                    $('#' + item).siblings().removeClass('crrtrnte').end().addClass('crrtrnte');
                }
            })
        }
    });

/////////////////////////////////////////////////////
});