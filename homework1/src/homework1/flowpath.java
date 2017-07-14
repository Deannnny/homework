package homework1;

import java.util.Scanner;

public class flowpath {
	public static void main(String[] args){
			String name;
			int age;
			int score;
			System.out.println("Enter your name:");
			Scanner sc = new Scanner(System.in);
			name = sc.nextLine();
			System.out.println("Enter your age:");
			age = sc.nextInt();
			if(age>=
					18){
				System.out.println("Mr."+name+" you are adult.");
			}else{
				System.out.println("Enter your score.");
				score = sc.nextInt();
				if(score>=90){
					System.out.println("Dear "+name+ " you are a good student!");
				}else{
					System.out.println(" you must work harder!");
				}
			}
}
}