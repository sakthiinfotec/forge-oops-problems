package com.sakthi.shapes;

/**
 * Stores Width and Height of the Shape
 * 
 * @author Sakthi
 *
 */
public class Size {

	private int width;
	private int height;

	public Size(int width, int height) {
		this.setWidth(width);
		this.setHeight(height);
	}

	/**
	 * @return the width
	 */
	public int getWidth() {
		return width;
	}

	/**
	 * @param width the width to set
	 */
	public void setWidth(int width) {
		Utils.validatePositive("Size", "width", width);
		this.width = width;
	}

	/**
	 * @return the height
	 */
	public int getHeight() {
		return height;
	}

	/**
	 * @param height the height to set
	 */
	public void setHeight(int height) {
		Utils.validatePositive("Size", "height", height);
		this.height = height;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Size [width=" + width + ", height=" + height + "]";
	}

}
