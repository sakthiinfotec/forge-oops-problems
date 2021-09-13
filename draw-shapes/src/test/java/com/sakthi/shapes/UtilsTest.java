package com.sakthi.shapes;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class UtilsTest {

	@Test
	public void testWithPositiveInput() {
		Utils.validatePositive("Size", "height", 20);
	}

	@Test
	public void testWithNegativeInputThrowsException() {
		try {
			Utils.validatePositive("Size", "height", -20);
		} catch (IllegalArgumentException iae) {
			assertEquals("Invalid Size input. Value for height=-20 should be in positive", iae.getMessage());
		}
	}
}
