
let numberArr = [];

function getInputNumbers() {
    const input = document.getElementById("numbers").value;
    if (input.trim() === "") {
        alert("Vui lòng nhập các số nguyên cách nhau bằng dấu phẩy.");
        return [];
    }
    return input.split(",").map(Number);
}

///////////////////////////////////////////////////////////////////////////////

//Tổng các số dương trong mảng. 

function tongsoDuong() {
    numberArr = getInputNumbers();
    let ketQua = numberArr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
    document.getElementById("result-text").innerText = `Tổng số dương: ${ketQua}`;
}

//Đếm có bao nhiêu số dương trong mảng.
function demsoDuong() {
    numberArr = getInputNumbers();
    let demSoDuong = numberArr.filter(num => num > 0).length;
    document.getElementById("result-text").innerText = `Số lượng số dương: ${demSoDuong}`;
}

//Tìm số nhỏ nhất trong mảng.
function timsonhoNhat() {
    numberArr = getInputNumbers();
    let min = Math.min(...numberArr);
    document.getElementById("result-text").innerText = `Số nhỏ nhất: ${min}`;
}

//Tìm số dương nhỏ nhất trong mảng.
function timsoDuongnhonhat() {
    let numberArr = getInputNumbers();
    // let soDuongNhoNhat = Math.min(numberArr.filter(num => num > 0));
    let soDuongArr = numberArr.filter(num => num > 0);
    let soDuongNhoNhat = Math.min(...soDuongArr);
    document.getElementById("result-text").innerText = `Số dương nhỏ nhất: ${soDuongNhoNhat}`;
}

//Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function timsoChancuoicung() {
    numberArr = getInputNumbers();
    let soChanCuoiCung = -1;
    for (let i = numberArr.length - 1; i >= 0; i--) {
        if (numberArr[i] % 2 === 0) {
            soChanCuoiCung = numberArr[i];
            break;
        }
    }
    document.getElementById("result-text").innerText = `Số chẵn cuối cùng: ${soChanCuoiCung}`;
}

//Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
function doiCho2giatri() {
    numberArr = getInputNumbers();
    let index1 = prompt("Nhập vị trí thứ nhất:");
    let index2 = prompt("Nhập vị trí thứ hai:");

    if (index1 < numberArr.length && index2 < numberArr.length) {
        let temp = numberArr[index1];
        numberArr[index1] = numberArr[index2];
        numberArr[index2] = temp;

        document.getElementById("result-text").innerText = `Mảng sau khi đổi chỗ: [${numberArr}]`;
    } else {
        alert("Vị trí nhập không hợp lệ.");
    }
}

//Sắp xếp mảng theo thứ tự tăng dần.
function sapXeptang() {
    numberArr.sort((a, b) => a - b);

    document.getElementById("result-text").innerText = `Mảng sau khi sắp xếp tăng dần: [${numberArr}]`;
}

//So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function soSanhamduong() {
    let soLuongSoAm = 0;
    let soLuongSoDuong = 0;

    numberArr.forEach((item) => {
        if (item > 0) {
            soLuongSoDuong++;
        } else if (item < 0) {
            soLuongSoAm++
        }
    });


    if (soLuongSoDuong > soLuongSoAm) {
        document.getElementById("result-text").innerText = `Số lượng số dương (${soLuongSoDuong}) nhiều hơn số âm (${soLuongSoAm})`;
    } else if (soLuongSoAm > soLuongSoDuong) {
        document.getElementById("result-text").innerText = `Số lượng số âm (${soLuongSoAm}) nhiều hơn số dương (${soLuongSoDuong})`;
    } else {
        document.getElementById("result-text").innerText = `Số lượng số dương và số âm bằng nhau (${soLuongSoDuong})`;
    }
};

