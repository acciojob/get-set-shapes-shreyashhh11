//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}

	get recWidth(){
		return this._width;
	}

	get recHeight(){
		return this._height;
	}

	getArea(){
		return this._width * this._height;
	}
}

class Square extends Animal {
	construcotr(side){
		super(side,side);
	}

	getPerimeter(){
		return 4 * this._width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
