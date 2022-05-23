var numArray = [];


// --------------------------------------------
// Thêm Số vào mảng.
document.getElementById('themSo').onclick = function themSo() {
  var num = Number(document.getElementById('nSo').value);
  numArray.push(num);
  
  document.getElementById('soDaNhap').innerHTML = 'Số đã nhập là: ' + numArray;

  // console.log(num);
  // console.log(typeof(num));

  // console.log(numArray);
}


//Bài 1: Tổng các số dương trong mảng.
document.getElementById('btntongSoDuong').onclick = function() {
  var tong = 0;
  for(var i = 0; i < numArray.length; i++)
    if(numArray[i] > 0){
      // console.log('Số dương: ' + numArray[i]);
      tong += numArray[i];
    }
    document.getElementById('ketQua').innerHTML = 'Tổng số dương là: ' + tong + '.';
}


// --------------------------------------------
//Bài 2: Có bao nhiêu số dương trong mảng.
document.getElementById('btndemSoDuong').onclick = function() {
  var count = 0;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] > 0){
      // console.log('Số dương: ' + numArray[i]);
      count++;
    }
  }
  document.getElementById('ketQua').innerHTML = 'Số lượng số dương trong mảng là: ' + count + '.';
}


// --------------------------------------------
//Bài 3: Tìm số nhỏ nhất trong mảng.
document.getElementById('btnsoNhoNhat').onclick = function() {
  var min = numArray[0];
  for(var i = 1; i < numArray.length; i++) {
    if(min > numArray[i]){
      min = numArray[i];
    }
  }
  document.getElementById('ketQua').innerHTML = 'Số nhỏ nhất trong mảng là: ' + min;
}


// --------------------------------------------
//Bài 4: Tìm số dương nhỏ nhất trong mảng.
document.getElementById('btnsoDuongNhoNhat').onclick = function() {
  var minDuongArray = [];
  for(var i = 0; i < numArray.length; i++){
    if(numArray[i] > 0){
      minDuongArray.push(numArray[i]);
    }
  }
  var minDuong = minDuongArray[0];
  for(var j = 1; j < minDuongArray.length; j++){
    if(minDuong > minDuongArray[j]){
      minDuong = minDuongArray[j];
    }
  }
  document.getElementById('ketQua').innerHTML = 'Số dương nhỏ nhất trong mảng là : ' + minDuong;
}


// --------------------------------------------
//Bài 5: Tìm số chẵn cuối cùng trong mảng, nếu k có thì trả về -1.
document.getElementById('btnSoChanCuoiCung').onclick = function() {
  var soChanCC = -1;

  for(var i = (numArray.length - 1); i >= 0; i--) {
    if(numArray[i] % 2 == 0 && numArray[i] != 0){
      soChanCC = numArray[i];
      break;
    }
  }
  document.getElementById('ketQua').innerHTML = soChanCC;
}


// --------------------------------------------
//Bài 6: Đổi giá trì 2 vị trí trong mảng.
document.getElementById('btnDoiViTri').onclick = function() {
  var vt1 = Number(document.getElementById('viTri1').value);
  var vt2 = Number(document.getElementById('viTri2').value);

  var temp = numArray[vt1];
  numArray[vt1] = numArray[vt2];
  numArray[vt2] = temp;

  document.getElementById('ketQua').innerHTML = 'Mảng sau khi đổi là : ' + numArray;
}


// --------------------------------------------
//Bài 7: Sắp xếp mảng tăng dần.
document.getElementById('btnSoTangDan').onclick = function() {
  for(var i = 0; i < numArray.length; i++) {
    for(var j = 0; j < numArray.length - 1; j++) {
      if(numArray[j] > numArray[j+1]){
        var temp = numArray[j];
        numArray[j] = numArray[j+1];
        numArray[j+1] = temp;
      }
    }
  }
  document.getElementById('ketQua').innerHTML = 'Mảng sau khi sắp xếp : ' + numArray;
}


// --------------------------------------------
//Bài 8: Tìm số nguyên tố đầu tiên trong mảng, nếu k có thì trả về -1.
document.getElementById('btnTimSoNT').onclick = function() {
  var soNT = -1;
  var count = -1;

  for(var i = 0; i < numArray.length; i++){
    for(var j = 1; j <= numArray[i]; j++) {
      if(numArray[i] % j == 0){
        count++;
      }
    }
    if(count == 1){
      soNT = numArray[i];
      break;
    }else{
      count = -1;
    }
  }
  document.getElementById('ketQua').innerHTML = soNT; 
}


// --------------------------------------------
//Bài 9: Đếm có bao nhiêu số nguyên.
document.getElementById('btnDemSoNguyen').onclick = function() {
  var soNguyenArray = [];

  var number = Number(document.getElementById('nSo').value);
  soNguyenArray.push(number);

  var count = 0;

  for(var i = 0; i < soNguyenArray.length; i++) {
    if(Number.isInteger(soNguyenArray[i])){//Number.isInteger() <- Hàm có sẵn @@!
      count++;
    }
  }
  document.getElementById('ketQua').innerHTML = 'Số lượng số nguyên trong mảng là : ' + count;
}


// --------------------------------------------
//Bài 10: So sánh số lượng số âm vs số dương.
document.getElementById('btnSSAmDuong').onclick = function() {
  
  var soDuong = 0;
  var soAm = 0;

  var kQ = document.getElementById('ketQua');

  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] > 0){
      soDuong++;
    }else{
      soAm++;
    }
  }
  
  if(soDuong > soAm){
    kQ.innerHTML = 'Số Dương lớn hơn Số Âm';
  }else if(soAm > soDuong){
    kQ.innerHTML = 'Số Âm lớn hơn Số Dương';
  }else{
    kQ.innerHTML = 'Số Âm bằng Số Dương';
  }
}
