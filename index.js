/* ; 1. Создайте класс `Работник`, который будет иметь следующие свойства: `name` (имя), `surname` (фамилия), `rate` (ставка за день работы), `days` (количество отработанных дней). Также класс должен иметь метод `getSalary()`, который будет выводить зарплату работника. Зарплата — это произведение (умножение) ставки `rate` на количество отработанных дней `days`.

; // Вот так должен работать наш класс:  
; var worker = new Worker('Иван', 'Иванов', 10, 31);

; console.log(worker.name); //выведет 'Иван'
; console.log(worker.surname); //выведет 'Иванов'
; console.log(worker.rate); //выведет 10
; console.log(worker.days); //выведет 31
; console.log(worker.getSalary()); //выведет 310 — то есть 10*31  */

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return `${this.rate*this.days} рублей`
    }
}

const worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 — то есть 10*31 



/* 2/ Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:
- создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
- создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
- создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
Объект, с которым вам предстоит работать: */

class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return {
            type: this.type,
            brand: this.brand,
        }
    }

    getPrice() {
        return {
            price: this.price,
        }
    }
}

class Car extends Transport {
    constructor(type, price, brand) {
        super(type, price, brand);
        this.doors = doors;
    }

    getDoorsCount() {
        return {
            doors: this.doors;
        }
    }
}

class Bike extends Transport {
    constructor(type, price, brand) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return {
            maxSpeed: this.maxSpeed;
        }
    }
}


const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];