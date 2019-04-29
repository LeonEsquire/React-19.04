function loop(times = 0, callback = null) {
    if(typeof callback !== 'function') return;

    for(let i = 0; i < times; i++) {
        callback(i);
    }
}

loop(3, (i) => {
    console.log('callback ' + i);
});