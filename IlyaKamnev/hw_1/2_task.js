function calculateArea (figure, { ...input }) {
    let area;

    switch (figure) {
        case 'square':
            area = input.width**2;
            break;
        case 'rectangle':
            area = input.width * input.height;
            break;
        case 'triangle':
            area = input.width * input.height / 2;
            break;
        case 'circle':
            area = 2 * Math.PI * input.radius;
            break;
        }

    return { area, figure, input };
};

console.log(calculateArea('triangle', {
    width: 5, 
    height: 3,
}));
console.log(calculateArea('square', {
    width: 5,
}));
console.log(calculateArea('circle', {
    radius: 10,
}));
