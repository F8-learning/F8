/* let colors = ["Red", "Green", "Blue"]

Array.prototype.forEach2 = function (callback, thisArg){
    const lenght = this.length;
    for (let i = 0; i < lenght; i++){
        callback.call(thisArg, this[i], i, this)
    }
   console.log("Hwllo")
};

colors.forEach2(function (color, index){
    console.log("this is here: ", this);
}, colors) */

// console.log(Array.prototype)

// Fnc Map()
Array.prototype.customMap = function(callback) { // gán cho tất cả array fnc customMap
    let result = [];
    let length = this.length; // giảm "độ phức tạp" của code khi thực thi mỗi lần vòng lặp chạy
    for (let i = 0; i < length; i++) {
      /* result.push(callback(this[i], i)); // thêm element vào cuối mảng */
      result.push(callback(this[i], i)); // push callback fnc vào chuỗi (rỗng) result
    }
    return result;
  };
  
  // callback()
  // Nhân đôi từ giá trị chuyền vào
  let numbers = [1, 2, 3]; 
  const double = numbers.customMap(function(number) {
    return number * 2;
  });
  console.log("Nhân đôi :", double); // [2, 4, 6]

  
  // Nhân đôi từ giá trị chuyền cộng thêm 2
  let plus2 = double.customMap(function(number){
    return number + 2;
  })
  console.log("(Nhân đôi) + 2 : ",plus2); // [4, 6, 8]


// Nhân đôi từ giá trị chuyền vào cộng thêm 4
  let plus4 =  double.customMap(function(number){
    return number + 4
  })
  console.log("(Nhân đôi) + 4 : ", plus4); // [6, 8, 10]




// Fnc forEach()
Array.prototype.customForEach = function(callback) {
    let lenght = this.length;
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i); // this[i] chuyền vào element, i Chuyền cho index
    }
  };
  
  // customForEach()
  const fruits = ["apple", "durian", "jakfruit"];
  fruits.customForEach(function(element, index) {
    console.log(index + ": " + element);
  });


  Array.prototype.customIndexOf = function(searchFor) {
    let length = this.length;
    for (let i = 0; i < length; i++) {
      if (this[i] === searchFor) {
        return i;
      }
    }
    return "Ko có trong mảng";
    
        /* (this[i] === searchFor) ?  i :  -1; 
            - Lỗi vì ternany ko return đc = undefined !!!
        */


};
  
  // Test
  const colors = ["Red", "Green", "Blue"];
  console.log("Tìm thấy ở index: ",colors.customIndexOf("Red")); // 1
  console.log("Tìm thấy ở index: ",colors.customIndexOf("Green")); // -1
