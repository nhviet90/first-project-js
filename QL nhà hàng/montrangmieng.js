let dsMonTrangMieng = [];
// let dsMonTrangMiengThemMoi = [];

let monTrangMieng1 = {
    ten: "Bánh",
    soluong: 100,
    dongia: 10000,
    tonggia: 100000
}

let monTrangMieng2 = {
    ten: "Kem",
    soluong: 100,
    dongia: 12000,
    tonggia: 120000
}

let monTrangMieng3 = {
    ten: "Sữa chua",
    soluong: 50,
    dongia: 5000,
    tonggia: 250000
}



dsMonTrangMieng.push(monTrangMieng1, monTrangMieng2, monTrangMieng3);

printMonTrangMieng();
function printMonTrangMieng() {
    let table = document.getElementById("tableRestaurantDesserts");
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
    for (let index = 0; index < dsMonTrangMieng.length; index++) {
        let row = table.insertRow(index + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        
        cell1.innerHTML = dsMonTrangMieng[index].ten;
        cell2.innerHTML = dsMonTrangMieng[index].soluong;
        cell3.innerHTML = dsMonTrangMieng[index].dongia;
        cell4.innerHTML = dsMonTrangMieng[index].tonggia;
        cell5.innerHTML = "<button onclick='suaMonTrangMieng(" + index + ")'>Sửa</button>";
        if (cell2.innerHTML == 0) {
            cell6.innerHTML = "Hết hàng";
        } else {
            cell6.innerHTML = "Còn hàng";
        }
        
    }
    localStorage.setItem("danhSachMonTrangMieng", JSON.stringify(dsMonTrangMieng));
}

function thongtinMonTrangMieng() {
    return {
        ten: '',
        soluong: 0,
        dongia: 0,
        tonggia: 0
    }
}

function updateDesserts(Desserts, tenMoi, soluong, dongia) {
    Desserts.ten = tenMoi;
    Desserts.soluong = soluong;
    Desserts.dongia = dongia;
    Desserts.tonggia = soluong * dongia;
}

function addDesserts() {
    let D = document.getElementById("newDesserts").value;
    let E = document.getElementById("newDessertsAmount").value;
    let F = document.getElementById("newDessertsPrice").value;
    if ((!D || D.trim().length === 0) || (isNaN(D) == false) || (!E || E.trim().length === 0) || (!F || F.trim().length === 0)) {
        alert("Nhập lại!");
    } else {
        let newDesserts = thongtinMonTrangMieng();
        let tenmonmoi = document.getElementById("newDesserts").value;
        let soluong = document.getElementById("newDessertsAmount").value;
        let dongia = document.getElementById("newDessertsPrice").value;
        updateDesserts(newDesserts, tenmonmoi, soluong, dongia);
        dsMonTrangMieng.push(newDesserts);
        printMonTrangMieng();
        
    }
}

function suaMonTrangMieng(index) {
    index = Number(index);
    let suaTen = prompt("Nhập lại tên món ăn");
    let suaSoLuong = Number(prompt("Nhập số lượng cho món ăn"));
    let suaDonGia = Number(prompt("Nhập đơn giá cho món ăn"));
    dsMonTrangMieng[index].ten = suaTen;
    dsMonTrangMieng[index].soluong = suaSoLuong;
    dsMonTrangMieng[index].dongia = suaDonGia;
    dsMonTrangMieng[index].tonggia = suaDonGia * suaSoLuong;
    printMonTrangMieng();

}



