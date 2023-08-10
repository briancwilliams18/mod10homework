class Shape {
    constructor() {
        this.color = 'black'; // Default color
    }

    setColor(color) {
        this.color = color;
    }

    render(text, textColor) {
        const svg = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <!-- Actual Base shape SVG markup here -->
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="36" fill="${textColor}">
        ${text}
    </text>
</svg>`;
        return svg;
    }
}

class Triangle extends Shape {
    render(text, textColor) {
        const svg = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 275,180 25,180" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="36" fill="${textColor}">
        ${text}
    </text>
</svg>`;
        return svg;
    }
}

class Circle extends Shape {
    render(text, textColor) {
        const svg = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="90" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="36" fill="${textColor}">
        ${text}
    </text>
</svg>`;
        return svg;
    }
}

class Square extends Shape {
    render(text, textColor) {
        const svg = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="36" fill="${textColor}">
        ${text}
    </text>
</svg>`;
        return svg;
    }
}

module.exports = { Triangle, Circle, Square };
