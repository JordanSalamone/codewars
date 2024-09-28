// Story

// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task

// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let curMonth = currentDate.split(' ')[0],
        expMonth = expirationDate.split(' ')[0],
        curDay = currentDate.split(',')[0].split(' ')[1],
        expDay = expirationDate.split(',')[0].split(' ')[1],
        curYear = currentDate.split(' ')[2],
        expYear = expirationDate.split(' ')[2];
    const m = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if(enteredCode === correctCode){
        if(m.indexOf(curMonth) < m.indexOf(expMonth) && curYear == expYear){
            return true
        }else if(m.indexOf(curMonth) == m.indexOf(expMonth) && curYear == expYear){
            return 1
        }
    }else{
        return false
    }
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))