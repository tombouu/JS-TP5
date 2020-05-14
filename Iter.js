function exo1(){
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = numbers.map(
        function absolut(nbs){
           return Math.abs(nbs);
        }
    );
    console.log(absNumbers); 	// => [42, 3, 0, 1, 100]
    console.log(numbers);    	// => [-42, 3, 0, -1, 100]
}


function evenOnly(array){
    return array.filter(
        (arr) => {arr%2==0}
    );
}

function sum(array){
    return array.reduce(
        (arr) => {return latest+arr}, 0
    );
}

function flatten2D(multi){
    let pos = 0;
    let final = {};
    multi.forEach(
        (array) => {
            array.forEach(
                (elem) => {
                    final[pos++] = elem;
                }
            );
        }
    );
    return final;
}

function removeDuplicates(array){
    return array.filter(
        (elem,i) => {
            return (array.indexOf(elem) == i)
        }
    );
}