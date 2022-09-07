// // bai 1

// (function IIFE() {
//   function foo(x) {
//     var y = x * 2;
//     return function bar(z) {
//       if (z.length > 3) {
//         return z.map(function baz(v) {
//           if (v > 3) return v + y;
//           else return baz(v * 4);
//         });
//       } else {
//         var obj = [];
//         setTimeout(
//           function bam() {
//             obj.length = 1;
//             obj[0] = this.w;
//           }.bind(this),
//           100
//         );
//         return obj;
//       }
//     };
//   }
//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);

//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);
//   setTimeout(function () {
//     console.log(
//       list1[0] ===
//         list2.reduce(function (s, v) {
//           return s + v;
//         }, 0)
//     );
//   }, 200);
// })();

// bai 2

// var x = 2,
//   fns = [];
// (function () {
//   var x = 5;
//   for (var i = 0; i < x; i++) {
//     // ...
//     fns[i] = () => 4;
//     return 4;
//   }
// })();

// // anonymous function - function không tên
// // iife - imediate invoking function expression ( Ngay lập tức thực thi biểu thức function)
// // cho function vào trong ngoặc

// console.log(x * 2); // 4
// fns[x * 2](); // Phần tử có indexx là 4 của mảng fns phải là một function trả về giá trị 4

// // DO NOT MODIFY BELOW CODE
// console.log(x * 2 === fns[x * 2]());
// true

// bai 3

// function foo(result) {
//   return result;
// }
// function bar() {
//   var a1 = [2, 4];
//   var a2 = [6, 8, 10, 12];
//   var result = [...a1, ...a2];
//   result.splice(1, 2);
//   return foo(result);
// }
// // DO NOT MODIFY BELOW CODE
// console.log(bar().join("") === "281012");
// true

// bai 4

function ajax(url, cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12,
    },
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14,
  },
};

// YOUR CODE HERE
function reponse(data) {
  // Xây data gồm các trường giống trong phần console.log(56 === data...);
  // Sử dụng spread operator
  let newData = {
    ...data,
    ...defaults,
    foo: 2,
    bam: {
      qam: 14,
      qux: 12,
    },
  };
  console.log(newData);
  check(newData); // true
}

// // DO NOT MODIFY
ajax("http://fun.tld", reponse);

// bai 5
// function upper(trings, ...values) {
//   var name = "Nguyen Van A",
//     account = "ANV",
//     classname = "Fresher FrontEnd";
//   console.log(
//     `Hello (@ ), welcome to the !!!` ===
//       "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
//   );
// }
