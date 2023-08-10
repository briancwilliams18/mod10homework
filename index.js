const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
    {
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: input => input.length > 0 && input.length <= 3,
    },
    {
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):',
    },
    {
        name: 'shape',
        message: 'Choose a shape:',
        type: 'list',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):',
    },
];

async function generateLogo() {
    try {
        const answers = await inquirer.prompt(questions);

        // Create the chosen shape
        let shape;
        switch (answers.shape) {
            case 'circle':
                shape = new Circle();
                break;
            case 'triangle':
                shape = new Triangle();
                break;
            case 'square':
                shape = new Square();
                break;
        }

        // Set shape color
        shape.setColor(answers.shapeColor);

        // Generate SVG content
        const svgContent = shape.render();

        // Write SVG content to logo.svg
        fs.writeFileSync('logo.svg', svgContent);

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

generateLogo();

