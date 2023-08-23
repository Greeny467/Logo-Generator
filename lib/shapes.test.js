const shapes = require('./shapes');

describe('shapes', () => {
    describe('triangle.render', () =>{
        it('triangle objects should contain the correct svg code for a triangle', () =>{
            const testTriangle = new shapes.triangle('blue');
            expect(testTriangle.render()).toEqual(`<polygon points="0,100 50,0 100,100" fill="blue" />`);
        })
    })

    describe('circle.render', () =>{
        it('circle objects should contain the correct svg code for a circle', () =>{
            const testCircle = new shapes.circle('blue');
            expect(testCircle.render()).toEqual(`<circle cx="50" cy="50" r="50" fill="blue"/>`);
        })
    })

    describe('square.render', () => {
        it('square objects should contain the correct svg code for a square', () =>{
            const testSquare = new shapes.square('blue');
            expect(testSquare.render()).toEqual(`<rect x="0" y="0" rx="10" ry="10" width="100" height="100" fill="blue"/>`)
        })
    })
})