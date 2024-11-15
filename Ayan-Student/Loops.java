import java.util.*;

public class C_Loops{
	public static void main(String[] args) {
	 
	 // Loops - Runs a code for some fixed number of times/iterations
	 
	 /*
	 for(Instantiation, Conditions, updation){
	  Body of the Loops
	 }
	 */
	 
	 // I -> C -> B -> U -> C -> B -> U -> C -> B -> U -> C -> B -> U -> C -> B -> U -> C -> B -> U 


   // Sum of all natural numbers
  /* 
  Scanner sc = new Scanner(System.in);
  int n = sc.nextInt();
	 int sum = 0;
	 for(int i = 0; i<=n; i= i+1){
	 System.out.println(i);
		sum += i;
	 }
		System.out.println("Sum of all numbers from 1 - n: " + sum);
  
  */ 
  
  
  // Sum of all numbers which is divisible by 5
  
  /*
  int n = 50;
  long sum = 1;
  for(int i = 1; i<=n; i++){ 
   if(i%5 == 0){
   sum *= i;
   }
  }
  System.out.println("sum of numbers that is divisible by 5: "+ sum);
  */ 
  
  
  //*************** producct of all numbers from 1-10 **************
  /*
  int n = 10;
  int p = 1;
  for(int i = 1; i<=n; i++){
   p *= i; 
  }
  System.out.println(p);
  */ 
		
		/************************
		 * Error:
		 * 1. Compile time Errors: Errors that happens while Compilation of code
		 * 2. Run time Errors: Errors that happens while running or executing the code.
		**********************/ 
		
		
		/*************** Error: Variable might not be initialised ***********/
		// int a;
		// System.out.println(a);
		


		/***************❌❌ Error: Variable might not be initialised ***********/
		// int a;
		// int b = 30;
		
		// if(b > 20){
		//    a = 10;
		// }
		// System.out.println(a);
		
		
		
  /***************❌❌ No Error as in both cases of if being true/false the Variable a has a value ***********/
  /*
  int b = 30;
  int a;
  
  if(b > 20){
     a = 10;
  }
  else{
   a = 5;
  }
  System.out.println(a);
  */ 
		
		
		/********************************************/
		/*
		int n = 20;
		int i = 2;
		for(; i<=n; i=i+2){
		 System.out.println(i);
		}
		
		System.out.println("After the loop, when Conditions got false: " + i);
		*/ 
		
		
		/********************* Infinite loop ***********************/		
		
		// int n = 10;
		// for(int i = 1; i <= n; ){
		//  System.out.println(i);
		// }
		
		
		/*___________ Flow control - break/continue _________________*/ 
		
		// for(int i = 0; i<=10; i++){
		//  if(i == 5){
		//   break;
		//  }
		//  System.out.println(i);
		// }
		
		
		// for(int i = 1; i<=100; i++){
		//  if(i%25 == 0){
		//   // break;
		//   continue; 
		//  }
		//  System.out.println(i);
		// }
		
		
		//*************** Print all number from 1 to 100 except multiple of 7
		
		// for(int i = 0; i<=100; i++){
		//  if(i%7 == 0){
		//   continue;
		//  }
		//  System.out.println(i);
		// }
		
		
		/*~~~~~~~~~~~~~~~~~~~~~  While-Loop  ~~~~~~~~~~~~~~~~~~~~~~*/ 
		// C -> B -> C -> B -> C -> B -> C -> B -> C -> B -> C -> B -> C -> B -> C -> B -> 
		// while(condtion){
		//  Body of loop
		// }
		
		
		// int i = 1;
		// while(i <= 10){
		//  System.out.println(i);
		//  i = i+1;
		// }
		
		
		//~~~~~~~~~~~~~~~~~ print all number of the digit in reverse UnsupportedOperationException
		/* 
		int n = 26874;
		int p = n;
		int sum = 0;

		while(n > 0){
		 int i = n%10;
		 sum = sum+i;
		 System.out.println(i);
		 // System.out.println(sum);
		 n = n/10;
		}
		
		System.out.println(p);
		System.out.println("Sum of all digits: " + sum);
		// */
		
		
		
		/************* Count trailling zero in a number *************/
		/*
		 
		int n = 123456789;
		int sum = 0;
		int ct = 0;
		
		while(n > 0){
		 int d = n%10;
		 
		 if(d == 0){
		  ct = ct + 1;
		 }else{
		  break;
		 }
		 
		 // sum += d;
		 // System.out.println(d);
		 //  n = n/10;
		  
		}
		// System.out.println(sum);
		System.out.println(ct);
		
		*/
		
		//~~~~~~~~~~~~ Factor or any number
		/*
		int n = 54;
		for(int i = 1; i<=n; i++){
		 if(n % i == 0){
		 System.out.println(i);
		 }
		}
		*/ 
		
		
		// for(;;){
		//  System.out.println("Infinite Loop");
		// }
		
		
		// int a = 10;
		// if(a < 5);
		//  {
		//  System.out.println("Hello");
		// }
		
		
		// Delay Loops
		// for(long i = 1; i<= 10000000000L; i++); // Focus semicolon
		//  System.out.println("Hello");
		
		
		// ⭐ Print all digits of a number   using while loop
 		/* 
		int n  = 1254;
		int p = n; 
		int sum = 0;
		
		while(n >  0){
		 int d = n % 10;
		 System.out.println(d);
		 n = n/10;
		 sum += n;
		}
		System.out.println(p);
		System.out.println(sum);
		
		*/
		
		//******** print digits program and sum of digits *********
		/*
		Scanner sc = new Scanner(System.in);
		int n = 613887;
		int sum = 0;
		while(n > 0){
		 int d = n % 10;
		 System.out.println(d);
		 sum = sum + d;
		 n = n / 10;
		}
		System.out.println(sum);
		*/ 
  
		/*********** Print only even number from the digits ************/ 
		// Scanner sc = new Scanner(System.in);
		// int n = sc.nextInt();
		// while(n > 0){
		//  int d = n % 10;
		//  if(d %2 == 0){
		//  System.out.println(d);
		//  }
		//  n = n/10;
		// }
		
		
		/***************** Add number at last of the digits ******************/ 
		// Scanner sc = new Scanner(System.in);
		// int ad = sc.nextInt();
		// int n = 1546;
		// int rever = 1;
		
		// while(n == n){
		//  // int d = n % 10;
		//   rever = n * 10 + ad;
		// System.out.println(rever);
		// }
		
		

		
		
  /*****************⭐ reverse the number of the digits  ******************/ 
		
		// int n = 95743;
		// int rev = 0;
		
		// while(n > 0){
		//  int d = n % 10;
		//  rev = rev * 10 + d;
		//  // System.out.println(rev);
		//  n = n/10;
		// }
		//  System.out.println(rev); 
		
		
  /*****************⭐  if number is negative  then reverse the number of the digits ******************/ 
		
		// int n = -95743;
		
		// if(n < 0){
		//  n = n * -1;
		// }
		
		// int rev = 0;
		
		// while(n != 0){
		//  int d = n % 10;
		//  rev = rev * 10 + d;
		//  // System.out.println(rev);
		//  n = n/10;
		// }
		//  System.out.println(rev); 
		
		
		
		
  //**************** ⭐ Palindrom number - number equal to its reverse
  // Adobe Zoho Samsung Oracle
  
  
		/***** Method-1 *****/ 
		// Scanner sc = new Scanner(System.in);
		// int n = sc.nextInt();
		
		// int rev = 0;
		// while(n > 0){
		//  int d = n % 10;
		//  rev = rev * 10 + d;
		//  System.out.println(d);
		//  n = n/10;
		// }
		
		// System.out.println(rev);
		
		
  /***** Method-2 *****/ 
		// Scanner sc = new Scanner(System.in);
		// int n = sc.nextInt();
		// int rev = 0;
  // int p = n; //*** ⭐  var p is use for Palindrom  because the vaue of n became 0 at the end of While-Loop
		
		// while(n > 0){
		//  int d = n % 10;
		//  rev = rev * 10 + d;
		//  // System.out.println(d);
		//  n = n / 10;
		// }
		// System.out.println(rev);
		// // System.out.println(p);
		
		// if(p == rev){
		//  System.out.println("Entered number is Palindrom 😎 ");
		// }else{
		//  System.out.println("Entered number is not Palindrom 😓");
		// }
		
		
		/*********** ________ Do-while Loop ___________ ***********/ 
		/*^^^^^^^^^^^^^^^^^^^^^^^
		  1. Entry controlled loops - These are loops where Conditions check is happening prior to the body;(eg. for, while)
		  2. Exit controlled loops  - These are loops where Conditions check happens after the body; (eg, Do-while loop)
		^^^^^^^^^^^^^^^^^^^^^^^^^*/ 
		
		// C -> B -> C -> B -> C -> B -> C
		
		int n = 1;
		do { 
		 System.out.println(n);
		 n = n + 1;
		}while(n >= 10);
		
		
		
		
		
		
	}
}
