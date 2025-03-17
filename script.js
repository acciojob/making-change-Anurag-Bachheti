const makeChange = (c) => {
	let q = 25, d = 10, n_ = 5, p = 1;
    let result = {};

    // Step 1: Check if n > q
    if (c >= q) {
        result["q"] = Math.floor(c / q);
        let first = c % q; // Remainder after dividing by q
    } else {
        result["q"] = 0;
        let first = c;
    }

    // Step 2: Check if first > d
    if (first >= d) {
        result["d"] = Math.floor(first / d);
        let second = first % d;
    } else {
        result["d"] = 0;
        let second = first;
    }

    // Step 3: Check if second > n_
    if (second >= n_) {
        result["n"] = Math.floor(second / n_);
        let third = second % n_;
    } else {
        result["n"] = 0;
        let third = second;
    }

    // Step 4: Assign remaining value to p
    result["p"] = third;

    return result;
};
console.log(makeChange)
// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
