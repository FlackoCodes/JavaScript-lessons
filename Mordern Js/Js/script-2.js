
const library = [
    {
        title: 'Young Sheldon',
        author: 'Sheldon Cooper',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Breaking Bad',
        author: '',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Super Bad',
        author: 'Seth',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]


// destructuring the array --> changing the title to firstBook

const {title : firstBook} = library[0];
console.log(firstBook);

// turn the library object into a JSON string

const jsonObject = JSON.stringify(library)

library.forEach(element => {
    element.status.reading = true;
});

console.log(library);
console.log(jsonObject)