// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(inputArr) {
    let armArr = [];
    for (num of inputArr){
        // Converts int to string and splits into string array
        const strNum = num.toString();
        let strArr = strNum.split("");
        let intArr = [];

        // Casts string digits into ints and raises to appropriate power, then saves into intArr
        for (digit of strArr){
            intArr.push(parseInt(digit)**(strArr.length));
        }

        // Sums intArr and checks against original number
        const checkSum = intArr.reduce((a,b) => a+b,0)
        
        // Checks if Armstrong number and adds to output array if so
        if (checkSum === num){
            armArr.push(num);
        }
    }
    return armArr
     
};
