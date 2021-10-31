$(function(){

    let red = 0;
    let green = 0;
    let blue = 0;

    $('#slider').slider({
        min: 0,
        max: 256,
        slide: function( event, ui ) {
            switch ($('input[name="color"]:checked').val()) {
                case 'red':
                    red = ui.value
                    break
                case 'green':
                    green = ui.value
                    break
                case 'blue':
                    blue = ui.value
                    break
            }

            if ($('#color').is(':checked')) {
                $('.text').css('color', `rgb(${red}, ${green}, ${blue})`)
                console.log($('.text').css('color'))
            }

            if ($('#background').is(':checked')) {
                $('.text').css('background-color', `rgb(${red}, ${green}, ${blue})`)
            }

        }
      });





    $( "input" ).checkboxradio();








})