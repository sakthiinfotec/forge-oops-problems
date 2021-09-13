package com.sakthi.shapes;

/**
 * Class to maintain Shape's X and Y position
 * 
 * @author Sakthi
 *
 */
public class Position {

	private int x;
	private int y;

	public Position(int x, int y) {
		this.setX(x);
		this.setY(y);
	}

	/**
	 * @return the x
	 */
	public int getX() {
		return x;
	}

	/**
	 * @param x
	 *            the x to set
	 */
	public void setX(int x) {
		Utils.validatePositive("Position", "x", x);
		this.x = x;
	}

	/**
	 * @return the y
	 */
	public int getY() {
		return y;
	}

	/**
	 * @param y
	 *            the y to set
	 */
	public void setY(int y) {
		Utils.validatePositive("Position", "y", y);
		this.y = y;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Position [x=" + x + ", y=" + y + "]";
	}

}
