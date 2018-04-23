function bubbleSort(array) { 
    //when done, try removing this if statement
    for( let i = 0; i < array.length-1; i++){
        let doSwap = compare(array[i], array[i+1])
        if (doSwap)
        {
            swap(i,array);
        }
    }
    let lastNum = array[array.length-1]
    return bubbleSort(array.slice(0, array.length-1)).concat(lastNum); //why wont push work?
}

function swap(index, arr){
        let swap1 = arr[index];
        let swap2 = arr[index+1]
        arr[index] = swap2;
        arr[index+1] = swap1;
}

function compare(num1, num2){
    return num1 > num2;
}