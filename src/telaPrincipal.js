$(document).ready(()=>{
    $('body').css('background-color', '#f3f2f2')

    $('.temaClaro').hide()

    $('.temaEscuro').click(()=>{
        $('body').css('background-color', '#171a21')
        $('h1, h3, main p').css('color', '#FFF')
        $('#logotipo, #imagemIA').css('border-color', '#f3f2f2')

        $('.modoClaro').hide()
        $('.modoEscuro').show()

        $('.temaEscuro').hide()
        $('.temaClaro').show()
    })

    $('.temaClaro i').click(()=>{
        $('body').css('background-color', '#f3f2f2')
        $('h1, h3, main p').css('color', '#000')
        $('#logotipo, #imagemIA').css('border-color', '#171a21')

        $('.modoEscuro').hide()
        $('.modoClaro').show()

        $('.temaEscuro').show()
        $('.temaClaro').hide()
    })

    $('#btn-Mais').click(()=>{
        $('.psicologos .container > .infosPsic:last-child').css('display', 'flex')

        $('#btn-Mais').hide()
        $('#btn-Menos').show()
    })

    $('#btn-Menos').click(()=>{
        $('.psicologos .container > .infosPsic:last-child').css('display', 'none')

        $('#btn-Mais').show()
        $('#btn-Menos').hide()
    })
})