//Average
/*var g = [23,45,97,98,67,46,35,64,67,57,45,47,28,93	];
var total = 0,
 ave = 0 ,
i =0;
for( i = 0; i < g.length; i++){
total += g[i];
}
ave = total / g.length;
document.write("Average is" + ave ) ;
*/
var tab = function tab(x) {
	for(var i = 1; i <=10 ; i++){
		document.write(x +  "X" + i + "=" + x*i + " ") ;
		}};

/*var Numseq = " ";
var  Num1 = 0;
var Num2 = 1;
var Newnum= 0;
while(Newnum < 1000){
	Newnum = Num1 + Num2 ; 
	document.write(Newnum + ", ");
	Num1 = Num2; 
	Num2 = Newnum; 
}*/
var arr = [0];
var fibo = function(lim) {
	var N1 = 0,
	N2 = 1,
	NewN = 0;
		while( NewN < lim ) {
		NewN = N1 + N2 ;
		document.write(NewN + ",");
	    arr.push(NewN);
		N1 = N2;
		N2 = NewN; 
		return;
	     }};
		fibo(100);
	document.write(arr.length);

var  S = function (N){
	return N*N*N;
	}
	for(var i = 1; i <=30;i++){
document.write( " " + i + "=" + S(i) + " ");
}

console.log("hi");


