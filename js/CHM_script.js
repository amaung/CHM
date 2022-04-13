function WhatIsTodaysCardinalAttribute()
{
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = new Date(mm + '/' + dd + '/' + yyyy);
	
	var origin = new Date('05/14/2022');
	var difference = Math.abs(today.getTime() - origin.getTime());
	var days = difference/(24*3600000);
	return days % 3;
}
