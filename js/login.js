
	var num=[1,2,3,4,5,6,7,8,9];
	var small=[];
	var large=[];
	var midpoint=(num[0]+num[-1])/2;
	console.log(midpoint);
	for (var i = 0; i < num.length; i++) {
for (var j = 0; j <5 ; j++) {
	if(num[i]<midpoint){
		small[j]=num[i];
	}
}

}
for (var x = 0; x < 5 ;x++) {
	console.log(small[x]);
}
for (var i = 0; i < 5; i++) {
	console.log(large[i]);
}