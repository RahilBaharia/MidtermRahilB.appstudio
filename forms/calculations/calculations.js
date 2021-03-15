function calcAvgSquare (one,two,three) {
    let avgSquare = ((one + two + three)/3) * (math.pow(one, 2)
    return avgSquare
}

let n1 = Number(prompt("Enter 1st number"))
let n2 = Number(prompt("Enter 2nd number"))
let n3 = Number(prompt("Enter 3rd number"))

let math = calcAvgSquare(n1,n2,n3)
alert(`The answer is ${math}`)