var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array;
    newArray[2] = _array[2] + 1;
    
    // Don't delete this line!
    return newArray;
};

console.log(incrementLastArrayElement(sampleArray));

function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);							// make a copy of _array.
    var lastNumber = newArray.pop();					// .pop returns and removes the last element of the array.
    newArray.push(lastNumber + 1);						// .push adds an element to the end of array & increase the number by 1.
    return newArray;										
}
console.log(incrementLastArrayElement(sampleArray));
//---------------------------------------------------------------------------------------
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
	var whiteSpace = oldName.indexOf(' ');
    var firstName = oldName.slice(0,whiteSpace);
	var lastName = oldName.slice(whiteSpace).toUpperCase();
	firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
	finalName = firstName.concat(lastName);
    
	return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));