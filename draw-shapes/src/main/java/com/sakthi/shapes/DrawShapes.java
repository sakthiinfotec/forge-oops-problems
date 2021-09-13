package com.sakthi.shapes;

/**
 * Main for Drawing various shapes
 * 
 * @author Sakthi
 *
 */
public class DrawShapes {

	public static void main(String[] args) {
		Rectangle rect = new Rectangle(new Position(100, 100), new Size(50, 80), "Green");
		rect.draw();
		rect.setPosition(new Position(40, 40));
		rect.setColor("Blue");

		RoundRect roundRect = new RoundRect(new Position(100, 100), new Size(50, 80), 10, "Green");
		roundRect.draw();
		roundRect.setPosition(new Position(40, 40));
		roundRect.setColor("Blue");

		Oval oval = new Oval(new Position(100, 100), new Size(50, 80), "Green");
		oval.draw();
		oval.setPosition(new Position(40, 40));
		oval.setColor("Blue");
	}
}
