// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 function printOdds(count) {
     count = Math.abs(count);
    for (let i = 0; i < count; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
 }
 printOdds(20);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if (age < 16) {
        console.log(belowSixteen);
    }
    else if (age >= 16) {
        console.log(aboveSixteen);
    }
    else {
        console.log("Invalid age input")
    }
}
checkAge("Austin", 30);

console.log("EXERCISE 3:\n==========\n");

function cartesianCheck(x, y) {
    if (x == 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    }
    else if (y == 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    }
    else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in the 3rd Quadrant.`);
    }
    else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in the 4th Quadrant.`);
    }
    else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in the 2nd Quadrant.`);
    }
    else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in the 1st Quadrant.`);
    }
}

console.log("EXERCISE 4:\n==========\n");

function triangleType(a, b, c) {
    if (a + b <= c || b + c <= a || c + a <= b){
        console.log("Not a valid triangle");
    }
    else{
        if (a**2 + b**2 === c**2) {
            console.log("The triangle is Right");
        }
        else if (a == b && b == c && c == a) {
            console.log("The triangle is equilateral");
        }
        else if (a == b || b == c || c == a) {
            console.log("The triangle is Isosceles");
        }
        else if (a != b && b != c && c != a) {
            console.log("The triangle is Scalene");
        }
    }
}

triangleType(6,8,10);

console.log("EXERCISE 5:\n==========\n");

function cellData(planLimit, day, usage) {
    let isAverage = null;
    let usagePerDay = usage / day;
    let remainingData = planLimit - usage;
    let idealAverageUse = planLimit / 30;
    let remainingDays = 30 - day;
    let futureAverageUse = remainingData / remainingDays;
    let aboveOrBelow;
    let messageEnd = `.`;

    let predictedOverage = Math.abs(remainingData - (usagePerDay * remainingDays));

    if (usagePerDay > idealAverageUse) {
        aboveOrBelow = "EXCEEDING";
        messageEnd = `, continuing this high usage, you'll exceed your data plan by ${predictedOverage} GB. To stay below your data plan, use no more than ${futureAverageUse} GB/day.`;
    }
    else {
        aboveOrBelow = "BELOW";
    }

    console.log(`${day} days used, ${remainingDays} days remaining. Average daily use: ${usagePerDay} GB/day. You are ${aboveOrBelow} your average daily use (${idealAverageUse} GB/day)` + messageEnd);
    return isAverage;
}

cellData(100, 15, 51);