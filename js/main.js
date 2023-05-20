//Hopefully this will be my main javascript file for the final project. Hoping to learn more from the course to make someful useful for a store webpage.

//Creating a class and constructor function to create all products
class Product {
    constructor(id, stock, description, code, price) {
        this.id = id
        this.stock = stock
        this.description = description
        this.code = code
        this.price = price
    }
}

//Creating all products
const products = [
    new Product(1, 1, "Base de enfriamiento UNNO TEKNO portatil de 5 niveles", "201836", 24),
    new Product(2, 2, "Adaptador HDMI macho VGA hembra", "201306", 9),
    new Product(3, 2, "Cable HDMI - HDMI 4.5 Mts", "202819", 9),
    new Product(4, 4, "Case enclosure USB 3.0", "ST-CD01", 13),
    new Product(5, 1, "Case Spidertec S31", "206260", 72),
    new Product(6, 2, "SSD Crucial de 240", "201792", 30),
    new Product(7, 1, "SSD Kingston de 480", "201329", 47),
    new Product(8, 1, "SSD PNY CS900 de 250 GB SATA 3", "206330", 29),
    new Product(9, 6, "Fuente Spidertec", "206263", 21),
    new Product(10, 2, "Mouse Lenovo USB 1600", "206009", 12),
    new Product(11, 1, "Targus Maletín Slipcase Sport 16'", "CVR200", 41),
    new Product(12, 2, "ARKTEK MEM 8GB DDR4 3200Mhz", "", 52),
    new Product(13, 1, "HP Memoria S1 8GB DDR4 2666Mhz SODIMM CL19", "7EH98AA", 52),
    new Product(14, 1, "HIKVISION Memoria DDR4 8GB 2666Mhz SODIMM CL19 260 Pines", "HKED4082CBA1D0ZA1", 48),
    new Product(15, 2, "Targus Mouse Óptico Size Alámbrico 3 Botones", "AMU81USZ", 12),
    new Product(16, 0, "Toners CF258A Venspeed", "CF258A", 124),
]

search = prompt("What product are you interested in?");
const products_find = products.filter((item) => item.description.includes(search));

let resultMessage = "We found the following products:\n";

if (products_find.length > 0) {
    products_find.forEach((product) => {
        resultMessage += `ID: ${product.id}, Description: ${product.description}, Price: ${product.price}\n`;
    });
} else {
    resultMessage = "No products found.";
}

alert(resultMessage);