$(document).ready(()=>{
    $('body').css('background-color', '#f7f7f7')
    $('.temaClaro').hide()

    $('.temaEscuro').click(()=>{
        $('body').css('background-color', '#171a21')
        $('h1, #descricao').css('color', '#FFF')
        $('#logotipo').css('border-color', '#f7f7f7')
        $('.temaEscuro').hide()
        $('.temaClaro').show()
    })

    $('.temaClaro i').click(()=>{
        $('body').css('background-color', '#f7f7f7')
        $('h1, #descricao').css('color', '#000')
        $('#logotipo').css('border-color', '#171a21')
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