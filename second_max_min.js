let arr=[];
let n = +prompt('Input size of array');
for(let i=0;i<n;i++){
    arr[i]=+prompt(i);
}
// in ra so lon thu 2
// let max = -1e9;
// let max2 = -1e9;
// for (let i = 0; i < n; i++) {
//     if (arr[i]>max){
//         max2 = max;
//         max=arr[i];
//     } else if(arr[i]>max2) max2 = arr[i];
// }
//
// document.write(max,max2);

// in ra so nho thu 2
// let min = 1e9;
// let min2 = 1e9;
// for (let i = 0; i < n; i++) {
//     if(arr[i]<min){
//         min2 = min;
//         min = arr[i];
// } else if(arr[i]<min2) min2 = arr[i];
// }
//
// document.write(min2);

// in ra so lon nhat va lon thu 2. 2 so phai khac nhau. Neu k co so lon thu 2 thi in ra -1

let max = -1e9;
let max2 = -1e9;
for (let i = 0; i < n; i++) {
    if (arr[i]>max){
        max2 = max;
        max=arr[i];
    } else if(arr[i]>max2) max2 = arr[i];
}

document.write(max,max2);