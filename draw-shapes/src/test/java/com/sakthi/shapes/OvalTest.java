package com.sakthi.shapes;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.verify;

import org.junit.Before;
import org.junit.Test;

public class OvalTest {

	Oval oval;
	
	@Before
	public void setup() {
		oval = new Oval(new Position(100, 100), new Size(50, 80), "Green");
	}
	
	@Test
	public void testCreateAndDrawOval() {
		oval.draw();

		assertEquals(100, oval.getPosition().getX());
		assertEquals(100, oval.getPosition().getY());
		assertEquals(50, oval.getSize().getWidth());
		assertEquals(80, oval.getSize().getHeight());
		assertEquals("Green", oval.getColor());
	}

	@Test
	public void testReDrawOvalByChangePosition() {
		Oval spyOval = spy(oval);
		assertEquals(100, spyOval.getPosition().getX());
		assertEquals(100, spyOval.getPosition().getY());

		spyOval.setPosition(new Position(70, 70));
		assertEquals(70, spyOval.getPosition().getX());
		assertEquals(70, spyOval.getPosition().getY());

		// verify if draw is invoked when changing/setting position
		verify(spyOval).draw();
	}

	@Test
	public void testReDrawOvalByChangeSize() {
		Oval spyOval = spy(oval);
		assertEquals(50, spyOval.getSize().getWidth());
		assertEquals(80, spyOval.getSize().getHeight());

		spyOval.setSize(new Size(60, 90));
		assertEquals(60, spyOval.getSize().getWidth());
		assertEquals(90, spyOval.getSize().getHeight());

		// verify if draw is invoked when changing/setting Size
		verify(spyOval).draw();
	}

	@Test
	public void testReDrawOvalByChangeColor() {
		Oval spyOval = spy(oval);
		assertEquals("Green", spyOval.getColor());

		spyOval.setColor("Brown");
		assertEquals("Brown", spyOval.getColor());

		// verify if draw is invoked when changing/setting Color
		verify(spyOval).draw();
	}

}
