// 1. find va findIndex metodlari bo‘yicha masalalar

// 1-misol

// Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.

// let number = [11, 10, 143, 20, 203, 30, 35]

// let res = number.find(value => {
//     return value % 5 == 0;
// })
// console.log(res);

// =====================

// 2-misol

// Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.

// let number = [2, 2, 5, 6, 4, 20, 33, 77]

// let res = number.find(value => value  < 20 && value % 2 == 1 )

// console.log(`index: ${number.indexOf(res)}\nvalur: ${res}`);

// =====================

// 3-misol

// Massiv ichida 0 bilan tugaydigan birinchi elementni toping.

// const number = [23, 10, 0, 20, 34, 40]

// let res = number.find(value => {
//     return value.toString().includes('0')
// })
// console.log(res);

// =====================

// 2. some metodi bo‘yicha masalalar

// 1-misol

// Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.

// const number = [30, 10, 70, 50, 10, 20];

// let res = number.some(value => {
//     if (value % 50 == 0 || value > 50) {
//         console.log("bu yerda ikkalasi ham bajarilgan");
//         return true
//     }
//     else {
//         console.log(`bu yerda bittsai bajarilmagan bo'lsishi mumkin yoki ikkalasi ham ${number}`);
//         return false
//     }
// })
// domla nu misolni to'liq ishlay olmadim darsda tushunib olaman qolganini

// =====================

// 2-misol

// Massivda manfiy sonlar bor-yo‘qligini aniqlang.

// const number = [1, 2, -3, 5, 6, 7, -3]

// let res = number.some(value => {
//     if (value < 0) {
//         console.log("bu massivda manfiy sonlar bor");
//         return true
//     }
//     else {
//         console.log("bu massivda manfiy son yo'q");
//         return false
//     }
// })

// =====================

// 1-misol

// Massivdagi barcha sonlar musbat ekanligini tekshiring.

// let number = [1, 2, -3, 4, 5, -6, 7, 8, 9]

// let res = number.every(value => {
//     return value > 0})

// if (res) {
//     console.log("bu massivda musbat sonlar bor");
// }
// else {
//     console.log("bu massivda esa manfiy sonlar bor");
// }

// =====================

// 2-misol

// Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.

// const number = [1, 60, 4, 6, 7, 8, 60]

// let res = number.every(value => {
//     return value > 10})

// if (res) {
//     console.log("bu massivda barcha sonlar 10 dan katta");
// }
// else {
//     console.log("bu massivda esa 10 dan kotta bo'lmagan sonlar bor");
// }

// =====================

// 3-misol

// Massivdagi barcha sonlar toq ekanligini aniqlang.

// let number = [1, 7, 3, 9, 5]
// let number = [2, 4, 6, 8, 10]

// let res = number.every(value => {
//     return value % 2 == 1});

// if (res) {
//     console.log("bu yerda massivdagi hamma sonlar toq");
// }
// else {
//     console.log("bu yerda esa hamma sonlar toq emas");
// }

// =====================

// 1. charAt

// 1-misol

// Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.

// function text(texts) {
//     return texts.toString().charAt('2')
// }
// let element = ["el!ment"]
// let elements = text(element)
// console.log(elements);

// =====================

// 1-misol

// Matnning oxiridan ikkinchi belgisini toping.

// function texts(text) {
//     let str = text.toString();
//     return str.charAt(str.length -3)
// }

// let element = ["Hello"]
// let elements = texts(element)
// console.log(elements);

// =====================

// 2. charCodeAt

// 1-misol

// Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.

// let text = "WORLD"
// let matn = text.charCodeAt(0);
// console.log(matn);

// =====================

// 2-misol

// Matnning beshinchi belgisining Unicode qiymatini toping.

// let matn = "ananas"
// let matn2 = matn.charCodeAt(5)
// console.log(matn2);

// =====================

// slice

// 1-misol

// Berilgan matndan birinchi 5 ta belgini ajratib oling.

// let matn = ["element"]
// let matn2 = matn.toString().slice(0, 5)
// console.log(matn2);

// =====================

// 2-misol

// Matnning oxirgi 3 ta belgisini ajratib oling.

// let matn = ["element"]
// let matn2 = matn.toString().slice(-3)
// console.log(matn2);

// =====================

// 4. substring

// 1-misol

// Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.

// let matn = ["element, non, salom"]
// let matn2 = matn.toString().substring(8, 12)
// console.log(matn2);

// =====================

// 2-misol

// Matnning oxirgi uchta belgisini substring yordamida oling.

// let matn = ["element, non, salom"]
// let matn2 = matn.toString().substring(17, 19)
// console.log(matn2);

// =====================

// 5. substr

// Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.

// let matn = ["helloworld"]
// let matn2 = matn.toString().substr(4, 5)
// console.log(matn2);

// =====================

// 2-misol

// Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.

// let matn = ["mehanizatsiyalashtirilgan"]
// let matn2 = matn.toString().substr(0, 7);
// console.log(matn2);

// =====================

// 6. toUpperCase, toLowerCase

// 1-misol

// Berilgan matnni faqat katta harflar bilan yozing.

// let matn = ["Hello"]
// let matn2 = matn.toString().toUpperCase()
// console.log(matn2);

// =====================

// 2-misol

// Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.

// let matn = ["HELLOworld"];
// let text = matn[0];

// let matn2 = Math.floor(text.length / 2);
// let first = text.substring(0, matn2).toLowerCase();
// let second = text.substring(matn2).toUpperCase();
// let texts = first + second;
// console.log(texts);

// =====================

// 7. concat

// 1-misol

// Berilgan ikkita matnni birlashtiring.

// function binder(number, number2) {
//     return number.concat(number2)
// }
// let matn1 = ["Salom"]
// let matn2 = ["Dunyo"]
// console.log(binder(matn1, matn2));

// =====================

// 2-misol

// function binder(text1) {
//     return text1.concat()
// }
// let matn1 = ["Salom"]
// console.log(binder(matn1 + "!"));

// =====================

// 8. trim, trimStart, trimEnd

// 1-misol

// Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.

// function binder(text) {
//     return text.map(value => value.trim())
// }
// let fruit = [" olma ", " banan "]
// console.log(binder(fruit));

// =====================

// 2-misol

// Matnning faqat boshidagi bo‘sh joylarni olib tashlang.

// function binder(text) {
//     return text.map(value => value.trimStart())
// }
// console.log(binder([" apelsin ", " nok "]));

// =====================

// 9. padStart, padEnd

// 1-misol

// Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.

// function binder(text) {
//     return text.map(value => value.padStart(value.length + 10, "*" ))
// }
// console.log(binder(["HelloWorldBanana"]));

// =====================

// 2-misol

// Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.

// function binder(text) {
//     return text.map(value => value.padEnd(value.length + 15, "#"));
// }

// console.log(binder(["HelloWorldBanana"]));

// =====================

// 10.repeat

// Matnni 3 marta takrorlab yangi matn yarating.

// 1-misol

// function binder(text) {
//     return text.map(value => value.repeat(3));
// }

// console.log(binder(["HelloWorld"]));

// =====================

// 2-misol

// Belgini 5 marta takrorlab, string yaratib oling.

// function binder(text) {
//     return text.repeat(5);
// }

// console.log(binder("*"));

// =====================

// 11. replace, replaceAll

// 1-misol

// Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.

// function binder(text) {
//     return text.toString().replace("a", "o");
// }

// console.log(binder(["anor"]));

// =====================

// 2-misol

// Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.

// function binder(text) {
//     return text.toString().replace(/ /g, "_");
// }

// console.log(binder(["anor olma anjir"]));

// =====================

// 12. split

// 1-misol

// Matnni har bir so‘zdan ajratib massivga aylantiring.

// function binder(text) {
//     return text.toString().split(" ");
// }

// console.log(binder(["anor olma anjir"]));

// =====================

// 2-misol

// Matnni har bir belgidan ajratib massiv yarating.

// function binder(text) {
//     return text.toString().split("");
// }

// console.log(binder("anor olma anjir"));

// =====================

// 13. indexOf, lastIndexOf

// 1-misol

// Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.

// function binder(text) {
//     return text.indexOf("a");
// }

// console.log(binder("banana"));

// =====================

// 2-misol

// Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.

// function binder(text) {
//     return text.lastIndexOf("e");
// }

// console.log(binder("elephant"));

// =====================

// includes

// 1-misol
// Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.

// function binder(text) {
//     return text.indexOf("hello") !== -1;
// }

// console.log(binder("hello, how are you"));

// =====================

// 2-misol
// Matn ichida "!" belgisi mavjudligini aniqlang.

// function binder(text) {
//     return text.indexOf("!") !== -1;
// }

// console.log(binder("Olma!"));

// =====================

// search

// 1-misol

// Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.

// function binder(text) {
//     return text.toString().search("good")
// }
// console.log(binder(["good morning"]));

// =====================

// Massiv ichida obyektlar

// 1. users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// users.filter((user)=> {
//     if(user.age > 25){
//         console.log(user);
//     }
// })

// =====================

// 2-misol

// products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.

// let products = [
//     { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//     { id: 102, name: "Phone", price: 500, rating: 4.2 },
//     { id: 103, name: "Tablet", price: 300, rating: 4.8 }
// ];

// products.filter(value => {
//     if (value.price > 500) {
//         console.log(value);
//     }
// })

// =====================

// 3-misol

// . tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.

// let tasks = [
//     { id: 1, title: "Do homework", status: "completed" },
//     { id: 2, title: "Clean room", status: "pending" },
//     { id: 3, title: "Go shopping", status: "pending" }
// ];

// let arr = []

// let res = tasks.map(value => {
//     if (value.status == "pending") {
//         console.log(value);
//     }
// })

// =====================

// 4-misol

// users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// let sum = 0;

// let res = users.filter(value => {
//     if(value.isActive == true){
//         sum++;
//     }
// })
// console.log(sum);

// =====================

// 5-misol

// products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.

// let products = [
//     { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
//     { id: 102, name: "Phone", price: 500, rating: 4.2 },
//     { id: 103, name: "Tablet", price: 300, rating: 4.8 },
//   ];

//   function binder(products) {
//     let arr = products[0];
//     for (let i = 0; i < products.length; i++) {
//       if (products[i].price < arr.price) {
//         arr = products[i];
//       }
//     }
//     return arr;
//   }

//   console.log(binder(products));

// =====================

// 6-misol

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// let result = users.map(user => ({ name: user.name, age: user.age }));
// console.log(result);

// =====================

// 8-misol

// tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.

// let tasks = [
//     { id: 1, title: "Do homework", status: "completed" },
//     { id: 2, title: "Clean room", status: "pending" },
//     { id: 3, title: "Go shopping", status: "pending" }
// ];

// let index = tasks.findIndex(task => task.title === "Clean room");

// console.log(index);

// =====================

// 9-misol

// users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.

// let users = [
//     { id: 1, name: "Ali", age: 25, isActive: true },
//     { id: 2, name: "Bobur", age: 30, isActive: false },
//     { id: 3, name: "Zara", age: 22, isActive: true }
// ];

// let yoshlar = 0;
// for (let i = 0; i < users.length; i++) {
//     yoshlar += users[i].age;
// }

// console.log(yoshlar);

// =====================

// 10-misol

// products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.

let products = [
    { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
    { id: 102, name: "Phone", price: 500, rating: 4.2 },
    { id: 103, name: "Tablet", price: 300, rating: 4.8 }
]

let binder = products.map(function (product) {
    return {
        id: product.id,
        name: product.name,
        price: product.price * 0.10,
        rating: product.rating
    }
})

console.log(binder)

