$("input").keypress(function (e) {
    if (e.charCode == 13) {
        clima(encodeURI($("input").val()))
    }
})
function clima(ciudad) {
    $.ajax({
        method: "GET",
        url : `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=95176c8edea30e33338e0eaddd53a916`,
        success: function (data) {
            console.log(data);
            $(".geo").text(data.sys.country);
            $("h2").text(data.name);
            $(".max").text(Math.floor(`${data.main.temp_max}`-273.15));
            $(".min").text(Math.floor(`${data.main.temp_min}`-273.15));
            $(".actual").text(Math.floor(`${data.main.temp}`-273.15));
        }
    })
}

$("button").each(function () {
    $(this).click(function () {
        clima($(this).text())
    })
})
