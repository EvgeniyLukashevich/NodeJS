## Как установить?
```bash
$ npm install phive_generate_user
```
## Как использовать?
#### Импорт библиотеки в ваш js-файл:
```js
const user = require("phive_generate_user");
```
#### Генерация случайного имени (функция `createFirstName()` возвращает строку):
```js
const userFirstName = user.createFirstName();
```
#### Генерация случайной фамилии (функция `createLastName()` возвращает строку):
```js
const userLastName = user.createLastName();
```
#### Генерация случайной адреса электронной почты (функция `createMail()` возвращает строку): 
```js
const userMail = user.createMail();
```
#### Генерация случайной адреса (функция `createAddress()` возвращает строку): 
```js
const userAddress = user.createAddress();
```
#### Генерация случайного пользователя (функция `createUser()` возвращает объект с полями ***firstName***, ***lastName***, ***userName***, ***email***, ***address***, заполненными случайно сгенерированными значеиями): 
```js
const userObject = user.createUser();
```