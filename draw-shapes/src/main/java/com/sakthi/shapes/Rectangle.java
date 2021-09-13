package com.sakthi.shapes;

/**
 * Class to draw Rectangle shape
 * 
 * @author Sakthi
 *
 */
public class Rectangle extends Shape {

	public Rectangle(Position position, Size size, String color) {
		super(position, size, color);
	}

	@Override
	public void draw() {
		System.out.println(this.toString());
	}
}
