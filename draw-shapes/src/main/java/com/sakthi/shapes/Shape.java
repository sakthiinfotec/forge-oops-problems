package com.sakthi.shapes;

/**
 * Abstract base class for all the Shapes
 * 
 * @author Sakthi
 *
 */
public abstract class Shape {

	private Position position;
	private Size size;
	private String color;

	public Shape(Position position, Size size, String color) {
		this.position = position;
		this.size = size;
		this.color = color;
	}

	/**
	 * @return the position
	 */
	public Position getPosition() {
		return position;
	}

	/**
	 * @param position the position to set
	 */
	public void setPosition(Position position) {
		this.position = position;
		this.draw();
	}

	/**
	 * @return the size
	 */
	public Size getSize() {
		return size;
	}

	/**
	 * @param size the size to set
	 */
	public void setSize(Size size) {
		this.size = size;
		this.draw();
	}

	/**
	 * @return the color
	 */
	public String getColor() {
		return color;
	}

	/**
	 * @param color the color to set
	 */
	public void setColor(String color) {
		this.color = color;
		this.draw();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return this.getClass().getSimpleName() + " [position=" + position + ", size=" + size + ", color=" + color + "]";
	}

	/*
	 * An abstract method to draw a shape
	 */
	public abstract void draw();

}
