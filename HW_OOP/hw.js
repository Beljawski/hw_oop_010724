// 1) В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.
// 2) Создайте класс Object2. в котором будет определен статический метод entries().
// Метод должен будет получить в качестве аргумента объект и вернуть результат, аналогичный результату работы метода Object.entries(). 
// В решении использовать методы объекта Object нельзя. 

// * Доп задание 
// К данному классу добавьте метод asign(), который будет реализован по такому же принципу, как вышеуказанный метод. Перед выполнением необходимо разобраться в особенностях работы метода.

// Входные данные:

class Permissions {
    constructor() {
        this.create = false;
        this.read = true;
        this.update = false;
        this.remove = false;
    }
}

class Users extends Permissions {
    constructor(name) {
        super();
        this.name = name;
    }
}

class Object2 {
    static entries(object) {
        let result = [];
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                result.push([key, object[key]]);
            }
        }
        return result;
    }

    static assign(target, ...sources) {
        sources.forEach(source => {
            for (const key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        });
        return target;
    }
}


let user1 = new Users("Maria");
let user2 = new Users("Tigran");
let user3 = new Users("David");


let obj = Object2.assign({},user1, user2, user3);


console.log(obj);





// Задача: Пользователи и Премиум-пользователи
// Создайте систему классов для управления пользователями и премиум-пользователями с различными функциями.

// Требования к классу User
// Свойства класса User:
// username (строка): Имя пользователя.
// email (строка): Электронная почта пользователя.
// isLoggedIn (логическое значение): Флаг, указывающий, что пользователь вошел в систему. Изначально false.
// Методы класса User:
// login(): Метод должен установить isLoggedIn в true и возвращать строку "User <имя пользователя> logged in".
// logout(): Метод должен установить isLoggedIn в false и возвращать строку "User <имя пользователя> logged out".
// updateEmail(newEmail): Метод должен обновить email пользователя на newEmail и возвращать строку "User <имя пользователя> updated email to <новый email>".


// Требования к классу PremiumUser
// Свойства класса PremiumUser:
// Должен наследовать все свойства класса User.
// subscriptionEndDate (объект Date): Дата окончания подписки премиум-пользователя.

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.isLoggedIn = false;
    }

    login() {
        this.isLoggedIn = true;
        return `User ${this.username} logged in`;
    }

    logout() {
        this.isLoggedIn = false;
        return `User ${this.username} logged out`;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
        return `User ${this.username} updated email to ${this.email}`;
    }
}

class PremiumUser extends User {
    constructor(username, email) {
        super(username, email);
        this.subscriptionEndDate = new Date();
    }

    accessPremiumContent() {
        return `Accessing premium content for user ${this.username}`;
    }

    extendSubscription(days) {
        const currentEndDate = this.subscriptionEndDate;
        currentEndDate.setDate(currentEndDate.getDate() + days);
        this.subscriptionEndDate = currentEndDate;
        return `Subscription extended by ${days} days`;
    }

    viewSubscriptionStatus() {
        return `Subscription for user ${this.username} ends on ${this.subscriptionEndDate}`;
    }
}


let user4 = new User("maria", "mar@gmail.com");
console.log(user4.login());
console.log(user4.logout());
console.log(user4.updateEmail("ttt@gmail.com"));
console.log(user4);


let premiumUser = new PremiumUser("Oleg", "oleg@gmail.com");
console.log(premiumUser);
console.log(premiumUser.accessPremiumContent());
console.log(premiumUser.extendSubscription(30));
console.log(premiumUser.viewSubscriptionStatus());



