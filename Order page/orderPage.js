let listMonChinh = JSON.parse(localStorage.getItem('dsMonChinh'))
// console.log(JSON.parse(dsMonChinh))
    // {
    //     'name': 'Mon Chinh 1',
    //     'price': 20000,
    //     'amount': 10
    // },
    // {
    //     'name': 'Mon Chinh 2',
    //     'price': 20000,
    //     'amount': 10
    // },
    // {
    //     'name': 'Mon Chinh 3',
    //     'price': 20000,
    //     'amount': 10
    // },
    // {
    //     'name': 'Mon Chinh 4',
    //     'price': 20000,
    //     'amount': 10
    // }

let listMonTrangMieng = JSON.parse(localStorage.getItem('dsMonTrangMieng'))
    // {
    //     'name': 'Mon Trang Mieng 1',
    //     'price': 20000,
    //     'amount': 10
    // },
    // {
    //     'name': 'Mon Trang Mieng 2',
    //     'price': 20000,
    //     'amount': 10
    // },
    // {
    //     'name': 'Mon Trang Mieng 3',
    //     'price': 20000,
    //     'amount': 10
    // },
    // {
    //     'name': 'Mon Trang Mieng 4',
    //     'price': 20000,
    //     'amount': 10
    // }

let selectedFood = [];

for (let index = 1; index <= listMonChinh.length; index++) {
    let button = document.createElement("button");
    button.innerHTML = "Chon so luong";
    button.id = "monChinh" + index;

    let clickButton = document.createAttribute('onclick')
    clickButton.value = "pickMonChinh(" + index + ")";
    button.setAttributeNode(clickButton);
    document.getElementById("monChinh").appendChild(button);

    let input = document.createElement("input");
    input.id = "mon_chinh" + index;
    input.placeholder = "Nhap so luong"

    let nhapInput = document.createAttribute('onkeyup');
    nhapInput.value = "keyPressChinh" + `(${index}, event)`;
    input.setAttributeNode(nhapInput);
    document.getElementById("monChinh").appendChild(input);

    let trangThaiInput = document.createAttribute('style');
    trangThaiInput.value = "display: none";
    input.setAttributeNode(trangThaiInput);
    document.getElementById("monChinh").appendChild(input);

    function pickMonChinh(index) {
        document.getElementById("mon_chinh" + index).style.display = "unset";
        document.getElementById("monChinh" + index).style.display = "none";
    }
    function keyPressChinh(index, event) {
        if (event.keyCode == 13) {
            let soLuongMon = Number(document.getElementById("mon_chinh" + index).value);
            if (soLuongMon > listMonChinh[index - 1].amount) {
                alert('so luong vuot qua gioi han nha hang');   
            } else {
                listMonChinh[index - 1].numberOrder = soLuongMon;
                listMonChinh[index - 1].amountLeft = listMonChinh[index - 1].amount - listMonChinh[index - 1].numberOrder;
                selectedFood.push(listMonChinh[index - 1]);
                document.getElementById("mon_chinh" + index).style.display = "none";
                document.getElementById("monChinh" + index).style.display = "unset";
                // console.log(selectedFood);
                // console.log(listMonChinh[index-1])
            }
        }
    }

}
//====================================================================================
for (let index = 1; index <= listMonTrangMieng.length; index++) {
    let button = document.createElement("button");
    button.innerHTML = "Chon so luong";
    button.id = "monTrangMieng" + index;

    let clickButton = document.createAttribute('onclick')
    clickButton.value = "pickMonTrangMieng(" + index + ")";
    button.setAttributeNode(clickButton);
    document.getElementById("monTrangMieng").appendChild(button);

    let input = document.createElement("input");
    input.id = "mon_trang_mieng" + index;
    input.placeholder = "Nhap so luong"

    let nhapInput = document.createAttribute('onkeyup');
    nhapInput.value = "keyPressTrangMieng" + `(${index}, event)`;
    input.setAttributeNode(nhapInput);
    document.getElementById("monTrangMieng").appendChild(input);

    let trangThaiInput = document.createAttribute('style');
    trangThaiInput.value = "display: none";
    input.setAttributeNode(trangThaiInput);
    document.getElementById("monTrangMieng").appendChild(input);

    function pickMonTrangMieng(index) {
        document.getElementById("mon_trang_mieng" + index).style.display = "unset";
        document.getElementById("monTrangMieng" + index).style.display = "none";
    }
    function keyPressTrangMieng(index, event) {
        if (event.keyCode == 13) {
            let soLuongMon = Number(document.getElementById("mon_trang_mieng" + index).value);
            if (soLuongMon > listMonTrangMieng[index - 1].amount) {
                alert('so luong vuot qua gioi han nha hang');
            } else {
                listMonTrangMieng[index - 1].numberOrder = soLuongMon;
                listMonTrangMieng[index - 1].amountLeft = listMonTrangMieng[index - 1].amount - listMonTrangMieng[index - 1].numberOrder;
                selectedFood.push(listMonTrangMieng[index - 1]);
                document.getElementById("mon_trang_mieng" + index).style.display = "none";
                document.getElementById("monTrangMieng" + index).style.display = "unset";
                // console.log(selectedFood);
                // console.log(listMonTrangMieng[index-1])
            }
        }
    }

}
// let button = document.createElement("button");
// button.innerHTML = "Chọn món xong, mời bạn thanh toán";
// button.id = "thanhToan";

console.log(selectedFood)
// function reset(){
//     if (!Boolean(localStorage.getItem())){
//         localStorage.getItem( '[]');
//     }else{
//         listFood = JSON.parse(localStorage.getItem());
//     }
// }
