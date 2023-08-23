// Import anything necessary
const inquirer = require('inquirer');
const { readFile, writeFile } = require('fs/promises');
const shapes = require('./lib/shapes');


//define variables

//define any necessary functions

//inquirer prompt to get user input
inquirer
    .prompt([
        {
            type:'list',
            message:'What shape would you like to use for the logo?',
            choices:['square', 'circle', 'triangle'],
            name:'shape'
        },
        {
            type:'input',
            message:'What color would you like for the background?(Careful with spelling)',
            name:'backgroundColor'
        },
        {
            type:'input',
            message:'What text would you like on the logo? (Only up to 3 letters, anything else will be discarded',
            name:'logoText'
        },
        {
            type:'input',
            message:'What color would you like the text to be?(Careful with spelling)',
            name:'textColor'
        }
    ])
//.then functions taking that input and using them to make the logo data, and then writefile to put it all together. 
    .then((response) =>{
        let chosenShape = response.shape;
        let shapeColor = response.backgroundColor;
        let logoText = response.logoText;
        let textColor = response.textColor;

        if (logoText.length > 3){
            logoText = logoText.slice(0, 3)
        }
        if(chosenShape === 'triangle'){
            var workingShape = new shapes.triangle(shapeColor);
        }
        else if(chosenShape === 'circle'){
            var workingShape = new shapes.circle(shapeColor);
        }
        else if(chosenShape === 'square'){
            var workingShape = new shapes.square(shapeColor);
        }

        let shapeSvg = workingShape.render();
        let textSvg = `<text x = "50" y = "50" font-size = "30" fill = "${textColor}" alignment-baseline="middle" text-anchor="middle">${logoText}</text>`;

        let svgCode = `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <g transform="translate(100,50)">
            ${shapeSvg}
        
            ${textSvg}
        </g>

        </svg>`

        writeFile('./examples/logo.svg', svgCode, 
        (err) => err ? console.error(err) : console.log('success'))
        .then(() => console.log('generated logo.svg file'))
    });