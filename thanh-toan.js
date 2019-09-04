function payment() {
    let selectedFood = [
        {
            'name' :'Đồ tráng miệng 1',
            'price' : 10,
            'amount': 0
        },
        {
            'name' :'Đồ tráng miệng 2',
            'price' : 15,
            'amount': 0
        },
        {
            'name' :'Đồ tráng miệng 3',
            'price' : 22,
            'amount': 10
        },
        {
            'name' :'Món chính 1',
            'price' : 29,
            'amount': 20
        },
        {
            'name' :'Món chính 2',
            'price' : 33,
            'amount': 3
        },
        {
            'name' :'Món chính 3',
            'price' : 61,
            'amount': 5
        }
    ]
    let countSTT = 0 ;
    // JSON.parse(localStorage.getItem('MyListBook'))
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
            let total = row.insertCell(-1);
            total.innerHTML = selectedFood[index].price * selectedFood[index].amount;
        }
        
    }
}