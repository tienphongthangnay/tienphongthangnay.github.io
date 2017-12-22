const tienNha = 6000000;
const tienNuoc = 200000;
const phiQuanLy = 300000;
const phiWifi = 150000;
const soTienTrenMoiKyDien = 2650;

var selectSoDienCu = document.querySelector('#soDienCu');
var selectSoDienMoi = document.querySelector('#soDienMoi');
var ketQua = document.querySelector('#ketqua');
var btn = document.querySelector('#tinhtoan')

btn.onclick = function(){
    let soDienCu = parseInt(selectSoDienCu.value);
    let soDienMoi = parseInt(selectSoDienMoi.value);
    let tienDien = (soDienMoi - soDienCu) * soTienTrenMoiKyDien;
    let tienNhaThangNay = tienDien + phiWifi + phiQuanLy + tienNuoc + tienNha;
    ketQua.textContent = `Tiền nhà tháng này là ${numberWithCommas(tienNhaThangNay)}`;
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}