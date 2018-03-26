var $story = {
    "0": {
        "url_image": "./images/zanzibar.jpg",
        "story": "Located in <strong>Tanzania</strong>, A world-famous restaurant, known not only for its extraordinary location, but also its fabulous food inspired by the natural resources, a twist of Zanzibar, and Italian love. The south-east coastline of Zanzibar is recognized as amongst the most beautiful in all the world. Here you’ll find 3 gems: The Rock restaurant and close by our Kichanga Lodge and Dongwe Ocean View hotel.",
        "story_title": "The Rock Restaurant, ZANZIBAR"
    },
    "1": {
        "url_image": "./images/kilo_copy.jpg",
        "story": "Located in <strong>Tanzania</strong>, It is the highest mountain in Africa, about 4,900 metres (16,100 ft) from its base to 5,895 metres (19,341 ft) above sea level The first people known to have reached the summit of the mountain were Hans Meyer and Ludwig Purtscheller in 1889. The mountain is part of the Kilimanjaro National Park and is a major climbing destination.",
        "story_title": "Mount Kilimanjaro"
    },
    "2": {
        "url_image": "./images/kraailbaaihouseboats_copy.jpg",
        "story": "Located in <strong>Southern Africa</strong>. This is where Eve’s Footprint was discovered on the nearby shore, thought to be from 117 000 years ago, the oldest known footprint of modern mankind; where naturalist, sailor and writer, Frank Wightman, sought refuge for many years on his yacht Wylo, described by author Lawrence Green as a giant in hiding; where local traditional fishermen still ply their trade, and fresh harders on the coals are a delicacy",
        "story_title": "Kraailbaai Houseboats"
    },
    "3": {
        "url_image": "./images/sabratha.jpg",
        "story": "Located in <strong>Libya</strong>. <strong>Sabratha</strong>, also spelled <strong>Sabrata</strong>, western-most of the three cities of ancient Tripolis, located near the modern town of Ṣabrātah, west of Tripoli, in Libya. Founded by the Carthaginians as a trading post, it was first permanently settled in the 4th century BC. Sabratha had a modest natural harbour, later improved by the Romans, and together with Oea (Tripoli) it served as an outlet for the trans-Saharan caravan route through Ghadames (Ghudāmis)",
        "story_title": "The Ruins of Sabratha, Libya"
    },
    "4": {
        "url_image": "./images/sahara_copy.jpg",
        "story": "Located in <strong>North Africa</strong>. Its surface area of 9,400,000 square kilometers (3,630,000 square miles) including the Libyan Desert and covers about 1/4 of the African continent.It is comparable to the respective land areas of China or the United States.The Sahara used to be a lush region with many plants and animals.It began to dry up around 4000 years ago due to a gradual change in the tilt of the Earth’s orbit.Earth’s obliquity oscillates between 22.1 and 24.5 degrees on a 41,000-year cycle. It is currently 23.44 degrees and decreasing.",
        "story_title": "Sahara Desert"
    },
    "5": {
        "url_image": "./images/khawta_copy.jpg",
        "story": "A Southern African ceremony, it is practiced by several tribes and is how a young boy proves his manhood. When they are of age, boys are sent to spend several days or weeks in a circumcision lodge during winter, where they’re put through rigorous and often dangerous tests and rituals such as continuous dancing until exhaustion, and circumcision.",
        "story_title": " Khweta Ceremony",
        "location": 0
    },
    "6": {
        "url_image": "./images/nelson-mandela_copy.jpg",
        "story": "Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist, who served as President of South Africa from 1994 to 1999. In 1988 he was placed under house arrest on the grounds of a minimum-security correctional facility. Mandela was released On February 11, 1990 on order of newly elected president F. W. de Klerk<br>Nelson Mandela died on December 5, 2013 from a recurring lung infection.<br><strong><em>Quote:</em> I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.</strong>",
        "story_title": "Nelson Mandela"
    },
    "7": {
        "url_image": "./images/nelson-mandela_copy.jpg",
        "story": "Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist, who served as President of South Africa from 1994 to 1999. In 1988 he was placed under house arrest on the grounds of a minimum-security correctional facility. Mandela was released On February 11, 1990 on order of newly elected president F. W. de Klerk<br>Nelson Mandela died on December 5, 2013 from a recurring lung infection.<br><strong><em>Quote:</em> I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.</strong>",
        "story_title": "Nelson Mandela"
    },
    "8": {
        "url_image": "./images/nelson-mandela_copy.jpg",
        "story": "Nelson Rolihlahla Mandela was a South African anti-apartheid revolutionary, political leader, and philanthropist, who served as President of South Africa from 1994 to 1999. In 1988 he was placed under house arrest on the grounds of a minimum-security correctional facility. Mandela was released On February 11, 1990 on order of newly elected president F. W. de Klerk<br>Nelson Mandela died on December 5, 2013 from a recurring lung infection.<br><strong><em>Quote:</em> I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.</strong>",
        "story_title": "Nelson Mandela"
    }
}

$(document).ready(function() {
    var story_count = 1;
    var typed = "";
    var typename;
    var story_length = Object.keys($story).length;
    var autoTellStory = 0;
    var autoTellStoryAnimation = 0;
    setTimeout(function() {
        $('.body_container').css('display', 'block')
        $('.body_container').addClass('animated fadeInUp');
        var typed = new Typed('.know_africa', {
            strings: ['"In a <strong>GLANCE</strong>', 'Know Africa'],
            typeSpeed: 130,
            backSpeed: 10,
            startDelay: 1000,
            fadeOut: true,
            onComplete: function() {
                setTimeout(startKnowAfrica, 4000)
            },
            loop: false
        });
    }, 1500);

    function startKnowAfrica() {
        autoTell();

        $('.story_frame_cont').css({
            'background': 'url(' + $story[0]["url_image"] + ')',
            'background-size': 'cover'
        });

        $('.story_title').text($story[0]["story_title"]);
        $('#story_image').attr('src', $story[0]["url_image"])
        $('.story_text').html($story[0]["story"]);

        $('.change_frame_layer').css({
            'background': 'url(' + $story[1]["url_image"] + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        })

        $('.story_mode').css('z-index', '1')

        $('.body__container').addClass('animated slideOutUp')
        $('.story_mode').css('display', 'block')
        $('.story_mode').addClass('animated slideInDown');
    }

    function autoTell() {
        if (autoTellStory) clearInterval(autoTellStory);
        autoTellStory = setInterval(function() {
            if ((story_count) == story_length - 1) {
                story_count = 0;
            }

            $('.story_frame').addClass('lowIn').delay(700).queue(function(next) {
                $('.story_frame').css('opacity', '0.2');
                $('#story_image').attr('src', $story[story_count - 1]["url_image"]);
                $('.story_title').text(String($story[story_count - 1]["story_title"]));
                $('.story_text').html($story[story_count - 1]["story"]);

                $('.story_frame_cont').css({
                    'background': 'url(' + $story[story_count - 1]["url_image"] + ')',
                    'background-size': 'cover'
                });

                if ($(window).width() > 500) {
                    $('.story_frame').css('top', String(Number(Number($(window).height()) - Number($('.story_frame').height())) / 2) + 'px');
                } else {
                    $('.story_frame').css('top', String(Number(Number($(window).height()) - Number($('.story_frame').height())) / 2) - 5 + 'px');
                }

                $('.story_frame').css('left', String(Number(Number($(window).width()) - Number($('.story_frame').width())) / 2) + 'px');

                if ($(window).width() > 500) {
                    $('.story_frame').css('transform', 'rotate(-2.5deg)');
                } else {
                    $('.story_frame').css('transform', 'scale(0.88) rotate(-0.5deg)');
                }

                $(this).removeClass("lowIn").delay(5).queue(function(next) {
                    $(this).addClass("highIn").delay(1400).queue(function(next) {
                        $('.story_frame').css('opacity', '1');
                        $(this).removeClass("highIn");
                        next();
                    });
                    next();
                });
                next();
            })

            $('.change_frame_layer').css({
                'background': 'url(' + $story[story_count + 1]["url_image"] + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })

            story_count = story_count + 1;
        }, 16700)
    }

    var nextStoryTap = $('#next_story');

    nextStoryTap.on("click", function() {
        if ((story_count + 1) == story_length - 1) {
            story_count = 0;
        }
        autoTell();
        $('#story_image').attr('src', $story[story_count]["url_image"]);
        $('.story_title').text(String($story[story_count]["story_title"]));
        $('.story_text').html($story[story_count]["story"]);
        $('.story_frame_cont').css({
            'background': 'url(' + $story[story_count]["url_image"] + ')',
            'background-size': 'cover'
        });

        if ($(window).width() > 500) {
            $('.story_frame').css('top', String(Number(Number($(window).height()) - Number($('.story_frame').height())) / 2) + 'px');
        } else {
            $('.story_frame').css('top', String(Number(Number($(window).height()) - Number($('.story_frame').height())) / 2) - 5 + 'px');
        }

        $('.story_frame').css('left', String(Number(Number($(window).width()) - Number($('.story_frame').width())) / 2) + 'px');

        if ($(window).width() > 500) {
            $('.story_frame').css('transform', 'rotate(-2.5deg)');
        } else {
            $('.story_frame').css('transform', 'scale(0.88) rotate(-0.5deg)');
        }

        $('.change_frame_layer').css({
            'background': 'url(' + $story[story_count + 1]["url_image"] + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });

        story_count = story_count + 1;
    });

    var prevStoryTap = $('#prev_story');

    prevStoryTap.on("click", function() {
        $('#story_image').attr('src', $story[story_count - 2]["url_image"]);
        $('.story_title').text(String($story[story_count - 2]["story_title"]));
        $('.story_text').html($story[story_count - 2]["story"]);

        $('.story_frame_cont').css({
            'background': 'url(' + $story[story_count - 2]["url_image"] + ')',
            'background-size': 'cover'
        });

        if ($(window).width() > 500) {
            $('.story_frame').css('top', String(Number(Number($(window).height()) - Number($('.story_frame').height())) / 2) + 'px');
        } else {
            $('.story_frame').css('top', String(Number(Number($(window).height()) - Number($('.story_frame').height())) / 2) - 5 + 'px');
        }

        $('.story_frame').css('left', String(Number(Number($(window).width()) - Number($('.story_frame').width())) / 2) + 'px');

        if ($(window).width() > 500) {
            $('.story_frame').css('transform', 'rotate(-2.5deg)');
        } else {
            $('.story_frame').css('transform', 'scale(0.88) rotate(-0.5deg)');
        }

        $('.change_frame_layer').css({
            'background': 'url(' + $story[story_count - 1]["url_image"] + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });

        story_count = story_count - 1;

        console.log(story_count);

        if (story_count == 1) {
            story_count = 3;
        }
        autoTell();
    });
})