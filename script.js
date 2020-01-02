/*
var user=
	{
fname:prompt("First Name "),
lname:prompt("Last Name "),
age:prompt("Age"),
eyecolor:prompt("Eye-color"),
work:prompt("Work"),
}

document.write("Name"+"=" + user.fname + " " + user.lname + "		");
document.write("Age"+"="  + user.age + "		");
document.write("Eyecolor"+"="  + user.eyecolor + "			");
document.write("Work"  +"=" + user.work + "		");
var  s="Rawat";
var b= 'Suraj  Rawat' ; */
/*
var date=  new Date(), 
day=date.getDate(),
month=date.getMonth(),
year=date.getFullYear(); 
date++;
month++;
year++;
document.write(day + "/" + month + "/" + year + " ");
*/
/*
var x = 5;
var i= 1;

 while (i <= 10) {
document.write("5"  +  "X" + i + " = " + x*i  + " ");
i++;
}
*/
var Numseq = " ";
var  Num1 = 0;
var Num2 = 1;
var Newnum= 0;
while(Newnum <= 1000){
	
	Newnum = Num1 + Num2 ; 
	document.write(Newnum + ", ");
	Num1 = Num2; 
	Num2 = Newnum; 
}
var date = new Date();
 day = date.getDay();
var  dow = ["Sunday" , "Monday" ,"Tuesday","wednesday","thursday","friday",
"Saturday"];
document.write("Today is " + dow[day]) ;


/*var gra = [23,45,97,98,67,46,35,64,67,57, ,45,47,28,93	];

var total = 0,
 ave = 0 ,
i =0,
len = gra.length;

 for ( i = 0; i < gra.length; i++){
	if(gra[i] === undefined ){
		len--;
		continue;
		}
	 total = total + gra[i];
}
ave = total / gra.length;
document.write("Average is" + ave ) ;
	document.write(i);*/
	
	var oddEven = (num) => (num % 2) === 0 ? num + "is even" : num + "is odd" ;
	



