function inverserString(ch){
  let c=""
  let n=ch.length
  for (let i=n-1;i>=0;i--){
    c+=ch[i] 
  }
    
 return(c)
}
ch="le petit enfant"
console.log(inverserString(ch))
function compterString(ch){
    let cpt=0
    let n=ch.length
    for(let i=0;i<n;i++){
        if(ch[i]!=" "){
cpt++
        }
       
    }
    return(cpt)
}
ch="ameni joue"
console.log(compterString(ch))

function majusculeString(ch){
  let n=ch.length
  let res=" "
  let newWord=true
  for(let i=0;i<n;i++){

let char = ch[i]


    if( char !=" " && newWord){
      res+=char.toUpperCase()

      newWord=false
    }else{
      res+=char
    }
    if(char===" "){
      newWord=true
    }

  }
  return(res)
}
ch="hello world"
console.log(majusculeString(ch))
function calculeArray(arr){
  let min=arr[0]
  let max=arr[0]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    }
    if(arr[i]<min){
      min=arr[i]
    }
  }
  return[max,min]
}
arr=[5,2,3,7]
console.log(calculeArray(arr))
function sommeArray(arr){
  let s=0
  for(let i=0;i<arr.length;i++){
    s+=arr[i]
  }
  return(s)
}
arr=[2,3,9,6,-2]
console.log(sommeArray(arr))
function filtrerArray(arr){
  let tab= [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>100){
      tab.push (arr[i]);
    }

  }
  return(tab)
}
arr=[2,7,580,60,120]
console.log(filtrerArray(arr))
function factorielleNumber(n){
  let f=1;
  if(n<0){
    f=false
  }
  
if(n>=0){
  for(let i=1;i<=n;i++){
    f=f*i
  }

}
return(f)
}
n=12
console.log(factorielleNumber(n))
function premierNumber(n){
  let p=0;
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0){
      console.log("n'est pas premier")
      return;
    }
  }
  console.log("le nombre est premier")
}
premierNumber(29)
function fibonacci(jusquA){
  let fibo=[0,1]
  while(true){
    let prochain=fibo[fibo.length-1]+fibo[fibo.length-2];
    if(prochain>jusquA){
      break
    }
    fibo.push(prochain);
  }
  return fibo;
}
jusquA=4
console.log(fibonacci(jusquA))

