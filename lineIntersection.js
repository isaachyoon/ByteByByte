/*
if the slopes are same, then we can assume that they are parallel.
if they are not the same, then we can assume that they will intersect at some point.
*/

function lineIntersection(x1, y1, x2, y2, x3, y3, x4, y4){
	//sloep 1
	let slope1 = Math.round(((y2 - y1) / (x2 - x1)) * 1000) / 1000;
	let slope2 = Math.round(((y3 - y4) / (x3 - x4)) * 1000) / 1000;

	return slope1 === slope2

}

function intersectionPoint(x1, y1, x2, y2, x3, y3, x4, y4) {
	let slope1 = Math.round(((y2 - y1) / (x2 - x1)) * 1000) / 1000;
	let slope2 = Math.round(((y4 - y3) / (x4 - x3)) * 1000) / 1000;
	console.log(slope2)
	let b1 = y1 - slope1*x1
	let b2 = y3 - (slope2 * x3)

	let x = (b1 - b2) / (slope2 - slope1)
	console.log(x)
	let y = slope1*x + b1;
	return [x, y]
}

console.log(intersectionPoint(15, 10, 49, 25, 29, 5, 32, 32))



/*
y = mx + b
y = mx + b

mx + c  = mx2 + b
mx - mx2 = b - c
x(m - m2) = b -c
x = (b - c) / (m - m2)
*/