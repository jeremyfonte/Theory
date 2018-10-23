$(document).ready(function() {
	
	//set theory
	testUnique();
	testIntersect();
	testMakeUnique();
	testSetUnion();
	testCartesian();
	testIsSubset();
	testIsProperSubset();
	testIsDisjoint();
	testSetDiff();
	testComplement();
	testSymDiff();
	
	//combinatorics
	testFib();
	testFactorial();
	testPartialPerm();
	testCombination();
	
	//number theory
	testFactors();
	testFactorize();
	testGCD();
	testLCM();
	
	//abstract algebra
	testIsFiniteGroup();
	testIsAbelian();
	testOperationExp();
	testOrderOfElem();
	testCyclicSubgroup();
	testIsFiniteSubgroup()
	testGroupCenter();
	testCentralizer();
	
	//statistics
	testMean();
	testMedian();
	testMode();
	testMax();
	testMin();
	testRange();
	testQuartiles();
	testIQR();
	testOutliers();
	testVariance();
	testStdDeviation();
	
	function testUnique() {
		$('div#test1').append('<h4>Tests for isUnique()</h4>');
		//test for a false result from isUnique
		var testUniqueArr = [1, 2, 3, 3, 5];
		var testUniqueResult = isUnique(testUniqueArr);
		$('div#test1').append('<p>Test unique Array false #1: ' + testUniqueResult + '</p>');
		//ditto
		var testUniqueArr2 = [1, 8, 10, 5, 8];
		var testUniqueResult2 = isUnique(testUniqueArr2);
		$('div#test1').append('<p>Test unique Array false #2: ' + testUniqueResult2 + '</p>');
	
		//test for a true result from isUnique
		var testUniqueTrueArr = [1, 3, 5, 7, 9];
		var testUniqueTrueResult = isUnique(testUniqueTrueArr);
		$('div#test1').append('<p>Test unique Array true #1: ' + testUniqueTrueResult + '</p>');
	
		//test for a true result from isUnique
		var testUniqueTrueArr2 = [1, 2, 4, 8, 16, 32, 64, 128, 256];
		var testUniqueTrueResult2 = isUnique(testUniqueTrueArr2);
		$('div#test1').append('<p>Test unique Array true #2: ' + testUniqueTrueResult2 + '</p>');
	
	}//end of test unique
	
	
	function testIntersect() {
		var ArrA = [1, 2, 3, 4, 5, 6, 7, 8];
		var ArrB = [1, 2, 4, 8, 16, 32];
		
		var interResult = intersect(ArrA, ArrB);
		
		$('div#test2').append('<h4>Tests for intersect()</h4>');
		
		$('div#test2').append('Array 1: [1, 2, 3, 4, 5, 6, 7, 8]<br>');
		$('div#test2').append('Array 2: [1, 2, 4, 8, 16, 32]<br>');		
		$('div#test2').append('<p>Test intersection #1: ' + interResult + '</p>');
	}
	
	function testMakeUnique() {
		
		$('div#test3').append('<h4>Tests for makeUnique()</h4>');
		
		var Arr1 = [1, 2, 3, 4, 5];
		
		var muResult1 = makeUnique(Arr1);
		$('div#test3').append('Array: [1, 2, 3, 4, 5]');
		$('div#test3').append('<p>' + muResult1 + '</p>');
		
		var Arr2 = [1, 1, 2, 2, 3, 4, 4, 4, 5];
		
		var muResult2 = makeUnique(Arr2);
		$('div#test3').append('Array: [1, 1, 2, 2, 3, 4, 4, 4, 5]');
		$('div#test3').append('<p>' + muResult2 + '</p>');
		
	}
	
	function testSetUnion() {
		$('div#test4').append('<h4>Tests for setUnion()</h4>');
		
		var Arr1 = [1, 2, 2, 3, 3, 4];
		var Arr2 = [1, 2, 4, 4, 8];
		
		var uResult1 = setUnion(Arr1, Arr2);
		$('div#test4').append('Array 1: [1, 2, 2, 3, 3, 4]<br>');
		$('div#test4').append('Array 2: [1, 2, 4, 4, 8]');
		$('div#test4').append('<p>' + uResult1 + '</p>');	
	}
	
	function testCartesian() {
		$('div#test5').append('<h4>Tests for cartesian()</h4>');
		
		var Arr1 = [1, 2, 3, 4];
		var Arr2 = [8, 16, 32, 64];
		
		var cResult = cartesian(Arr1, Arr2);
		$('div#test5').append('Array 1: [1, 2, 3, 4]');
		$('div#test5').append('Array 2: [8, 16, 32, 64]');
		$('div#test5').append('<p>' + cResult + '</p>');
		$('div#test5').append('note: nested arrays above not displayed with brackets');
	}
	
	function testIsSubset() {
		$('div#test10').append('<h4>Tests for isSubset()</h4>');
		
		var Arr1 = [1, 2, 3, 4, 5];
		var Arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
		
		var issResult1 = isSubset(Arr1, Arr2);
		$('div#test10').append('Array 1: [1, 2, 3, 4, 5]<br>');
		$('div#test10').append('Array 2: [1, 2, 3, 4, 5, 6, 7, 8]');
		$('div#test10').append('<p>' + issResult1 + '</p>');
		
		var Arr3 = [1, 2, 4, 8, 16, 32];
		var Arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
		var issResult2 = isSubset(Arr3, Arr4);
		$('div#test10').append('Array 1: [1, 2, 4, 8, 16, 32]<br>');
		$('div#test10').append('Array 2: [1, 2, 3, 4, 5, 6, 7, 8]');
		$('div#test10').append('<p>' + issResult2 + '</p>');
		
		var Arr5 = [1, 2, 4, 8, 16, 32];
		var Arr6 = [1, 2, 4, 8, 16, 32];
		var issResult3 = isSubset(Arr5, Arr6);
		$('div#test10').append('Array 1: [1, 2, 4, 8, 16, 32]<br>');
		$('div#test10').append('Array 2: [1, 2, 4, 8, 16, 32]');
		$('div#test10').append('<p>' + issResult3 + '</p>');
	}
	
	function testIsProperSubset() {
		$('div#test11').append('<h4>Tests for isProperSubset()</h4>');
		
		var Arr1 = [1, 2, 3, 4, 5];
		var Arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
		
		var ipssResult1 = isProperSubset(Arr1, Arr2);
		$('div#test11').append('Array 1: [1, 2, 3, 4, 5]<br>');
		$('div#test11').append('Array 2: [1, 2, 3, 4, 5, 6, 7, 8]');
		$('div#test11').append('<p>' + ipssResult1 + '</p>');
		
		var Arr3 = [1, 2, 4, 8, 16, 32];
		var Arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
		var ipssResult2 = isProperSubset(Arr3, Arr4);
		$('div#test11').append('Array 1: [1, 2, 4, 8, 16, 32]<br>');
		$('div#test11').append('Array 2: [1, 2, 3, 4, 5, 6, 7, 8]');
		$('div#test11').append('<p>' + ipssResult2 + '</p>');

		var Arr5 = [1, 2, 4, 8, 16, 32];
		var Arr6 = [1, 2, 4, 8, 16, 32];
		var ipssResult3 = isProperSubset(Arr5, Arr6);
		$('div#test11').append('Array 1: [1, 2, 4, 8, 16, 32]<br>');
		$('div#test11').append('Array 2: [1, 2, 4, 8, 16, 32]');
		$('div#test11').append('<p>' + ipssResult3 + '</p>');
	}
	
	function testIsDisjoint() {
		$('div#test12').append('<h4>Tests for isDisjoint()</h4>');
		
		var Arr1 = [1, 2, 3, 4, 5];
		var Arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
		
		var idResult1 = isDisjoint(Arr1, Arr2);
		$('div#test12').append('Array 1: [1, 2, 3, 4, 5]<br>');
		$('div#test12').append('Array 2: [1, 2, 3, 4, 5, 6, 7, 8]');
		$('div#test12').append('<p>' + idResult1 + '</p>');

		var Arr3 = [1, 2, 3, 4, 5];
		var Arr4 = [6, 7, 8, 9];
		
		var idResult2 = isDisjoint(Arr3, Arr4);
		$('div#test12').append('Array 1: [1, 2, 3, 4, 5]<br>');
		$('div#test12').append('Array 2: [6, 7, 8, 9]');
		$('div#test12').append('<p>' + idResult2 + '</p>');

	}
	
	
	function testSetDiff() {
		$('div#test13').append('<h4>Tests for setDiff()</h4>');
		
		var Arr1 = [1, 2, 4, 8, 16];
		var Arr2 = [1, 2, 3, 4, 5];
		
		var sdResult1 = setDiff(Arr1, Arr2);
		$('div#test13').append('Array 1: [1, 2, 4, 8, 16]<br>');
		$('div#test13').append('Array 2: [1, 2, 3, 4, 5]');
		$('div#test13').append('<p>' + sdResult1 + '</p>');
		
		var Arr3 = [1, 2, 4, 8, 16];
		var Arr4 = [3, 5, 8, 13, 21];
		
		var sdResult2 = setDiff(Arr3, Arr4);
		$('div#test13').append('Array 1: [1, 2, 4, 8, 16]<br>');
		$('div#test13').append('Array 2: [3, 5, 8, 13, 21]');
		$('div#test13').append('<p>' + sdResult2 + '</p>');
		
		var Arr5 = [1, 2, 4, 8, 16];
		var Arr6 = [1, 2, 4, 8, 16, 32, 64, 128];
		
		var sdResult3 = setDiff(Arr5, Arr6);
		$('div#test13').append('Array 1: [1, 2, 4, 8, 16]<br>');
		$('div#test13').append('Array 2: [1, 2, 4, 8, 16, 32, 64, 128]');
		$('div#test13').append('<p>' + sdResult3 + '</p>');

		var Arr7 = [1, 2, 3, 4];
		var Arr8 = [1, 2, 3, 4];
		
		var sdResult4 = setDiff(Arr7, Arr8);
		$('div#test13').append('Array 1: [1, 2, 3, 4]<br>');
		$('div#test13').append('Array 2: [1, 2, 3, 4]');
		$('div#test13').append('<p>' + sdResult4 + '</p>');


	}
	
	function testComplement() {
		$('div#test14').append('<h4>Tests for complement()</h4>');
		
		var Arr1 = [1, 2, 4, 8, 16];
		var Arr2 = [1, 2, 3, 4, 5];
		
		var cResult1 = complement(Arr1, Arr2);
		$('div#test14').append('Array 1: [1, 2, 4, 8, 16]<br>');
		$('div#test14').append('Array 2: [1, 2, 3, 4, 5]');
		$('div#test14').append('<p>' + cResult1 + '</p>');
		
		var Arr3 = [1, 2, 4, 8, 16];
		var Arr4 = [1, 2, 4];
		
		var cResult2 = complement(Arr3, Arr4);
		$('div#test14').append('Array 1: [1, 2, 4, 8, 16]<br>');
		$('div#test14').append('Array 2: [1, 2, 4]');
		$('div#test14').append('<p>' + cResult2 + '</p>');

		var Arr5 = [1, 2, 4, 8, 16];
		var Arr6 = [1, 2, 4, 8, 16];
		
		var cResult3 = complement(Arr5, Arr6);
		$('div#test14').append('Array 1: [1, 2, 4, 8, 16]<br>');
		$('div#test14').append('Array 2: [1, 2, 4, 8, 16]');
		$('div#test14').append('<p>' + cResult3 + '</p>');
				
	}
	
	function testSymDiff() {
		$('div#test15').append('<h4>Tests for symDiff()</h4>');
		
		var Arr1 = [1, 2, 4, 8, 16];
		var Arr2 = [1, 2, 3, 4, 5];
		
		var sdResult1 = symDiff(Arr1, Arr2);
		$('div#test15').append('Array 1: [1, 2, 4, 8, 16]<br>');
		$('div#test15').append('Array 2: [1, 2, 3, 4, 5]');
		$('div#test15').append('<p>' + sdResult1 + '</p>');
		
	}
	
	
	function testFib() {
		$('div#test6').append('<h4>Tests for fib()</h4>');
		$('div#test6').append('Fibonacci, 5 numbers');
		var fibResult1 = fib(5);
		$('div#test6').append('<p>' + fibResult1 + '</p>');
		
		$('div#test6').append('Fibonacci, 20 numbers');
		var fibResult2 = fib(20);
		$('div#test6').append('<p>' + fibResult2 + '</p>');
	}
	
	function testFactorial() {
		$('div#test7').append('<h4>Tests for factorial()</h4>');
		$('div#test7').append('Factorial, number 5');
		var factResult1 = factorial(5);
		$('div#test7').append('<p>' + factResult1 + '</p>');
		
		$('div#test7').append('Factorial, number 10');
		var factResult2 = factorial(10);
		$('div#test7').append('<p>' + factResult2 + '</p>');
	}
	
	function testPartialPerm() {
		$('div#test8').append('<h4>Tests for partialPerm()</h4>');
		$('div#test8').append('5 objects, 3 selected');
		var ppResult1 = partialPerm(3, 5);
		$('div#test8').append('<p>' + ppResult1 + '</p>');
		$('div#test8').append('10 objects, 6 selected');
		var ppResult2 = partialPerm(6, 10);
		$('div#test8').append('<p>' + ppResult2 + '</p>');
		$('div#test8').append('5 objects, 8 selected');
		var ppResult3 = partialPerm(8, 5);
		$('div#test8').append('<p>' + ppResult3 + '</p>');
	}
	
	function testCombination() {
		$('div#test9').append('<h4>Tests for combination()</h4>');
		$('div#test9').append('5 objects, 3 selected');
		var cResult1 = combination(3, 5);
		$('div#test9').append('<p>' + cResult1 + '</p>');
		$('div#test9').append('10 objects, 6 selected');
		var cResult2 = combination(6, 10);
		$('div#test9').append('<p>' + cResult2 + '</p>');
		$('div#test9').append('5 objects, 8 selected');
		var cResult3 = combination(8, 5);
		$('div#test9').append('<p>' + cResult3 + '</p>');
	}
	
	function testFactors() {
		$('div#test16').append('<h4>Tests for factors()</h4>');
		$('div#test16').append('factors of 28');
		var fResult1 = factors(28);
		$('div#test16').append('<p>' + fResult1 + '</p>');	
		$('div#test16').append('factors of 72');
		var fResult2 = factors(72);
		$('div#test16').append('<p>' + fResult2 + '</p>');	
		$('div#test16').append('factors of 437');
		var fResult3 = factors(437);
		$('div#test16').append('<p>' + fResult3 + '</p>');	
	}
	
	function testFactorize() {
		$('div#test17').append('<h4>Tests for factorize()</h4>');
		$('div#test17').append('factorize 28');
		var fResult1 = factorize(28);
		$('div#test17').append('<p>' + fResult1 + '</p>');
		$('div#test17').append('factorize 437');
		var fResult2 = factorize(437);
		$('div#test17').append('<p>' + fResult2 + '</p>');	
		$('div#test17').append('factorize 10924757');
		var fResult3 = factorize(10924757);
		$('div#test17').append('<p>' + fResult3 + '</p>');	
	
	}
	
	function testGCD() {
		$('div#test18').append('<h4>Tests for GCD()</h4>');
		$('div#test18').append('GCD of 2124 and 54');
		var gResult1 = GCD(2124, 54);
		$('div#test18').append('<p>' + gResult1 + '</p>');
		$('div#test18').append('GCD of 4400 and 84');
		var gResult2 = GCD(4400, 84);
		$('div#test18').append('<p>' + gResult2 + '</p>');
	}
	
	function testLCM() {
		$('div#test19').append('<h4>Tests for LCM()</h4>');
		$('div#test19').append('LCM of 8 and 42');
		var lResult1 = LCM(8, 42);
		$('div#test19').append('<p>' + lResult1 + '</p>');
		$('div#test19').append('LCM of 34 and 10');
		var lResult2 = LCM(34, 10);
		$('div#test19').append('<p>' + lResult2 + '</p>');
	}
	
	function testIsFiniteGroup() {
		$('div#test20').append('<h4>Tests for isFiniteGroup()');
		$('div#test20').append('N10 - 0 to 9, mod 10 addition');
		var ifgSet1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		ifgResult1 = isFiniteGroup(ifgSet1, function(a, b) { return (a + b) % 10; }, 0);
		$('div#test20').append('<p>' + ifgResult1 + '</p>');
		$('div#test20').append('First six Fibonacci numbers, including 0, mod 10 addition');
		var ifgSet2 = [0, 1, 1, 2, 3, 5];
		ifgResult2 = isFiniteGroup(ifgSet2, function(a, b) { return (a + b) % 10; }, 0);
		$('div#test20').append('<p>' + ifgResult2 + '</p>');	
		$('div#test20').append('1 to 6, mod 7 multiplication');
		var ifgSet3 = [1, 2, 3, 4, 5, 6];
		ifgResult3 = isFiniteGroup(ifgSet3, function(a, b) { return (a * b) % 7; }, 1);
		$('div#test20').append('<p>' + ifgResult3 + '</p>');
		$('div#test20').append('1 to 6, mod 14 multiplication');	
		var ifgSet4 = [1, 2, 3, 4, 5, 6];
		ifgResult4 = isFiniteGroup(ifgSet4, function(a, b) { return (a * b) % 14; }, 1);
		$('div#test20').append('<p>' + ifgResult4 + '</p>');	
	}


	function testIsAbelian() {
		$('div#test21').append('<h4>Tests for isAbelian()');
		$('div#test21').append('N10 - 0 to 9, mod 10 addition');
		var iaSet1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		iaResult1 = isAbelian(iaSet1, function(a, b) { return (a + b) % 10; }, 0);
		$('div#test21').append('<p>' + iaResult1 + '</p>');
		
	}
	
	function testOperationExp() {
		$('div#test22').append('<h4>Tests for operationExp()</h4>')
		$('div#test22').append('addition operation, element 5, power 4');
		var oeResult1 = operationExp(function(a, b) {
			return a + b;
		}, 5, 5, 4);
		$('div#test22').append('<p>' + oeResult1 + '</p>');
		$('div#test22').append('multiplication operation, element 5, power 2');
		var oeResult2 = operationExp(function(a, b) {
			return a * b;
		}, 5, 5, 2);
		$('div#test22').append('<p>' + oeResult2 + '</p>');
		$('div#test22').append('addition modulo 10, element 3, power 5');
		var oeResult3 = operationExp(function(a, b) {
			return (a + b) % 10;
		}, 3, 3, 5);
		$('div#test22').append('<p>' + oeResult3 + '</p>');
	}
	
	function testOrderOfElem() {
		$('div#test23').append('<h4>Tests for orderOfElem()</h4>')
		$('div#test23').append('N10, set 0 to 9 modulo 10 addition, element 5');
		var ooeResult1 = orderOfElem([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function(a, b) {
			return (a + b) % 10;
		}, 0, 5);
		$('div#test23').append('<p>' + ooeResult1 + '</p>');
		$('div#test23').append('N10, set 0 to 9 modulo 10 addition, element 3');
		var ooeResult2 = orderOfElem([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], function(a, b) {
			return (a + b) % 10;
		}, 0, 3);
		$('div#test23').append('<p>' + ooeResult2 + '</p>');
		$('div#test23').append('1 to 6, mod 7 multiplication, element 4');
		var ooeResult3 = orderOfElem([1, 2, 3, 4, 5, 6], function(a, b) {
			return (a * b) % 7;
		}, 1, 4);
		$('div#test23').append('<p>' + ooeResult3 + '</p>');
	}
	
	function testCyclicSubgroup() {
		$('div#test24').append('<h4>Tests for cyclicSubgroup()</h4>')
		$('div#test24').append('N10, set 0 to 9 modulo 10 addition, element 3');
		var csResult1 = cyclicSubgroup([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
										function(a, b) { return (a + b) % 10; },
										0,
										3
										);
		$('div#test24').append('<p>' + csResult1 + '</p>');
		$('div#test24').append('1 to 6, mod 7 multiplication, element 2');
		var csResult2 = cyclicSubgroup([1, 2, 3, 4, 5, 6],
										function(a, b) { return (a * b) % 7; },
										1,
										2
										);
		$('div#test24').append('<p>' + csResult2 + '</p>');
	}
	
	function testIsFiniteSubgroup() {
		$('div#test25').append('<h4>Tests for isFiniteSubgroup()</h4>')
		$('div#test25').append('Group: N10, set 0 to 9 modulo 10 addition<br>');
		$('div#test25').append('Possible subgroup: even numbers 0 to 8 modulo 10 addition');
		var isFiniteSub1 = isFiniteSubgroup([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
											function(a, b) { return (a + b) % 10; },
											0,
											[0, 2, 4, 6, 8]);		
		$('div#test25').append('<p>' + isFiniteSub1 + '</p>');
		$('div#test25').append('Group: N10, set 0 to 9 modulo 10 addition<br>');
		$('div#test25').append('Possible subgroup: integers 1 through 5 modulo 10 addition');
	
		var isFiniteSub2 = isFiniteSubgroup([0, 1, 2, 3, 4, 5 ,6, 7, 8, 9],
											function(a, b) { return (a + b) % 10; },
											0,
											[1, 2, 3, 4, 5]);
		$('div#test25').append('<p>' + isFiniteSub2 + '</p>');								
	}
	
	function testGroupCenter() {
		$('div#test26').append('<h4>Tests for groupCenter()</h4>')
		$('div#test26').append('Group: N10, set 0 to 9 modulo 10 addition<br>');
		var groupCenter1 = groupCenter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
										function(a, b) { return (a + b) % 10; },
										0);
		$('div#test26').append('<p>Group center: ' + groupCenter1 + '</p>');								
	}
	
	function testCentralizer() {
		$('div#test27').append('<h4>Tests for centralizer()</h4>');
		$('div#test27').append('Group: N10, set 0 to 9 modulo 10 addition<br>');
		$('div#test27').append('element to find centralizer of: 5');
		var centralizer1 = centralizer([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
										function(a, b) { return (a + b) % 10; },
										0,
										5);
		$('div#test27').append('<p>Result: ' + centralizer1 + '</p>');
	}
	
	function testMean() {
	  $('div#test28').append('<h4>Tests for mean()</h4>');
	  $('div#test28').append('Set: 1, 4, 7, 8, 22, 31');
	  var mean1 = mean([1, 4, 7, 8, 22, 31]);
	  $('div#test28').append('<p>Result: ' + mean1 + '</p>');
	
	}
	
	function testMedian() {
	  $('div#test29').append('<h4>Tests for median()</h4>');
	  $('div#test29').append('Set: 1, 4, 7, 8, 22, 31');
	  var median1 = median([1, 4, 7, 8, 22, 31]);
	  $('div#test29').append('<p>Result: ' + median1 + '</p>');
	  $('div#test29').append('Set: 1, 3, 5, 7, 9, 11, 13');
	  var median2 = median([1, 3, 5, 7, 9, 11, 13]);
	  $('div#test29').append('<p>Result: ' + median2 + '</p>');
	  $('div#test29').append('Set: 3, 1, 7, 5, 9, 11, 13');
	  var median3 = median([3, 1, 7, 5, 9, 11, 13]);
	  $('div#test29').append('<p>Result: ' + median3 + '</p>');
	}
	
	function testMode() {
	  $('div#test30').append('<h4>Tests for mode()</h4>');
	  $('div#test30').append('Set: 1, 3, 3, 7, 9, 21');
	  var mode1 = mode([1, 3, 3, 7, 9, 21]);
	  $('div#test30').append('<p>Result: ' + mode1 + '</p>');
	  $('div#test30').append('Set: 1, 1, 3, 3, 7, 9, 9, 9, 21');
	  var mode2 = mode([1, 1, 3, 3, 7, 9, 9, 9, 21]);
	  $('div#test30').append('<p>Result: ' + mode2 + '</p>');	 
	  $('div#test30').append('Set: 1, 1, 2, 2, 5, 7, 7');
	  var mode3 = mode([1, 1, 2, 2, 5, 7, 7]);
	  $('div#test30').append('<p>Result: ' + mode3 + '</p>');	 
	}
	
	function testMax() {
	  $('div#test31').append('<h4>Tests for max()</h4>');
	  $('div#test31').append('Set: 1, 4, 88, 2, 30, 101, 30');
	  var max1 = max([1, 4, 88, 2, 30, 101, 30]);
	  $('div#test31').append('<p>Result: ' + max1 + '</p>');
	  $('div#test31').append('Set: 15, 0, -5, 200, 30, 10, 30');
	  var max2 = max([15, 0, -5, 200, 30, 10, 30]);
	  $('div#test31').append('<p>Result: ' + max2 + '</p>');
	}
	
	function testMin() {
	  $('div#test32').append('<h4>Tests for min()</h4>');
	  $('div#test32').append('Set: 1, 4, 88, 2, 30, 101, 30');
	  var min1 = min([1, 4, 88, 2, 30, 101, 30]);
	  $('div#test32').append('<p>Result: ' + min1 + '</p>');
	  $('div#test32').append('Set: 15, 0, -5, 200, 30, 10, 30');
	  var min2 = min([15, 0, -5, 200, 30, 10, 30]);
	  $('div#test32').append('<p>Result: ' + min2 + '</p>');
	  
	}
	function testRange() {
	  $('div#test33').append('<h4>Tests for range()</h4>');
	  $('div#test33').append('Set: 1, 4, 88, 2, 30, 101, 30');
	  var range1 = range([1, 4, 88, 2, 30, 101, 30]);
	  $('div#test33').append('<p>Result: ' + range1 + '</p>');
	  $('div#test33').append('Set: 15, 0, -5, 200, 30, 10, 30');
	  var range2 = range([15, 0, -5, 200, 30, 10, 30]);
	  $('div#test33').append('<p>Result: ' + range2 + '</p>');
	  
	}
	
	function testQuartiles() {
	  $('div#test34').append('<h4>Tests for quartiles()</h4>');
	  $('div#test34').append('Set: 1, 4, 7, 14, 22, 40, 60, 70, 80');
	  var quartiles1 = quartiles([1, 4, 7, 14, 22, 40, 60, 70, 80]);
	  $('div#test34').append('<p>Result: ' + quartiles1 + '</p>');
	}
	
	function testIQR() {
	  $('div#test35').append('<h4>Tests for IQR()</h4>');
	  $('div#test35').append('Set: 1, 4, 7, 14, 22, 40, 60, 70, 80');
	  var IQR1 = IQR([1, 4, 7, 14, 22, 40, 60, 70, 80]);
	  $('div#test35').append('<p>Result: ' + IQR1 + '</p>');
	}
	
	function testOutliers() {
	  $('div#test36').append('<h4>Tests for outliers()</h4>');
	  $('div#test36').append('Set: -10, 5, 15, 22, 28, 30, 36, 60, 97');
	  var outliers1 = outliers([-10, 5, 15, 22, 28, 30, 36, 60, 97]);
	  $('div#test36').append('<p>Result: ' + outliers1 + '</p>');
	  $('div#test36').append('Set: -35, 20, 23, 25, 27, 28, 60, 77, 102');
	  var outliers2 = outliers([-35, 20, 23, 25, 27, 28, 60, 77, 102]);
	  $('div#test36').append('<p>Result: ' + outliers2 + '</p>');
	}
	
	function testVariance() {
	  $('div#test37').append('<h4>Tests for variance()</h4>');
	  $('div#test37').append('Set: -10, 5, 15, 22, 28, 30, 36, 60, 70');
	  var variance1 = variance([-10, 5, 15, 22, 28, 30, 36, 60, 70]);
	  $('div#test37').append('<p>Result: ' + variance1 + '</p>');
	  $('div#test37').append('Set: 5, 15, 12, 23, 15, 14, 3');
	  var variance2 = variance([5, 15, 12, 23, 15, 14, 3]);
	  $('div#test37').append('<p>Result: ' + variance2 + '</p>');
	}
	
	function testStdDeviation() {
	  $('div#test38').append('<h4>Tests for stdDeviation()</h4>');
	  $('div#test38').append('Set: -10, 5, 15, 22, 28, 30, 36, 60, 70');
	  var stdDeviation1 = stdDeviation([-10, 5, 15, 22, 28, 30, 36, 60, 70]);
	  $('div#test38').append('<p>Result: ' + stdDeviation1 + '</p>');
	  $('div#test38').append('Set: 5, 15, 12, 23, 15, 14, 3');
	  var stdDeviation2 = stdDeviation([5, 15, 12, 23, 15, 14, 3]);
	  $('div#test38').append('<p>Result: ' + stdDeviation2 + '</p>');
	}

});