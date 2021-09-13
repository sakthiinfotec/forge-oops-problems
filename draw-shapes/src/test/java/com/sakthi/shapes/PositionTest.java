package com.sakthi.shapes;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PositionTest {

	@Test
	public void testPositionWithBothPositiveValues() {
		int x = 25, y = 80;
		Position position = new Position(x, y);
		assertEquals(x, position.getX());
		assertEquals(y, position.getY());
	}

	@Test
	public void testPositionWithBothZeroValues() {
		int x = 0, y = 0;
		Position position = new Position(x, y);
		assertEquals(x, position.getX());
		assertEquals(y, position.getY());
	}

	@Test(expected = IllegalArgumentException.class)
	public void testPositionWithXNegative() {
		int x = -9, y = 100;
		new Position(x, y);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testPositionWithYNegative() {
		int x = 30, y = -100;
		new Position(x, y);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testPositionWithBothNegative() {
		int x = -20, y = -100;
		new Position(x, y);
	}

}
