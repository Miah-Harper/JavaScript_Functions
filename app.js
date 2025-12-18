

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){

    if(count < 0){
        count = count *-1;
    }

    for(let i = 0; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    const aboveSixteen = `"Congrats ${userName}, you can drive!"`;
    const belowSixteen = `"Sorry ${userName}, but you need to wait until you're 16."`;

    if(age < 16){
        console.log(belowSixteen);
    }
    else{
        console.log(aboveSixteen);
    }
}

checkAge("Miah", 32);
checkAge("Ivy", 3);

console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y){
    if(x > 0 && y > 0){
        console.log(`${x}, ${y} is in Quandrant 1`);
    }else if(x < 0 && y > 0){
        console.log(`${x}, ${y} is in Quandrant 2`);
    }else if(x < 0 && y < 0){
        console.log(`${x}, ${y} is in Quandrant 3`);
    }else if(x > 0 && y < 0){
        console.log(`${x}, ${y} is in Quandrant 4`);
    }else if(x != 0 && x === 0){
        console.log(`${x}, ${y} is on the x axis`);
    }else if(y != 0 && x === 0){
        console.log(`${x}, ${y} is on the y axis`);
    } else {
        console.log(`${x}, ${y} is on the origin`)
    }
}

quadrant(2, 3);
quadrant(-2, 3);
quadrant(-2, -3);
quadrant(2, -3);
quadrant(3, 0);
quadrant(0, 4);
quadrant(0,0);

console.log("EXERCISE 4:\n==========\n");

function triangle(side1, side2, side3){
 if(side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
    return "invalid triangle";
 }

 if(side1 === side2 && side2 === side3){
    return "equilateral triangle";
 } else if(side1 === side2 || side1 === side3 || side2 === side3){
    return "isosceles triangle";
 } else {
    return "scalene triangle";
 }
}

console.log(triangle(1, 2, 3));
console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 5));
console.log(triangle(3, 4, 5));

console.log("EXERCISE 5:\n==========\n");

function dataPlan(planLimit, day, usage){
    const totalDays = 30
    const expectedDailyAvg = planLimit / totalDays;
    const actualDailyAvg = usage / day;
    const dataLeft = planLimit - usage;
    const daysLeft = totalDays - day; 
    const projectedUsage = actualDailyAvg * totalDays;
    const underBy = planLimit - projectedUsage;
    const avgRemaining = dataLeft / daysLeft;
 
    if(dataLeft <= 0){
        console.log("you have used all your data");
        return;
    }

    if(actualDailyAvg > expectedDailyAvg){
        console.log(`${day} days used, ${daysLeft} days remaining. 
            Average daily use ${actualDailyAvg.toFixed(2)} GB/day. You are exceeding your average daily use. 
            what you should use: ${expectedDailyAvg.toFixed(2)} GB/day, continuing this high usage, 
            you'll exceed your data plan by ${underBy.toFixed(2)}.
            to stay below your data plan, use no more than ${avgRemaining.toFixed(2)} GB/day` );
    } else if(actualDailyAvg < expectedDailyAvg){
        console.log(`${day} days used, ${daysLeft} days remaining. 
            Average daily use ${actualDailyAvg.toFixed(2)} GB/day. You are under your average daily use. 
            what you should use: ${expectedDailyAvg.toFixed(2)} GB/day, continuing this low usage, 
            you'll be under your data plan by ${underBy.toFixed(2)} GB/day`)
    } else {
        console.log(`Your average daily use is ${actualDailyAvg.toFixed(2)} GB/day. `)
    }
}
dataPlan(50, 12, 25);
dataPlan(50, 15, 25);
dataPlan(50, 10, 25);
dataPlan(100, 15, 5);