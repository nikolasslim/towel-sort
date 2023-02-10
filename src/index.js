module.exports = towelSort = (matrix) => {
    let arr = [];
    if (matrix)
        matrix.forEach((i, index) =>
            index % 2
                ? i.reverse().forEach((i) => arr.push(i))
                : i.forEach((i) => arr.push(i))
        );
    return arr;
};
