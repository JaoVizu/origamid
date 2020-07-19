class Button{
  constructor(text, background){
    this.text = text
    this.background = background
  }

  static element(background) {
    const button = document.createElement('button')
    button.innerText = `Olá ${background.toUpperCase()}`
    button.style.backgroundColor = background
    return button
  }

}
const yellowButton = Button.element('yellow')
console.log(yellowButton)