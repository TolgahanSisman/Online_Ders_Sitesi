function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 1000);
    setInterval(changecolor, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return n <= 9 ? "0" + n : n;
    }

    function updateTimer() {
        msLeft = endTime - +new Date();

        time = new Date(msLeft);
        hours = time.getUTCHours();
        mins = time.getUTCMinutes();
        element.innerHTML =
            (hours ? hours + ":" + twoDigits(mins) : mins) +
            ":" +
            twoDigits(time.getUTCSeconds());
        setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
    }

    element = document.getElementById(elementName);
    endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

function playAudio(url) {
    new Audio(url).play();
}

function changecolor() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);


    if ((h == 8 && m >= 0) && (h == 8 && m < 40)) {
        document.getElementById("kutu1").style.backgroundColor = "aqua";
        countdown("ten-countdown", 40 - m, 0 - s);
    }

    if ((h == 8 && m >= 40) && (h == 8 && m < 50)) {
        document.getElementById("kutu1").style.backgroundColor = "orange";
        document.getElementById("kutu2").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 50 - m, 0 - s);
    }

    if ((h == 8 && m >= 50) || (h == 9 && m < 30)) {
        if (h == 8 && m <= 59) {
            document.getElementById("kutu2").style.backgroundColor = "orange";
            document.getElementById("kutu3").style.backgroundColor = "aqua";
            countdown("ten-countdown", 90 - m, 0 - s);
        }
        if (h == 9 && m <= 29) {
            document.getElementById("kutu2").style.backgroundColor = "orange";
            document.getElementById("kutu3").style.backgroundColor = "aqua";
            countdown("ten-countdown", 30 - m, 0 - s);
        }
    }

    if ((h == 9 && m >= 30) && (h == 9 && m < 40)) {
        document.getElementById("kutu3").style.backgroundColor = "orange";
        document.getElementById("kutu4").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 40 - m, 0 - s);
    }

    if ((h == 9 && m >= 40) || (h == 10 && m < 20)) {
        if (h == 9 && m <= 59) {
            document.getElementById("kutu4").style.backgroundColor = "orange";
            document.getElementById("kutu5").style.backgroundColor = "aqua";
            countdown("ten-countdown", 80 - m, 0 - s);
        }
        if (h == 10 && m <= 19) {
            document.getElementById("kutu4").style.backgroundColor = "orange";
            document.getElementById("kutu5").style.backgroundColor = "aqua";
            countdown("ten-countdown", 20 - m, 0 - s);
        }
    }

    if ((h == 10 && m >= 20) && (h == 10 && m < 30)) {
        document.getElementById("kutu5").style.backgroundColor = "orange";
        document.getElementById("kutu6").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 30 - m, 0 - s);
    }

    if ((h == 10 && m >= 30) || (h == 11 && m < 10)) {
        if (h == 10 && m <= 59) {
            document.getElementById("kutu6").style.backgroundColor = "orange";
            document.getElementById("kutu7").style.backgroundColor = "aqua";
            countdown("ten-countdown", 70 - m, 0 - s);
        }
        if (h == 11 && m <= 9) {
            document.getElementById("kutu6").style.backgroundColor = "orange";
            document.getElementById("kutu7").style.backgroundColor = "aqua";
            countdown("ten-countdown", 10 - m, 0 - s);
        }
    }

    if ((h == 11 && m >= 10) && (h == 11 && m < 20)) {
        document.getElementById("kutu7").style.backgroundColor = "orange";
        document.getElementById("kutu8").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 20 - m, 0 - s);
    }

    if ((h == 11 && m >= 20) || (h == 12 && m < 00)) {
        document.getElementById("kutu8").style.backgroundColor = "orange";
        document.getElementById("kutu9").style.backgroundColor = "aqua";
        countdown("ten-countdown", 60 - m, 0 - s);
    }

    if ((h == 12 && m >= 00) && (h == 12 && m < 10)) {
        document.getElementById("kutu9").style.backgroundColor = "orange";
        document.getElementById("kutu10").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 10 - m, 0 - s);
    }

    if ((h == 12 && m >= 10) && (h == 12 && m <= 49)) {
        document.getElementById("kutu10").style.backgroundColor = "orange";
        document.getElementById("kutu11").style.backgroundColor = "aqua";
        countdown("ten-countdown", 50 - m, 0 - s);
    }

    if ((h == 12 && m >= 50) || (h == 13 && m < 30)) {
        if ((h == 12 && m >= 50) && (h == 12 && m <= 59)) {
            document.getElementById("kutu11").style.backgroundColor = "orange";
            document.getElementById("kutu12").style.backgroundColor = "aqua";
            playAudio('zil.mp3');
            countdown("ten-countdown", 90 - m, 0 - s);
        }
        if (h == 13 && m <= 29) {
            document.getElementById("kutu11").style.backgroundColor = "orange";
            document.getElementById("kutu12").style.backgroundColor = "aqua";
            playAudio('zil.mp3');
            countdown("ten-countdown", 30 - m, 0 - s);
        }
    }
    if ((h == 13 && m >= 30) || (h == 14 && m < 10)) {
        if (h == 13 && m <= 59) {
            document.getElementById("kutu12").style.backgroundColor = "orange";
            document.getElementById("kutu13").style.backgroundColor = "aqua";
            countdown("ten-countdown", 70 - m, 0 - s);
        }
        if (h == 14 && m <= 10) {
            document.getElementById("kutu12").style.backgroundColor = "orange";
            document.getElementById("kutu13").style.backgroundColor = "aqua";
            countdown("ten-countdown", 10 - m, 0 - s);
        }
    }

    if (h == 14 && m >= 10 && h == 14 && m < 15) {
        document.getElementById("kutu13").style.backgroundColor = "orange";
        document.getElementById("kutu14").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 15 - m, 0 - s);
    }

    if (h == 14 && m >= 15 && h == 14 && m < 55) {
        document.getElementById("kutu14").style.backgroundColor = "orange";
        document.getElementById("kutu15").style.backgroundColor = "aqua";
        countdown("ten-countdown", 55 - m, 0 - s);
    }

    if ((h == 14 && m >= 55) || (h == 15 && m < 5)) {
        if (h == 14 && m <= 59) {
            document.getElementById("kutu15").style.backgroundColor = "orange";
            document.getElementById("kutu16").style.backgroundColor = "aqua";
            playAudio('zil.mp3');
            countdown("ten-countdown", 65 - m, 0 - s);
        }
        if (h == 15 && m <= 4) {
            document.getElementById("kutu15").style.backgroundColor = "orange";
            document.getElementById("kutu16").style.backgroundColor = "aqua";
            playAudio('zil.mp3');
            countdown("ten-countdown", 5 - m, 0 - s);
        }
    }

    if ((h == 15 && m >= 5) && (h == 15 && m < 45)) {
        document.getElementById("kutu16").style.backgroundColor = "orange";
        document.getElementById("kutu17").style.backgroundColor = "aqua";
        countdown("ten-countdown", 45 - m, 0 - s);
    }

    if ((h == 15 && m >= 45) && (h == 15 && m < 50)) {
        document.getElementById("kutu17").style.backgroundColor = "orange";
        document.getElementById("kutu18").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 50 - m, 0 - s);
    }

    if ((h == 15 && m >= 50) || (h == 16 && m < 30)) {
        if (h == 15 && m <= 59) {
            document.getElementById("kutu18").style.backgroundColor = "orange";
            document.getElementById("kutu19").style.backgroundColor = "aqua";
            countdown("ten-countdown", 90 - m, 0 - s);
        }
        if (h == 16 && m <= 29) {
            document.getElementById("kutu18").style.backgroundColor = "orange";
            document.getElementById("kutu19").style.backgroundColor = "aqua";
            countdown("ten-countdown", 30 - m, 0 - s);
        }
    }

    if ((h == 16 && m >= 30) && (h == 16 && m < 35)) {
        document.getElementById("kutu19").style.backgroundColor = "orange";
        document.getElementById("kutu20").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 35 - m, 0 - s);
    }

    if ((h == 16 && m >= 35) || (h == 17 && m < 15)) {
        if (h == 16 && m <= 59) {
            document.getElementById("kutu20").style.backgroundColor = "orange";
            document.getElementById("kutu21").style.backgroundColor = "aqua";
            countdown("ten-countdown", 75 - m, 0 - s);
        }
        if (h == 17 && m <= 14) {
            document.getElementById("kutu20").style.backgroundColor = "orange";
            document.getElementById("kutu21").style.backgroundColor = "aqua";
            countdown("ten-countdown", 15 - m, 0 - s);
        }
    }

    if ((h == 17 && m >= 15) || (h == 17 && m < 20)) {
        document.getElementById("kutu21").style.backgroundColor = "orange";
        document.getElementById("kutu22").style.backgroundColor = "aqua";
        playAudio('zil.mp3');
        countdown("ten-countdown", 20 - m, 0 - s);
    }

    if (h == 17 && m >= 20) {
        document.getElementById("kutu22").style.backgroundColor = "orange";
        document.getElementById("kutu23").style.backgroundColor = "aqua";
        countdown("ten-countdown", 60 - m, 0 - s);
    }

    if (h == 18 && m >= 00) {
        document.getElementById("kutu23").style.backgroundColor = "orange";
    }

    if ((h >= 18 && m >= 00) || (h < 8 && m <= 59)) {
        document.getElementById("ten-countdown").innerHTML = "Ders yok";
    }
}
