// Grapping elements by Variables
let myCatalog = document.querySelector("#my-catalog");
var button = document.getElementById("btn");
var data = document.querySelectorAll(".content");


// Event to add items to catalog
button.addEventListener("click",function(){
    details = data.value;
    const products = [];
    products.push(
        {
        id: 1,
        name: "Air Conditioner",
        price: 35000,
        description: "This is very good device especially for summer season"
        },
        {
        id: 2,
        name: "wahing Machine",
        price: 25000,
        description: "This is very good machine for your hands"
        },
        {
        id: 3,
        name: "Sewing Machine",
        price: 10000,
        description: "This is very good machine for your clothes"
        }
    );
    products.forEach((product, index) => {
        myCatalog.innerHTML += `
        <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
    </div>`

});


console.log(products);
});
// const products = [

//     {
//         id: 1,
//         name: "Washing Machine",
//         des: "This is very good machine for your hands",
//         price: 12000,
//         img: "https://img.freepik.com/premium-vector/vector-realistic-washing-machine-white-3d-mockup_208581-782.jpg"
//     },
//     {
//         id: 2,
//         name: "Sewing Machine",
//         des: "This is very good machine for your clothes",
//         price: 5000,
//         img: "https://media.istockphoto.com/id/959213240/photo/household-sewing-machine-accessories-fabric-under-presser-foot.jpg?s=612x612&w=0&k=20&c=SVWZmhRk1GmPncFtTdJvfxa1JwWUUFoUzWanIsdmK7c="
//     },
//     {
//         id: 3,
//         name: "Air Conditioner",
//         des: "This is very good device especially for summer season",
//         price: 35000,
//         img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEBQEGB//EADAQAAIBAgIIBQIHAAAAAAAAAAABAgMRBBIFEyExUpGS0UFRVGFxMoEGIkJiobHB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHI/EE6kIUVTk0m22lK17brmDQ+IxdbCRnjYxpVrvNCnVzpeW34OnpuOZUfZsyU9iA205u31S5mmE35swwnYujUA3RZIyxqliqIC4i2VuoiuVQCc5+5ROT83zPHPbtZ8poyGkVpanKvHEKneWZyvl3P/QPoqs5eE5L7nWpu9OLe9pHHqbUdiH0R+EBi0sm40rJva9yMMYz8IT6WdivT1kY23xd0YZpKcs2Gpz275Wv/QFKjPglyZJKfBLkStTe/B0eS7HuWj6Kj0rsB4nUX6JciSlPglyI5KPoqHSuw1eH9DQ6Y9gJOc+CXIi3PglyGTD+hodK7DJRW7A0OmPYCP5+CXIi1PglyLGqTd3g6L+UuxLNHwwlL+OwFDv4pr7HXpSUqcJLc0mc97aVSCp5M/gty2WOhRVqMF+1ATKqtJS2otAGXVDVGqwsBl1Xse6o02FgM2qGqNNhYDNqhqjTYWAzar2NEVaKXse2AAAAAAAAAAAAAAAAAH//2Q=="
//     },
//     {
//         id: 4,
//         name: "Air Conditioner",
//         des: "This is very good device especially for summer season",
//         price: 35000,
//         img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEBQEGB//EADAQAAIBAgIIBQIHAAAAAAAAAAABAgMRBBIFEyExUpGS0UFRVGFxMoEGIkJiobHB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHI/EE6kIUVTk0m22lK17brmDQ+IxdbCRnjYxpVrvNCnVzpeW34OnpuOZUfZsyU9iA205u31S5mmE35swwnYujUA3RZIyxqliqIC4i2VuoiuVQCc5+5ROT83zPHPbtZ8poyGkVpanKvHEKneWZyvl3P/QPoqs5eE5L7nWpu9OLe9pHHqbUdiH0R+EBi0sm40rJva9yMMYz8IT6WdivT1kY23xd0YZpKcs2Gpz275Wv/QFKjPglyZJKfBLkStTe/B0eS7HuWj6Kj0rsB4nUX6JciSlPglyI5KPoqHSuw1eH9DQ6Y9gJOc+CXIi3PglyGTD+hodK7DJRW7A0OmPYCP5+CXIi1PglyLGqTd3g6L+UuxLNHwwlL+OwFDv4pr7HXpSUqcJLc0mc97aVSCp5M/gty2WOhRVqMF+1ATKqtJS2otAGXVDVGqwsBl1Xse6o02FgM2qGqNNhYDNqhqjTYWAzar2NEVaKXse2AAAAAAAAAAAAAAAAAH//2Q=="
//     },

// ]

// for img:<img height="50%" width="50%" src=${product.img} alt="">
