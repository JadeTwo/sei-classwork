function countDown(num) {
    console.log(num)
    // base case
    if (num === 0) {
        return;            // countDown(0)
    }
    countDown(num - 1)
    console.log('done' + num);
}

countDown(10)