function add(num1, num2, cb) {
    let result = num1 + num2;
    
    if (cb) {
       result = cb(result); 
    }

    console.log(result);
}

add(2000, 3000);
add(2000, 3000, (result) => `Rp. ${result}`);