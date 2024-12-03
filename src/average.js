export function average(numbers) {
    if(!Array.isArray(numbers) || numbers.length === 0) {
       console.log("error")
    }
    const sum = numbers.reduce((acc, sum) => acc + sum, 0);
    return sum / numbers.length;
}

module.exports = average;