package com.sakthi.shapes;

/**
 * A common utility class
 * 
 * @author Sakthi
 *
 */
public class Utils {

	/**
	 * Check for +VE number. Throws runtime exception if the value is -VE.
	 * @param type A class from where the validation happens
	 * @param param Variable for which the validation happens
	 * @param num the value
	 */
	public static void validatePositive(String type, String param, int num) {
		if (num < 0) {
			throw new IllegalArgumentException(String.format("Invalid %s input. Value for %s=%d should be in positive", type, param, num));
		}
	}
}
