let arr=[1,8,8,55,99,77,77,66,105];
for(let i= 0; i<arr.length; i++){
   for(let j= i+1; j<arr.length; j++){
      if (arr[i]>arr[j]){
         let tg = arr[i];
         arr[i] = arr[j];
         arr[j] = tg;
      }
      }
   }console.log(arr);
