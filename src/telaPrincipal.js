$(document).ready(()=>{
    $('.temaClaro').hide()

    $('.temaEscuro').click(()=>{
        $('#corpoSite').css('background-color', '#121314')
        $('h1').css('color', '#FFF')
        $('.temaEscuro').hide()
        $('.temaClaro').show()
    })

    $('.temaClaro i').click(()=>{
        $('#corpoSite').css('background-color', '#f7f7f7')
        $('h1').css('color', '#000')
        $('.temaEscuro').show()
        $('.temaClaro').hide()
    })
})