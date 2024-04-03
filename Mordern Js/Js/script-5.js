// immediately invoked functions
(function (params) {
    console.log(`my name is ${params}`);
})("Flacko");


const getCelsius = (F) =>{
    tempurature = 5/9 * (F - 32);
    return `This is the temperature in degree celsius ${tempurature}`
}

console.log(getCelsius(145));

const degreeFarenheight = C => (9/5 * C) + 32;
console.log(degreeFarenheight(75));

const minMax = (nums) =>{
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    return {
        min,
        max
    }

}


arrr = [1,2,3,4]

console.log(minMax(arrr));

// anonymous/ unnamed function

(function (len, bre) {
    const area = len * bre
    const output = `The area of a rectangle with length ${len} and of width ${bre} is ${area}`
    console.log(output);
})(6,6);

// Execution context