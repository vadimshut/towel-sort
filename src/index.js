
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix.length == 0){
        return [];
    }
    else {
        let a = matrix.reduce( (prev, item, index) => {
        return (index%2 ==0 ? prev.concat(item) : prev.concat(item.reverse()));
        }, []);
        return a;
}
}
