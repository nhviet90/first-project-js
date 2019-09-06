let dsMonChinh = [];
// let dsMonChinhThemMoi = [];

let monChinh1 = {
    ten: "Cơm",
    soluong: 10,
    dongia: 30000,
    tonggia: 300000
}

let monChinh2 = {
    ten: "Phở",
    soluong: 20,
    dongia: 30000,
    tonggia: 600000
}

let monChinh3 = {
    ten: "Bánh mỳ",
    soluong: 50,
    dongia: 20000,
    tonggia: 1000000
}



dsMonChinh.push(monChinh1, monChinh2, monChinh3);

printMonAn();
function printMonAn() {
    let table = document.getElementById("tableRestaurantMainFood");
    table.innerHTML = "";
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = "Tên món";
    cell2.innerHTML = "Số lượng";
    cell3.innerHTML = "Đơn giá (vnđ)";
    cell4.innerHTML = "Tổng giá (vnđ)";
    cell5.innerHTML = "Thay đổi";
    cell6.innerHTML = "Tình trạng";
    for (let index = 0; index < dsMonChinh.length; index++) {
        let row = table.insertRow(index + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        
        cell1.innerHTML = dsMonChinh[index].ten;
        cell2.innerHTML = dsMonChinh[index].soluong;
        cell3.innerHTML = dsMonChinh[index].dongia;
        cell4.innerHTML = dsMonChinh[index].tonggia;
        cell5.innerHTML = "<button onclick='suaMonChinh(" + index + ")'>Sửa</button>";
        if (cell2.innerHTML == 0) {
            cell6.innerHTML = "Hết hàng";
        } else {
            cell6.innerHTML = "Còn hàng";
        }
        
    }
    localStorage.setItem("danhSachMonChinh", JSON.stringify(dsMonChinh));
}


function thongtinMon() {
    return {
        ten: '',
        soluong: 0,
        dongia: 0,
        tonggia: 0
    }
}

function updateFood(food, tenMoi, soluong, dongia) {
    food.ten = tenMoi;
    food.soluong = soluong;
    food.dongia = dongia;
    food.tonggia = soluong * dongia;
}

function addFood() {
    let A = document.getElementById("newFood").value;
    let B = document.getElementById("newAmount").value;
    let C = document.getElementById("newPrice").value;
    if ((!A || A.trim().length === 0) || (isNaN(A) == false) || (!B || B.trim().length === 0) || (!C || C.trim().length === 0)) {
        alert("Nhập lại!");

    }
    else {
        let newFood = thongtinMon();
        let tenmonmoi = document.getElementById("newFood").value;
        let soluong = document.getElementById("newAmount").value;
        let dongia = document.getElementById("newPrice").value;
        updateFood(newFood, tenmonmoi, soluong, dongia);


        dsMonChinh.push(newFood);


        printMonAn();
    }
}


function suaMonChinh(index) {
    index = Number(index);
    let suaTen = prompt("Nhập lại tên món ăn");
    let suaSoLuong = Number(prompt("Nhập số lượng cho món ăn"));
    let suaDonGia = Number(prompt("Nhập đơn giá cho món ăn"));
    dsMonChinh[index].ten = suaTen;
    dsMonChinh[index].soluong = suaSoLuong;
    dsMonChinh[index].dongia = suaDonGia;
    dsMonChinh[index].tonggia = suaDonGia * suaSoLuong;
    printMonAn();

}


