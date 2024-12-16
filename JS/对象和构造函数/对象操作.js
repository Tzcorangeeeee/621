const obj = {
    name: 'qianguyihao',
    age: 28,
    gender: '男',
    address: 'shenzhen',
    sayHi: function () {
        console.log(this.name);
    },
};


for(let key in obj) {
    console.log(key);
    console.log(obj[key]);
}

console.log(JSON.stringify(obj));