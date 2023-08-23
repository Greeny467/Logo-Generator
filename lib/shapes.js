//shapes class, with color
class shape {
    constructor(color){
        this.shapeColor = color
    }

    render(){
        let colorString = this.svgShape
        return(colorString)
    }
}
//extending shape classes for triangle, square and circle
class triangle extends shape{
    constructor(color){
        super(color)
        this.svgShape = `<polygon points="0,100 50,0 100,100" fill="${this.shapeColor}" />`
    }
}

class circle extends shape{
    constructor(color){  
        super(color)
        this.svgShape = `<circle cx="50" cy="50" r="50" fill="${this.shapeColor}"/>`
    }
}

class square extends shape{
    constructor(color){
        super(color)
        this.svgShape = `<rect x="0" y="0" rx="10" ry="10" width="100" height="100" fill="${this.shapeColor}"/>`
    }
}

module.exports = {triangle, circle, square};