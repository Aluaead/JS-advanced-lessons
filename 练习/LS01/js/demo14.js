function unique(arr){
    var temp=new Array();
    for(var i in arr){
        if(temp.indexOf(arr[i])==-1){
            temp.push(arr[i]);
        }
    }
    return temp;
}
var arr1=[1,2,3,2,3,4,5,6];
console.log(unique(arr1));