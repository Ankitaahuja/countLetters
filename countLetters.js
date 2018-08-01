function countLetter(string){
  string = string.replace(/\s/g, '').toLowerCase();
 var obj = {};
 for (i = 0; i <string.length; i++ ){
   console.log("value of" , i);
  if (obj[string[i]]){
    obj[string[i]] += 1 ;
  }
  else {
    obj[string[i]] = 1;
  }
 }
 return obj;
console.log(obj);
}
console.log(countLetter("its freaky to know this"))