

//========== functions ==============//
const render = (total) => {
    if (total < 0) {
        $('#result').html(`${total}`).addClass('red')
    } else {
        $('#result').html(`${total}`).removeClass('red')
    }  
}

let total = 0

const calculate = (evt) => {
    
    let userInput = Number($('#input').val())
    if (isNaN(userInput)) {
        total = NaN
    } else {
        if (evt.target.id === "plus") {
            total += userInput
        } else if (evt.target.id === "minus") {
            total -= userInput
        }
    }
    render(total)
}

//========== Event Listeners ==============//
$('#controls').on('click', calculate)

