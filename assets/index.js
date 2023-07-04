(() =>  {
    const nav = $('.menu_block')
    const navHeight = nav.outerHeight()
    const sections = $('section')
    const mobileMenuIcon = $('.mobile_menu_icon')

    const closeMenuIconPath = 'assets/images/close.svg'
    const openMenuIconPath = 'assets/images/open_menu.svg'
    let isMobileMenuOpen = false


    const inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        input.addEventListener('input', (ev) => {
            if (ev.target.value.length) {
                document.querySelector(`#${ev.target.id} + .input_label`).classList.add('input_label_active')
            } else {
                document.querySelector(`#${ev.target.id} + .input_label`).className = 'input_label'
            }
        })
    })

    function toggleMobileMenu(val = isMobileMenuOpen) {
        const menu = $('.mobile_menu')
        console.log(23)
        if (val) {
            menu.removeClass('open')
            mobileMenuIcon.attr('src', openMenuIconPath)
        } else {
            menu.addClass('open')
            mobileMenuIcon.attr('src', closeMenuIconPath)
        }
        isMobileMenuOpen = !val
    }

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - navHeight,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('menu_item_active');
                sections.removeClass('menu_item_active');

                $(this).addClass('active_nav');
                nav.find('a[scrollTo="#'+$(this).attr('id')+'"]').addClass('menu_item_active');
            }
        });
    });

    document.addEventListener('scroll', (ev) => {
        const scrollTop = ev.target.scrollingElement.scrollTop
        const menu = document.querySelector('.menu_block')
        if (scrollTop > 75) {
            menu.style.backgroundColor = 'var(--blue)'
        } else {
            menu.style.backgroundColor = 'transparent'
        }
    })

    $(document).find('a').on('click', function () {
        var $el = $(this)
            , id = $el.attr('scrollTo');

        $('html, body').animate({
            scrollTop: $(id).offset().top - navHeight
        }, 500);

        toggleMobileMenu(true)

        return false;
    });

    $('.mobile_expand_about_us').on('click', function () {
        $(this).css('height', '0')
        $('.mobile_expanded_about_us_hide').css('height', 'auto')
    })

    $('.modal_close_icon').on('click', function () {
        $('.modal_wrapper').css('display', 'none')
    })

    $('.team_list_item').on('click', function () {
        $('.modal_wrapper').css('display', 'flex')
    })

    window.onclick = function(event) {
        if (event.target == document.querySelector('.modal_wrapper')) {
            $('.modal_wrapper').css('display', 'none')
        }
    }

    mobileMenuIcon.on('click', () => toggleMobileMenu())
})()