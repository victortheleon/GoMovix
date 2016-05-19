$(document).ready(function () {
    showOffer();
    date_time('date_time');
});
function showOffer() {
    if (localStorage["offer"] == undefined || refreshTime()) {

        var d = Math.floor((Math.random() * 6) + 1);
        var arr = getOffers();
        for (var i = 0; i < arr.length; i++) {
            $(".imgOffer_" + i).attr("src", "imgs/offers/" + arr[i] + ".png");
        }
        $(".offer").show();
        localStorage["offer"] = Date.now();
    }
}
function getOffers() {
    var myArray = ['action', 'animation', 'comedy', 'drama', 'famliy', 'fantasy', 'horror', 'romance', 'war'];
    var arrReturn = [];
    shuffle(myArray);

    for (var i = 0; i < 3; i++) {
        var index = Math.floor((Math.random() * myArray.length - 1) + 1);
        arrReturn.push(myArray[index]);

        if (index > -1) {
            myArray.splice(index, 1);
        }
    }

    return arrReturn;
}
function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
function refreshTime() {
    var time = localStorage["offer"];
    var diff = (Date.now() - time) / 1000;//to sec

    if (diff > 86400) //24 hours
    {
        return true;
    } else {
        false;
    }

}

function date_time(id) {

    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];
    d = date.getDate();
    day = date.getDay();
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result = '<span class="clockTime">' + h + ':' + m + ':' + s + '</span><span class="clockDate">' + days[day] + ', ' + d + '.' + month + '.' + year + ' </span>';
    document.getElementById(id).innerHTML = result;

    setTimeout(function () {
        date_time(id);
    }, 1000);

    return true;
}