package com.sakthi.shapes;

/**
 * Class to draw Oval shape.
 * 
 * @author Sakthi
 *
 */
public class Oval extends Shape {

	public Oval(Position position, Size size, String color) {
		super(position, size, color);
	}

	@Override
	public void draw() {
		System.out.println(this.toString());
	}
}
