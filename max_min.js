let arr=[];
let n = +prompt('Input size of array');
for(let i=0;i<n;i++){
    arr[i]=+prompt(i);
}
max = -1e9;
min = 1e9;
for (let i = 0; i < n; i++) {
    if (arr[i]>max) max = arr[i];
    if (arr[i]<min) min = arr[i];
}
document.write('Max = '+max+'<br>'+'Min = '+min);