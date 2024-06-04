

function calculate(){

    let numone = Number(document.getElementById('num1').value)
    let numtwo = Number(document.getElementById('num2').value)
    let result = 0

    if (document.getElementById('check1').checked)
        result = numone + numtwo    
    else if (document.getElementById('check2').checked)
        result = numone - numtwo    
    else if (document.getElementById('check3').checked)
        result = numone * numtwo    
    else
    result = numone / numtwo    
    
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(result)
}