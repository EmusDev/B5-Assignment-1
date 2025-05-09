
// const test: string = 'test';
// console.log(test)

function formatString(input: string, toUpper?: boolean): string {

    if (typeof input === 'string' && toUpper === true) {
        return (`your result ${input.toLocaleUpperCase()}`)
    }
    else if (typeof input === 'string') {
        return (`your result ${input.toLocaleUpperCase()}`)
    }

    else {
        return (`your result ${input}`)
    }


}


// const result = formatString("hellow")
// console.log(result)


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result = items.filter(item => item.rating >= 4)
    return result

}

const items = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 5.0 }
];

// const result = filterByRating(items);
// console.log(result)

function concatenateArrays<T>(...arrays: T[][]): T[] {

    let result: T[] = [];
    for (const arr of arrays) {
        result = result.concat(arr);
    }
    return result

}

// const result = concatenateArrays(["a", "b"], ["c"]);
// console.log(result)
// const result2 = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(result2)

class Vehicle {
    id?: number;
    name: string;
    private year: number;
    brand: string;
    private make?: string
    constructor(id: number, name: string, year: number, brand: string) {
        this.id = id,
            this.name = name;
        this.year = year
        this.brand = brand
    }
    getInfo() {
        console.log(`${this.name}, ${this.year}, ${this.brand}`)
    }
}

// class Car extends Vehicle {
//     constructor(id, name, year, brand) {
//         super(name)
//         this.id = id,
//         this.year = year,
//         this.brand = brand
//     }
// }



// const myCar = new Car(1, "Toyota", 2020, "Corolla");
// myCar.getInfo();

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else {

        return value * 2
    }
}

// const result = processValue("hello"); 
// console.log(result)
// const result2 = processValue(10); 
// console.log(result2)

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    return products.reduce((max, product) => product.price > max.price ? product : max
    );
}

const products = [
    { name: "Pen", price: 70 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

// const result = getMostExpensiveProduct(products);
// console.log(result); 

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

// console.log(getDayType(Day.Monday));     
// console.log(getDayType(Day.Saturday));   


async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);  
  });
}


// squareAsync(4).then(console.log);         
// squareAsync(-3).catch(console.error);    
