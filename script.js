var timer;

var compareDate = new Date('July 22, 2020, 11:00:00');

timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        window.open("https://meet.google.com/moz-ptqk-vgh");
        clearInterval(timer);

    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor((minutes / 60));
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}

// ParticlesJS Config.
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 650
            }
        },


        "color": {
            "value": "#ffffff"
        },

        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },

            "polygon": {
                "nb_sides": 5
            }
        },


        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },


        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },


        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },

        "move": {
            "enable": true,
            "speed": 4,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },



    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },

            "onclick": {
                "enable": true,
                "mode": "push"
            },

            "resize": true
        },

        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },


            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },

            "repulse": {
                "distance": 200,
                "duration": 0.4
            },

            "push": {
                "particles_nb": 4
            },

            "remove": {
                "particles_nb": 2
            }
        }
    },



    "retina_detect": true
});