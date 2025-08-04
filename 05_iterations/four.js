const myObject = {
    js: 'javascript',
    cpp: 'c++',
    swift: "swift by apple"

}

// for (const key in myObject) {
//     console.log(myObject[key]);
// }
for (const key in myObject) {                       // object ke uper loop lagana ho too for in loop lagayenge 
    console.log(`${key} shortcut is for ${myObject[key]}}`);
}

const programming = ["js","rb","py","java","cpp"]

for(const key in programming){   // in for in loop it give key of the array 
    console.log(programming[key]);
}

const map  = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('Fr',"France")
map.set('IN',"India")

for(const key in map){   // map are not iteratable by loop 
    console.log(key);
}

