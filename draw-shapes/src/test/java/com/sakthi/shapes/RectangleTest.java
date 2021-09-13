package com.sakthi.shapes;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.verify;

import org.junit.Before;
import org.junit.Test;

public class RectangleTest {
	Rectangle rect;

	@Before
	public void setup() {
		rect = new Rectangle(new Position(100, 100), new Size(50, 80), "Green");
	}

	@Test
	public void testCreateAndDrawRectangle() {
		rect.draw();

		assertEquals(100, rect.getPosition().getX());
		assertEquals(100, rect.getPosition().getY());
		assertEquals(50, rect.getSize().getWidth());
		assertEquals(80, rect.getSize().getHeight());
		assertEquals("Green", rect.getColor());
	}

	@Test
	public void testReDrawRectangleByChangePosition() {
		Rectangle spyRect = spy(rect);
		assertEquals(100, spyRect.getPosition().getX());
		assertEquals(100, spyRect.getPosition().getY());

		spyRect.setPosition(new Position(40, 40));
		assertEquals(40, spyRect.getPosition().getX());
		assertEquals(40, spyRect.getPosition().getY());

		// verify if draw is invoked when changing/setting position
		verify(spyRect).draw();
	}

	@Test
	public void testReDrawRectangleByChangeSize() {
		Rectangle spyRect = spy(rect);
		assertEquals(50, spyRect.getSize().getWidth());
		assertEquals(80, spyRect.getSize().getHeight());

		spyRect.setSize(new Size(60, 90));
		assertEquals(60, spyRect.getSize().getWidth());
		assertEquals(90, spyRect.getSize().getHeight());

		// verify if draw is invoked when changing/setting Size
		verify(spyRect).draw();
	}

	@Test
	public void testReDrawRectangleByChangeColor() {
		Rectangle spyRect = spy(rect);
		assertEquals("Green", rect.getColor());

		spyRect.setColor("Red");
		assertEquals("Red", spyRect.getColor());

		// verify if draw is invoked when changing/setting Color
		verify(spyRect).draw();
	}
}
