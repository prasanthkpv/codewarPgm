function sumIntervals(intervals) {
    const set = new Set();
    intervals.forEach((range) =>{
        for(let num = range[0]; num < range[1]; num++){
            set.add(num);
        }
        console.log(set);
    })
    // console.log(set.size);
    return set.size;
}

console.log(sumIntervals([[1, 2],[6, 10],[11, 15]]));