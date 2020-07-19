class Button {
  constructor(text, background) {
    this.text = text
    this.background = background
  }

  element() {
    const button = document.createElement('button');
    button.innerText = this.text;
    button.style.backgroundColor = this.background;
    return button;
  }
}

const blueButton = new Button('Comprar', 'blue')

console.log(blueButton.element())