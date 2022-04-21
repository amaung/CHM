function WhatIsTodaysCardinalAttribute()
{
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = new Date(mm + '/' + dd + '/' + yyyy);
	
	var origin = new Date('05/14/2022');
	var difference = today.getTime() - origin.getTime();
	var days = difference/(24*3600000);
	// for negatives days subtract from a fixed day(30)
	// to get a positive day accurately
    if (days < 0) days = 30 + days;
	return days % 3;
}
