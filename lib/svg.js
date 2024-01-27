class SVG {
    // properties
    constructor(text, textColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }

    // methods
    render() {
        return `    
<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">

${this.shape}

<text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>
        `
    }
}

module.exports = SVG;