package com.sakthi.shapes;

import static org.junit.Assert.*;

import org.junit.Test;

public class SizeTest {

	@Test
	public void testSizeWithBothPositive() {
		int width = 65, height = 80;
		Size size = new Size(width, height);
		assertEquals(width, size.getWidth());
		assertEquals(height, size.getHeight());
	}

	@Test
	public void testSizeWithBothZero() {
		int width = 0, height = 0;
		Size size = new Size(width, height);
		assertEquals(width, size.getWidth());
		assertEquals(height, size.getHeight());
	}

	@Test(expected = IllegalArgumentException.class)
	public void testSizeWithNegativeWidth() {
		int width = -20, height = 200;
		new Size(width, height);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testSizeWithNegativeHeight() {
		int width = 90, height = -170;
		new Size(width, height);
	}

	@Test(expected = IllegalArgumentException.class)
	public void testSizeWithBothNegative() {
		int width = -40, height = -90;
		new Size(width, height);
	}

}
