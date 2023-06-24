function dom(id) {
  return document.getElementById(id);
}

// Nhập số n
let emArr = [];
dom("btnTS").onclick = function () {
  let n = Number(dom("nhapSo").value);
  emArr.push(n);
  dom("themSo").innerHTML = emArr;
};

//Tính tổng
function sum(emArr) {
  var x = emArr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return x;
}
dom("btnTT").onclick = function () {
  dom("tong").innerHTML = sum(emArr);
};

// đếm phân tử
function length(emArr) {
  let length = emArr.length;
  dom("demSo").innerHTML = length;
}

// tìm số nhỏ nhất
function min(emArr) {
  let min = Math.min(...emArr);
  dom("minNumb").innerHTML = min;
}

// Tìm số dương nhỏ nhất
function posMin() {
  let pos = emArr.filter((value, index) => {
    return value >= 0;
  });
  let posMin = Math.min(...pos);
  dom("posMin").innerHTML = posMin;
}

// tìm số chẵn cuối cùng
function lastEven() {
  let evenPos = emArr.filter((value, index) => {
    return value >= 0 && value % 2 == 0;
  });
  let lastEven = evenPos.pop();
  dom("lastEven").innerHTML = lastEven;
}

//  đổi chỗ
function swap() {
  let input1 = dom("spot1").value;
  let input2 = dom("spot2").value;
  let temp = emArr[input1];
  emArr[input1] = emArr[input2];
  emArr[input2] = temp;
  dom("swap").innerHTML = emArr;
}

// Sắp xếp theo thứ tự tăng dần
function sort() {
  emArr.sort(function (a, b) {
    return a - b;
  });
  dom("order").innerHTML = emArr;
}

// Tìm số nguyên tố đầu tiên
function prime() {
  let filterPos = emArr.filter((value, index) => {
    return value >= 0;
  });
  filterPos.sort((a, b) => a - b);

  if (filterPos == 2) {
    dom("prime").innerHTML = "2";
  } else {
    let odd = filterPos.filter((value) => {
      return value % 2 !== 0;
    });
    let minPrime = Math.min(...odd);
    dom("prime").innerHTML = minPrime;
  }
}

//Đếm số nguyên
function integer() {
  let integer = emArr.filter((value) => {
    return Number.isInteger(value);
  });
  let numInt = integer.length;
  dom("integer").innerHTML = "số nguyên: " + numInt;
}

// So sánh số lượng số âm và số dương
function compare() {
  let pos = emArr.filter((value) => {
    return value > 0;
  });
  let nev = emArr.filter((value) => {
    return value < 0;
  });
  if (pos.length < nev.length) {
    dom("compare").innerHTML = "Số dương < Số âm";
  } else if (pos.length > nev.length) {
    dom("compare").innerHTML = "Số dương > Số âm";
  } else {
    dom("compare").innerHTML = "Số dương = Số âm";
  }
}
