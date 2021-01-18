package check;

import constants.Constants;

public class Check{

	private static String firstName = "高谷";
	private static String lastName = "駆";

	public static void main(String[] args) {

		System.out.println("printNameメソッド → " + printName(firstName, lastName));

		Pet p = new Pet(Constants.CHECK_CLASS_JAVA,Constants.CHECK_CLASS_HOGE);
		p.introduce();

		RobotPet R = new RobotPet(Constants.CHECK_CLASS_R2D2,Constants.CHECK_CLASS_LUKE);
		R.introduce();
	}


	private static String printName(String firstName,String lastName ) {
		return firstName + lastName;
	}











}