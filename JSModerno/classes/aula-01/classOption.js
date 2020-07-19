class Button{
  constructor(options){
    this.options = options
  }

  element() {
    const { backgroundColor, text, color} = this.options
    const button = document.createElement('button')
    button.innerText = text
    button.style.backgroundColor = backgroundColor
    button.style.color = color
    return button
  }

  appendTo(target) {
    const element = document.querySelector(target)
    element.appendChild(this.element())
  }
}

const buttonOptions = {
  backgroundColor : 'yellow',
  text:'Olá Amarelo',
  color : 'black'
}

const yellowButton = new Button(buttonOptions)
console.log(yellowButton.appendTo('body'))