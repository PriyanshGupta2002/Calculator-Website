// Simple Calculator function starts here 
function add(){
    alert("This is a function which returns addition of two numbers")
let n1=parseInt(prompt("Enter 1st number")) 
let n2=parseInt(prompt("Enter 2nd number"))
let res=n1+n2
document.getElementById('result1').innerHTML=`The addition of two numbers ${n1} and ${n2} is ${res}`
}
function subtract(){
    alert("This is a  function which returns substraction of two numbers")
    let num1=prompt("Enter 1st number")
    let num2=prompt("Enter 2nd number")
    let res=num1-num2
    document.getElementById('result1').innerHTML=`The subtraction of two numbers ${num1} and ${num2} is ${res}`
}
function multiply(){
    alert("This is a function function which returns the multiplactaion result of two numbers")
    let num1=prompt("Enter 1st number")
    let num2=prompt("Enter 2nd number")
    let res=num1*num2
    document.getElementById('result1').innerHTML=`The multiplacation of two numbers ${num1} and ${num2} is ${res}`
}
function division(){
    alert("This is a function which returns quotient on dividing two numbers")
    let num1=prompt("Enter 1st number")
    let num2=prompt("Enter 2nd number")
    if(num2==0){
        let res="infinite"
        document.getElementById('result1').innerHTML=`The division of two numbers ${num1} and ${num2} is ${res}`
    }
    else{
        let res=num1/num2
        document.getElementById('result1').innerHTML=`The division of two numbers ${num1} and ${num2} is ${res}`
    }
}
function round(){
    alert("This is a function that returns a roundoff value for a given number")
    let num=prompt("Enter a number to find it's roundup value")
    let res=Math.round(num)
    document.getElementById('result1').innerHTML=`The roundof value of ${num} is ${res}`
}
function simp_ceil(){
    alert("This is a function that returns the next greatest integer value of a given number")
    let num=prompt("Enter a number to find it's next greatest integer value")
    let res=Math.ceil(num)
    document.getElementById('result1').innerHTML=`The next greatest integer value of ${num} is ${res}`
}
function simp_floor(){
    alert("This is a function that returns the previous greatest integer value of a given number")
    let num=prompt("Enter a number to find it's previous greatest integer value")
    let res=Math.floor(num)
    document.getElementById('result1').innerHTML=`The previous greatest integer value of ${num} is ${res}`
}
function simp_absolute() {
    alert("This is a absolute function which will convert negative value to positive value")
    let num=prompt("Enter a number to find it's absolute value")
    let res=Math.abs(num)
    document.getElementById('result1').innerHTML=`The absolute value of ${num} is ${res}`
}
function simp_max() {
    alert("This function will compare the entered numbers and will return the greatest amongst all")
    let ar=[]
    let size=prompt("How many numbers you want to enter to find greatest number amongst them?")
    for (let index = 0; index < size; index++) {
        let element=prompt(`Enter number ${index+1}`)
        ar.push(element) 
    }
    ar.sort()
    let l_value=ar.pop()
    document.getElementById('result1').innerHTML=`The greatest value amongst the entered numbers is ${l_value}`
}
function simp_min() {
    alert("This function will compare the entered numbers and will return the smallest amongst all")
    let ar=[]
    let size=prompt("How many numbers you want to enter to find smallest number amongst them?")
    for (let index = 0; index < size; index++) {
        let element=prompt(`Enter number ${index+1}`)
        ar.push(element) 
    }
    ar.sort()
    let f_value=ar[0]
    document.getElementById('result1').innerHTML=`The lowest value amongst the entered numbers is ${f_value}`
}



// Scientific calculator Js starts here  
function sci_sin(){
    alert("This is a function which finds sin value of a number in radian")
    let num=prompt("Enter a number to find it's sin value")
    let res=Math.sin(num)
    document.getElementById('result2').innerHTML=`The sin value of ${num} is ${res}`
}
function sci_cos(){
    alert("This is a function which finds cosine value of a number in radian")
    let num=prompt("Enter a number to find it's cosine value")
    let res=Math.cos(num)
    document.getElementById('result2').innerHTML=`The cosine value of ${num} is ${res}`
}
function sci_tan(){
    alert("This is a function which finds tangent value of number in radian")
    let num=prompt("Enter a number to find it's tangent value")
    let res=Math.tan(num)
    document.getElementById('result2').innerHTML=`The tangent value of ${num} is ${res}`
}
function sci_sec(){
    alert("This is a function which finds secant value of a number in radian")
    let num=prompt("Enter a number to find it's secant value")
    let res=1/(Math.cos(num))
    document.getElementById('result2').innerHTML=`The secant value of ${num} is ${res}`
}
function sci_cosec(){
    alert("This is a function which finds cosec value of a number in radian")
    let num=prompt("Enter a number to find it's cosec value")
    let res=1/(Math.sin(num))
    document.getElementById('result2').innerHTML=`The cosec value of ${num} is ${res}`
}
function sci_cot(){
    alert("This is a function which finds cot value of a number in radian")
    let num=prompt("Enter a number to find it's cot value")
    let res=1/(Math.tan(num))
    document.getElementById('result2').innerHTML=`The cot value of ${num} is ${res}`
}
function sci_sqrt(){
    alert("This is a function which finds square root of a number")
    let num=prompt("Enter a number to find it's square root")
    let res=Math.sqrt(num)
    document.getElementById('result2').innerHTML=`The square root of ${num} is ${res}`
}
function sci_pow(){
    alert("This is a function which finds first number raise to the power of second number")
    let num=prompt("Enter first number")
    let num2=prompt("Enter second number")
    let res=Math.pow(num,num2)
    document.getElementById('result2').innerHTML=`The value of ${num} raise to power ${num2} is ${res}`
}
function sci_rand() {
    alert("This function will return a random value generated between an input range")
    let min=Math.ceil(prompt("Enter the minimum value to make a range"))
    let max=Math.floor(prompt("Enter the maximum value to make a range"))
    let res=Math.floor(Math.random() * (max - min + 1)) + min
    document.getElementById('result2').innerHTML=`The random value generated between ${min} and ${max} is ${res}`
}
function sci_log() {
    alert("This function will return a logarithmic vale of a number")
    let num=prompt("Enter a number to get it's logarithimic value ")
    let res=Math.log10(num)
    document.getElementById('result2').innerHTML=`The lograthimic value of ${num} is ${res}`
}