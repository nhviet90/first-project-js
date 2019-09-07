function payment() {
    let selectedFood = [
        {
            'name' :'Đồ tráng miệng 1',
            'price' : 10000,
            'amount': 0
        },
        {
            'name' :'Đồ tráng miệng 2',
            'price' : 15000,
            'amount': 3
        },
        {
            'name' :'Đồ tráng miệng 3',
            'price' : 22,
            'amount': 0
        },
        {
            'name' :'Món chính 1',
            'price' : 29000,
            'amount': 5
        },
        {
            'name' :'Món chính 2',
            'price' : 33000,
            'amount': 0
        },
        {
            'name' :'Món chính 3',
            'price' : 61000,
            'amount': 0
        }
    ]
    let countSTT = 0 ;
    let count = 0;
    let totalTong = 0;
    // let selectedFood = JSON.parse(localStorage.getItem('MyListBook'));
    for (let index = 0; index < selectedFood.length; index++) {
        if (selectedFood[index].amount > 0) {
            countSTT += 1;
            let table = document.getElementById("data");
            let row = table.insertRow(-1);
            let stt = row.insertCell(0);
            stt.innerHTML = countSTT;
            let name = row.insertCell(-1);
            name.innerHTML = selectedFood[index].name;
            let price = row.insertCell(-1);
            price.innerHTML = selectedFood[index].price;
            let amount = row.insertCell(-1);
            amount.innerHTML = selectedFood[index].amount;
            let totalMon = row.insertCell(-1);
            totalMon.innerHTML = Number(selectedFood[index].price * selectedFood[index].amount);
            totalTong += Number(selectedFood[index].price * selectedFood[index].amount);
        } 
        else{
            count +=1;
        } 
    }    
    if (count == selectedFood.length) {
        alert("chưa chọn món")
        count = 0; 
    } else {

    }
    let totalRow = document.getElementById("data").insertRow(-1);
    let totalRowCel1 = totalRow.insertCell();
    totalRowCel1.colSpan = "4";
    totalRowCel1.style.textAlign = "center"
    totalRowCel1.style.fontWeight = "bold"
    totalRowCel1.innerHTML ="Tổng tiền"
    let totalRowCel = totalRow.insertCell(-1);  
    totalRowCel.innerHTML = totalTong.toLocaleString("de-DE");
        

}


