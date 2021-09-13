package com.sakthi.shapes;

/**
 * Class to draw Rounded Rectangle
 * 
 * @author Sakthi
 *
 */
public class RoundRect extends Rectangle {

	private int borderRadius;

	public RoundRect(Position position, Size size, int borderRadius, String color) {
		super(position, size, color);
		this.setBorderRadius(borderRadius);
	}

	/**
	 * @return the borderRadius
	 */
	public int getBorderRadius() {
		return borderRadius;
	}

	/**
	 * @param borderRadius the borderRadius to set
	 */
	public void setBorderRadius(int borderRadius) {
		Utils.validatePositive("RoundRect", "borderRadius", borderRadius);
		this.borderRadius = borderRadius;
		this.draw();
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "RoundRect [borderRadius=" + borderRadius + "]";
	}

	@Override
	public void draw() {
		System.out.println(super.toString());
		System.out.println(this.toString());
	}

}
