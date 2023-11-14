// Taking fruits to JS
const fruits = [{
    image: 'Picture/apple.jpg',
    name:'Apple',
    price: 45
},
{
    image: 'Picture/pineapple.jpg',
    name: 'Pineapple',
    price: 34
},
{
    image: "Picture/mangos.jpeg",
    name: "Mango",
    price: 50
},
{
    image: "Picture/banana.jpg",
    name: "Banana",
    price: 25
}]
;

let fruits_HTML = '';

fruits.forEach((fruit) => {
    fruits_HTML += `
        <section id="fruits" class="fruits">
                <img src=${fruit.image} height="230" width="230">
                <table>
                    <tr>
                        <td>${fruit.name}</td>
                    </tr>
                    <tr>
                        <td>$${fruit.price}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onclick="
                                {
                                    add_to_cart
                                }
                                ">Add to cart </button>
                        </td>
                    </tr>
                </table>
            </section>` ;


});

console.log(fruits_HTML);
