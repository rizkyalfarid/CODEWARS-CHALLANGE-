let v1=50;
    v2=100,
    v3=150,
    v4=200,
    v5=2,
    v6=250

function equal1(){
  let a=v1;  
  let b=v1;  
  return a+b;
}

function equal2(){
  let a=v3;
  let b=v1;
  return a-b;
}

function equal3(){
  let a=v1;
  let b=v5;
  return a*b;
}

function equal4(){
  let a=v4;
  let b=v5;
  return a/b;
}

function equal5(){
  let a=v6;
  let b=v3;
  return a%b;
}

console.log(equal5());