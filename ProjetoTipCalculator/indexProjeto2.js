function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value
}

function split(value){
    if(value >= 2){
        return value + ' people'
    }
    else{
        return value + ' person'
    }   
}

function update() {
    let bill = Number((document.getElementById('yourBill').value))
    let tipInputPercent = (document.getElementById('tipInput')).value
    let splitInputPercent = (document.getElementById('splitInput')).value

    let tip = bill * (tipInputPercent / 100)
    let billTotal = bill + tip
    let splitTotal = billTotal / splitInputPercent
    
    document.getElementById('tipValue').innerHTML = formatMoney(tip) 
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal) 
    document.getElementById('billEach').innerHTML = formatMoney(splitTotal)

    document.getElementById('tipPercent').innerHTML = tipInputPercent + '%'    
    document.getElementById('splitValue').innerHTML = split(splitInputPercent)   
}
