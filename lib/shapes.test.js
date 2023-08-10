const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should render a triangle SVG with given color', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle', () => {
    test('should render a circle SVG with given color', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toContain('<circle cx="150" cy="100" r="90" fill="red" />');
    });
});

describe('Square', () => {
    test('should render a square SVG with given color', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toContain('<rect x="50" y="50" width="200" height="200" fill="green" />');
    });
});
jest