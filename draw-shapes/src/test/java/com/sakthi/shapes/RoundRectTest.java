package com.sakthi.shapes;

import static org.junit.Assert.*;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.verify;

import org.junit.Before;
import org.junit.Test;

public class RoundRectTest {
	RoundRect roundRect;

	@Before
	public void setup() {
		roundRect = new RoundRect(new Position(100, 100), new Size(30, 50), 10, "Green");
	}

	@Test
	public void testCreateAndDrawRoundRectangle() {
		roundRect.draw();
		assertEquals(10, roundRect.getBorderRadius());
	}

	@Test
	public void testReDrawRoundRectWithPositiveBorderRadius() {
		RoundRect spyRoundRect = spy(roundRect);
		spyRoundRect.setBorderRadius(12);
		assertEquals(12, spyRoundRect.getBorderRadius());

		// verify if draw is invoked when changing/setting Border Radius
		verify(spyRoundRect).draw();
	}

	@Test
	public void testReDrawRoundRectWithZeroBorderRadius() {
		RoundRect spyRoundRect = spy(roundRect);
		spyRoundRect.setBorderRadius(0);
		assertEquals(0, spyRoundRect.getBorderRadius());

		// verify if draw is invoked when changing/setting Border Radius
		verify(spyRoundRect).draw();
	}

	@Test(expected = IllegalArgumentException.class)
	public void testReDrawRoundRectWithNegativeBorderRadius() {
		RoundRect spyRoundRect = spy(roundRect);
		spyRoundRect.setBorderRadius(-15);
	}
}
