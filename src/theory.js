//Theory for JavaScript (Theory.js)
//Copyright (c) 2013 Jeremy Fonte
//Version 0.1.2
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



////////////////////////
//Set theory functions//
////////////////////////

//Determines if all values in an array are unique
//
//in: one numerical array
//out: true/false if all values are unique
var isUnique = function(a) {
	var al = a.length;
	var isU = true;
	
	//loop through all items and check if the index is different from the last index
	//if it is, there are duplicates in the array
	for(var i = 0; i < al; i++) {
		if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
			isU = false;
			break;	
		}
	}
	
	return isU;
}

//Makes an array only have unique values, removing duplicates
//
//in: an array to make all values unique in
//out: returns an array with all values unique
var makeUnique = function(a) {
	var al = a.length;
	var arrOut = new Array();
	
	for(var i = 0; i < al; i++) {
		if(arrOut.indexOf(a[i]) === -1) {
			arrOut.push(a[i]);	
		}
	}
	return arrOut;
}

//calculates the intersection of two numerical sets (arrays)
//currently permits duplicate items in one array
//
//in: Takes two numerical arrays
//out: returns one array of the intersection of the two arrays - unique values
var intersect = function(a, b) {
	
	var outArr = new Array();
	var al = a.length;
	var bl = b.length;

	//loop through all elements of array "a"
	//if found in array "b", add to the results array
	for(var i = 0; i < al; i++) {
		if( b.indexOf(a[i]) !== -1) {
			outArr.push(a[i]);	
		}
	}
	
	return outArr;
}

//Union of two sets (arrays)
//
//in: two arrays to compute the union of
//out: the unique values in one, the other, or both arrays

var setUnion = function(a, b) {
	var outArr = new Array();

	outArr = a.concat(b);
	outArr = makeUnique(outArr);
	
	return outArr;
}

//Cartesian product of two sets (arrays)
//Every element in a is paired with every element in b
//
//in: two arrays (sets)
//out: Cartesian product of the two sets

var cartesian = function(a, b) {
	var outArr = new Array();
	
	al = a.length;
	bl = b.length;
	
	for(var n = 0; n < al; n++) {
		for(var i = 0; i < bl; i++) {
			outArr.push([a[n], b[i]]);	
		}
	}
	
	return outArr;
}

//isSubset - whether a is a subset of b
//
//in:   a = possible subset
//      b = possibly same set or superset of a
//out:  true/false if a is a subset of b
var isSubset = function(a, b) {
	al = a.length;
	bl = b.length;
	
	if(al > bl) {
		return false;	
	}
	else {
		for(var i = 0; i < al; i++) {
			if(b.indexOf(a[i]) === -1) {
				return false;	
			}
		}
		
		return true;
	}
}

//isProperSubset
//
//in:  a = possible subset of b
//     b = any set
//out: true/false is a is a proper subset of b
var isProperSubset = function(a, b) {
	al = a.length;
	bl = b.length;
	
	if(al >= bl) {
		return false;	
	}
	else {	
		return isSubset(a, b);
	}
	
}

//isDisjoint - returns if a and b are disjoint sets
//
//in:   a = set 1
//      b = set 2
//out:  true/false is a and b are disjoint sets
var isDisjoint = function(a, b) {
	al = a.length;
	bl = b.length;
	
	for(var i = 0; i < al; i++) {
		if(a.indexOf(b[i]) !== -1) {
			return false;	
		}
	}
	return true;
}

//setDiff - returns the set difference from a to b
//
//in:	a = set to calculate difference to b
//		b = set 2
//out:	set difference of a to b
var setDiff = function(a, b) {
	var outArr = new Array();
	var al = a.length;
	
	for(var i = 0; i < al; i++) {
		if(b.indexOf(a[i]) === -1) {
			outArr.push(a[i]);	
		}
	}

	return outArr;
}

//complement - returns set difference of a to b where b is a subset of a
//
//in:	a = set to compute difference of
//		b = subset of a
//out:	if b is not a subset of a, null.  Otherwise, set difference of a to b
var complement = function(a, b) {
	if(!isSubset(b, a)) {
		return null;
	}
	else {
		return setDiff(a, b);	
	}
}

//Symmetric difference - items in either a or b but not both
//
//in:	a = set one
//		b = set two
//out:	items in a or b but not both
var symDiff = function(a, b) {
	return setDiff(setUnion(a, b), intersect(a, b));
}


//////////////////
//Core functions//
//////////////////

//Sequence generator
//
//in: seedArr = starting values of sequence, as an array
//    size = total size of the sequence returned, including the seed
//    seqFunc = function to create the next value from the preceding value - must return a number
//              the entire array of current results is sent to this function on each loop through
//out: the generated sequence
var sequence = function(seedArr, size, seqFunc) {
	var outArr = new Array();
	
	var saLen = seedArr.length;
	
	for(var i = 0; i < saLen; i++) {
		outArr[i] = seedArr[i];
	}
	
	for(var i = saLen; i < size; i++) {
		outArr[i] = seqFunc(outArr);
	}
	
	return outArr;
}

//Reduce - perform a function to combine the values in a list into a single value
//
//in:  list = the list to reduce
//     reduceFunc = the function that condenses the list, arguments "item" and "total"
//out: total of the values derived from the list
var reduce = function(list, reduceFunc) {
	var ll = list.length;
	var total = list[0];
	
	for(var i = 1; i < ll; i++) {
		total = reduceFunc(list[i], total);
	}
	
	return total;
}

/////////////////
/////////////////
//Number Theory//
/////////////////
/////////////////

//factors - find the factors of a given number
//
//in: num = the number to factor
//out: a list of prime factors
var factors = function(num) {
	var factorList = new Array();
	var prime = false;
	var endFactor = false;
	
	for(var x = 2; x < num; x++) {
		if(num % x === 0) {
			prime = true;
			for(var n = 0; n < factorList.length; n++) {
				if(x % factorList[n] === 0) {
					prime = false;
					break;
				}
			}
			
			if(prime) {
				factorList.push(x);				
			}
		}
	}
	return factorList;
}

//factorize - find the factors and their powers for a number
//
//in:  num = number to factorize
//out: factors and their powers
var factorize = function(num) {
	var factorList = factors(num);
	var flLen = factorList.length;
	
	var powerList = new Array();
	
	for(var n = 0; n < flLen; n++) {
		powerList.push(0);	
	}
	
	var currentNum = num;
	
	var done = false;
	
	while(!done) {
		for(var n = 0; n < flLen; n++) {
			if(currentNum % factorList[n] === 0) {
				powerList[n]++;
				currentNum = currentNum / factorList[n];	
			}
		}
		if(currentNum === 1) {
			done = true;
		}
	}
	
	var mixList = new Array()
	
	for(var n = 0; n < flLen; n++) {
		mixList.push([factorList[n]], [powerList[n]]);
	}
	
	return mixList;
}

//GCD - calculates the greatest common divisor for two numbers
//
//in:	a = number 1
//    	b = number 2
//out:  GCD for a and b
var GCD = function(a, b) {
	var noRemainder = false;
	var divRight;
	var remainder;
	
	while(!noRemainder) {
		if(a > b) {	
			divRight = Math.floor(a / b);
			remainder = a % b;
			if(remainder !== 0) {
				a = b;
				b = remainder;	
			}
			else {
				noRemainder = true;	
			}
		}
		else if (b > a) {
			divRight = Math.floor(b / a);
			remainder = b % a;
			if(remainder !== 0) {
				b = a;
				a = remainder;	
			}
			else {
				noRemainder = true;
			}
		}
	}
	
	return b > a ? a : b;
}

//LCM - least common multiple
//
//in:	a = number one
//		b = number two
//out:	least common multiple of a and b
var LCM = function(a, b) {
	return (a * b) / GCD(a, b);	
}




/////////////////
//Combinatorics//
/////////////////

//Fibonacci sequence
//
//in: size = number of elements of the sequence to return
//out: a Fibonacci sequence
var fib = function(size) {
	var result = sequence([1, 1], size, function(a) {
		var al = a.length;

		return a[al - 1] + a[al - 2];
		
	});
	
	return result;
}

//Factorial function
//
//in: num = integer to compute factorial for
//out: result of factorial computation
var factorial = function(num) {
	var range = sequence([1], num, function(a) {
		al = a.length;
		
		return a[al - 1] + 1;
	});

	var result = reduce(range, function(i, total) {
		return total * i;
	});
	
	return result;
}

//Partial Permutation
//
//in:   k = number of selected items
//      n = number of items
//out:  partial permutations (ordering matters)

var partialPerm = function(k, n) {
	return k > n ? 0 : factorial(n) / factorial(n - k);
}

//Combination
//
//in:   k = number of selected items
//      n = number of items
//out:  combinations (ordering doesn't matter)

var combination = function(k, n) {
	return k > n ? 0 : factorial(n) / (factorial(k) * factorial(n - k));
}

////////////////////
//Abstract Algebra//
////////////////////

//isFiniteGroup - checks if the set, operation, and identity define a finite group
//
//in:   set = elements in the group
//		operation = binary operation on elements of the set
//		identity = identity element, where a binary operation on identity and any
//					other element results in the same value
//out:  true/false
var isFiniteGroup = function(set, operation, identity) {
	var sl = set.length;
	
	//binary operation
	for(var n = 0; n < sl; n++) {
		for(var i = 0; i < sl; i++) {
			if(set.indexOf(operation(set[n], set[i])) === -1) {
				return false;
			}
		}
	}
	
	//identity
	for(var n = 0; n < sl; n++) {
		if(operation(set[n], identity) !== set[n]) {
			return false;	
		}
	}
	
	//associativity
	for(var n = 0; n < sl; n++) {
		for(var i = 0; i < sl; i++) {
			for(var m = 0; m < sl; m++) {
				if(	operation(set[n], operation(set[i], set[m]))
					!==
					operation(operation(set[n], set[i]), set[m])) {
					return false;		
				}
			}
		}
	}
	
	//inverse
	var foundInv = false;
	for(var n = 0; n < sl; n++) {
		for(var i = 0; i < sl; i++) {
			if(operation(set[n], set[i]) === operation(set[i], set[n])) {
				foundInv = true;	
			}
		}
		if(foundInv === false) {
			return false;	
		}
		foundInv = false;
	}
	return true;
}


//isAbelian - tests if a possible group is an Abelian group
//
//in:   set = elements in the group
//		operation = binary operation on elements of the set
//		identity = identity element, where a binary operation on identity and any
//					other element results in the same value
//out:	true/false if the set is an Abelian group

var isAbelian = function(set, operation, identity) {
	var sl = set.length;
	
	if(!isFiniteGroup(set, operation, identity)) {
		return false;	
	}
	
	for(var i = 0; i < sl; i++) {
		for(var n = i; n < sl; n++) {
			if(operation(set[i], set[n]) !== operation(set[n], set[i])) {
				return false;	
			}
		}
	}
	
	return true;
}

//isFiniteSubgroup - determines if a subset of a group is a subgroup
//
//in:	set = elements of a group
//		operation = closed binary operation on the group
//		identity = identity element, where a binary operation on identity and any
//					other element results in the same value
//		subset = a subset of the group's set of elements
//out:	true/false if the subset is a subgroup
var isFiniteSubgroup = function(set, operation, identity, subset) {
	if(!isFiniteGroup(set, operation, identity)) {
		return false;	
	}
	
	var ssl = subset.length;
	
	for(var n = 0; n < ssl; n++) {
		if(set.indexOf(subset[n]) === -1) {
			return false;
		}
	}
	
	for(var n = 0; n < ssl; n++) {
		for(var i = n; i < ssl; i++) {
			if(subset.indexOf(operation(subset[n], subset[i])) === -1) {
				return false;	
			}
		}
	}
	
	return true;
}


//groupCenter - computes the center of a group
//				(all elements of the group where ab = ba)
//
//in:	set = elements of a group
//		operation = closed binary operation on the group
//		identity = identity element, where a binary operation on identity and any
//					other element results in the same value
//out:	The center of the group

var groupCenter = function(set, operation, identity) {
	if(!isFiniteGroup(set, operation, identity)) {
		return null;	
	}
	
	var sl = set.length;
	var center = new Array();
	
	var inCenter = true;
	for(var n = 0; n < sl; n++) {
		for(var i = 0; i < sl; i++) {
			if(operation(set[n], set[i]) !== operation(set[i], set[n])) {
				inCenter = false;	
			}
		}
		if(inCenter) {
			center.push(set[n]);
		}
		inCenter = true;
	}
	
	return center;
}


//centralizer - returns the elements that commute with the passed in element
//
//in:	set = elements of a group
//		operation = closed binary operation on the group
//		identity = identity element, where a binary operation on identity and any
//					other element results in the same value
//		elem = element to find centralizer set for
//out:  returns the centralizer set for the element

var centralizer = function(set, operation, identity, elem) {
	if(!isFiniteGroup(set, operation, identity)) {
		return null;	
	}
	
	if(set.indexOf(elem) === -1) {
		return null;	
	}
	
	var sl = set.length;
	var commuteSet = new Array();
	
	for(var n = 0; n < sl; n++) {
		if(operation(elem, set[n]) === operation(set[n], elem)) {
			commuteSet.push(set[n]);	
		}
	}
	
	return commuteSet;
}

//operationExp - turns addition into multiplication, multiplication into exponential
//
//in:	operation = a binary operation
//		elem = starting element, change on recursion
//		startElem = starting element, doesn't change
//		power = power of the calculation
//
//out:	the computed result
var operationExp = function(operation, elem, startElem, power) {
	var result = elem;
	
	if(elem === startElem) {
		if(power === 1) {
			return elem;	
		}
		else {
			power--;
		}
	}
	
	for(var i = 1; i < startElem; i++) {
		result = operation(startElem, elem);
	}
	
	return power === 1 ? result : operationExp(operation, result, startElem, power - 1);
}

//orderOfElem - determines the order of an element in a group (distance to the identity)
//
//in:		set: set of the group
//			operation: closed binary operation on the group's elements
//			identity: number by which any other element in the set combines with and the result is
//			the other element
//			elem: the element to determine the order of
//out:		order of the element
var orderOfElem = function(set, operation, identity, elem) {
	var result = elem;
	var power = 0;
	
	while(result !== identity) {
		power++;
		result = operationExp(operation, elem, elem, power);
	}
	
	return power;
}


//cyclicSubgroup - a cyclic subgroup generated from an element in the parent group
//
//in:		set: set of the group
//			operation: closed binary operation on the group's elements
//			identity: number by which any other element in the set combines with and the result is
//			the other element
//			elem: the element that generates the cyclic subgroup
//out:		the resulting cyclic subgroup
var cyclicSubgroup = function(set, operation, identity, elem) {
	if(set.indexOf(elem) === -1) {
		return null;	
	}
	
	var cyclic = new Array();
	var power = 1;
	var result = elem;
	
	while(power === 1 || result !== elem) {
		cyclic.push(result);
		power++;
		result = operationExp(operation, elem, elem, power);
	}
	
	return cyclic;
}

//////////////
//Statistics//
//////////////

//mean - calculates the average (mean) of the numbers in the provided list
//
//in: list - array of numbers to calculate the mean
//
//out: the average (mean) of the provided numbers
var mean = function(list) {
  var total = reduce(list, function(i, total) {return i + total});
  var len = list.length;
  
  return total / len;
}


//median - calculates the median of the provided list
//
//in: list - array of numbers to calculate the median of
//
//out: the median of the provided numbers
var median = function(list) {
  list.sort(function(a, b) { return a - b });
  
  var len = list.length;
  if(len === 0) {
    return null;  
  }
  if(len === 1) {
    return list[0]; 
  }
  
  var medianIndex = (len + 1) / 2
  if(len % 2 === 1) {
    //-1 because of 0-based array index
    return list[medianIndex - 1];  
  }
  else {
    //1 less than it seems like it should be because of zero-based index
    return (list[medianIndex - 1.5] + list[medianIndex - .5]) / 2 
  }
}

//mode - Calculates the mode of the provided list - can be more than one mode
//
//in: list to calculate the mode of
//
//out: the mode of the list
var mode = function(list) {
  var listLen = list.length;
  
  var uniqList = makeUnique(list);
  var uniqListLen = uniqList.length;
  
  var modeList = new Array();
  
  for(var i = 0; i < uniqListLen; i++) {
    var count = 0;
    for(var n = 0; n < listLen; n++) {
      if(uniqList[i] === list[n]) {
        count++;
      }
    }
    modeList.push(count);
  
  }
  
  var highestVal = 0;
  for(var i = 0; i < modeList.length; i++) {
    
    if(modeList[i] > highestVal) {
      highestVal = modeList[i];
    }
  }
  
  var indexModes = new Array();
  for(var i = 0; i < modeList.length; i++) {
    if(modeList[i] === highestVal) {
      indexModes.push(i); 
    }
  }
  
    var modeValues = new Array();
    for(var n = 0; n < indexModes.length; n++) {
      modeValues.push(uniqList[indexModes[n]]); 
    }
    return modeValues;
  //}
}

//max - returns the highest valued number in the list
//
//in: list to determinet the maximum value of
//
//out: the maximum value in the list
var max = function(list) {
  var maxVal = list[0];
  var listLen = list.length;
 
  for(var i = 1; i < listLen; i++) {
    if(list[i] > maxVal) {
      maxVal = list[i];
    }
  }
  
  return maxVal;
}

//min - returns the smallest value in the list
//
//in: the list to find the minimum value of
//
//out: the minimum value of the list
var min = function(list) {
  var minVal = list[0];
  var listLen = list.length;
 
  for(var i = 1; i < listLen; i++) {
    if(list[i] < minVal) {
      minVal = list[i];
    }
  }
  
  return minVal;
}

//range - the range between the lowest and highest values in the list
//
//in: list to calculate the range of
//
//out: the range of the values in the list
var range = function(list) {
  return max(list) - min(list); 
}

//quartiles - returns Q1 and Q3 in the data set
//
//in: list to find the quartiles of
//
//out: Q1 and Q3 of the data set
var quartiles = function(list) {
  list.sort(function(a, b) { return a - b });
  
  theMedian = median(list);
  
  len = list.length;


  if(len === 0) {
    return null;  
  }
  if(len === 1) {
    return list[0]; 
  }
  
  var medianIndex = ((len + 1) / 2) - 1;
  
  var leftOfMed = new Array();
  var rightOfMed = new Array();
  
  rightOfMed.push(theMedian);
  
  for(var i = 0; i < len; i++) {
    if(i < medianIndex) {
      leftOfMed.push(list[i]);
    }
    else if(i > medianIndex) {
      rightOfMed.push(list[i]);
    }
  }
  
  leftOfMed.push(theMedian);
  
  var Q1 = median(leftOfMed);
  var Q3 = median(rightOfMed);
  
  var quartilesVal = [Q1, Q3];
  
  return quartilesVal;
}

//IQR - Interquartile Range - the range from Q1 to Q3
//
//in: list to find the IQR in
//
//out: the IQR of the provided list
var IQR = function(list) {
  var quartilesVal = quartiles(list);
  IQRVal = range(quartilesVal);
  
  return IQRVal;
}

//outliers - returns the elements of the list that are outliers, 1.5 * IQR beyond Q1 or Q3
//
//in: the list to find outliers in
//
//out: returns the outliers, if any, in the provided list
var outliers = function(list) {
  var IQRVal = IQR(list);
  
  var quartilesVal = quartiles(list);
  
  var len = list.length;
  var outlierVal = IQRVal * 1.5;
  
  var lowOutlier = min(quartilesVal) - outlierVal;
  var highOutlier = max(quartilesVal) + outlierVal;
  
  outlierList = new Array();
  
  for(var i = 0; i < len; i++) {
    if(list[i] < lowOutlier || list[i] > highOutlier) {
      outlierList.push(list[i]);
    }
  }
  
  return outlierList;
}

//variance - returns the step before the standard deviation, with units squared
//
//in: list to calculate the variance of
//
//out: the variance for the list
var variance = function(list) {
  var theMean = mean(list);
  var len = list.length;
  var devArray = new Array();
  
  
  for(var i = 0; i < len; i++) {
     devArray.push(Math.pow(list[i] - theMean, 2));
  }
  
  var sum = reduce(devArray, function(i, total) {return i + total});
  var result = sum / (len - 1);
  
  return result;
}

//stdDeviation - returns the standard deviation of the provided list, best for symmetric distributions
//
//in: list to calculate the standard deviation of
//
//out: standard deviation of the list elements
var stdDeviation = function(list) {
  var varianceVal = variance(list);
  
  return Math.sqrt(varianceVal);
}