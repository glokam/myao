# myao =^_^=
## Manage Your Array of Objects

[![Latest Stable Version](https://img.shields.io/npm/v/myao.svg)](https://www.npmjs.com/package/myao)
[![License](https://img.shields.io/npm/l/myao.svg)](https://www.npmjs.com/package/myao)
[![NPM Downloads](https://img.shields.io/npm/dm/myao.svg)](https://www.npmjs.com/package/myao)

### Getting started:

```js
npm install myao

//or

npm install --save myao
```

```js
var myao = require('myao'),
    arrayofobj = [
    {name: 'Johnny', team: 'Black', age:28, id: '001'},
    {name: 'Simon', team: 'Red', age:32, id: '002'},
    {name: 'Leonardo', team: 'Blue', age: 18, id: '003'},
    {name: 'Don', team: 'White', age:40, id: '004'}
    ];

var myaoObj = myao.create(arrayofobj);
```

### getAll

> myaoObj.getAll()

**return** - *array*

```js
myaoObj.getAll();

/* return
[
{ name: 'Johnny', team: 'Black', age:28, id: '001'},
{ name: 'Simon', team: 'Red', age:32, id: '002'},
{ name: 'Leonardo', team: 'Blue', age: 18, id: '003'},
{ name: 'Don', team: 'White', age:40, id: '004'}
]
*/
```

### add

> myaoObj.add(*toAdd*)

**toAdd** - *single object* or *array of objects*

**return** - *this*

```js
myaoObj.add({name: 'Bill', team: 'Blue', age:26, id: '005'});
myaoObj.add([{name: 'Bill', team: 'Black', age:23, id: '006'}, {name: 'Sue', team: 'White', age:20, id: '007'}]);

/* myaoObj.getAll() return:
[ 
{ name: 'Johnny', team: 'Black', age:28, id: '001'},
{ name: 'Simon', team: 'Red', age:32, id: '002'},
{ name: 'Leonardo', team: 'Blue', age: 18, id: '003'},
{ name: 'Don', team: 'White', age:40, id: '004'},
{ name: 'Bill', team: 'Blue', age: 26, id: '005' },
{ name: 'Bill', team: 'Black', age: 23, id: '006' },
{ name: 'Sue', team: 'White', age: 20, id: '007' }
]
*/
```

### get

> myaoObj.get(*key*, *id*)

**key** - *string - object key*

**id** - *unique value*

**return** - *first matching object or null*

```js
var blackbill = myaoObj.get('id', '006' )

blackbill.team //'Black'

//!!BUT!!

var blackbill = myaoObj.get('name', 'Bill' );

blackbill.team //'Blue'
```
__*!! This method return object reference so:*__
```js
var blackbill = myaoObj.get('id', '006' );
blackbill.hobby = 'country music';

/* myaoObj.getAll() return:
[ 
{ name: 'Johnny', team: 'Black', age:28, id: '001'},
{ name: 'Simon', team: 'Red', age:32, id: '002'},
{ name: 'Leonardo', team: 'Blue', age: 18, id: '003'},
{ name: 'Don', team: 'White', age:40, id: '004'},
{ name: 'Bill', team: 'Blue', age: 26, id: '005' },
{ name: 'Bill', team: 'Black', age: 23, id: '006', hobby: 'country music' },
{ name: 'Sue', team: 'White', age: 20, id: '007' }
]
*/
```
### set *>= 1.3.0*

> myaoObj.set(*key*, *id*, *obj*)

**key** - *string - object key*

**id** - *unique value*

**obj** - *object with propertys to assign*

**return** - *this*

```js
var bluebill = myaoObj.get('id', '005' );

myaoObj.set('id', '005', {job: 'Programmer'});

console.log(bluebill)
//{ name: 'Bill', team: 'Blue', age: 26, id: '005', job: 'Programmer' }
```
### remove

> myaoObj.remove(*key*, *id*)

**key** - *string - object key*

**id** - *unique value*

**return** - *this*

!! It removes FIRST matching object - to remove a group of objects use filter method 

```js
myaoObj.remove('id', '006');

/* myaoObj.getAll() return
[ 
{ name: 'Johnny', team: 'Black', age: 28, id: '001' },
{ name: 'Simon', team: 'Red', age: 32, id: '002' },
{ name: 'Leonardo', team: 'Blue', age: 18, id: '003' },
{ name: 'Don', team: 'White', age: 40, id: '004' },
{ name: 'Bill', team: 'Blue', age: 26, id: '005' },
{ name: 'Sue', team: 'White', age: 20, id: '007' } ]
*/
```
### replace *>= 1.3.0*

> myaoObj.replace(*key*, *id*, *obj*)

**key** - *string - object key*

**id** - *unique value*

**obj** - *object with propertys to assign*

**return** - *this*

```js
var bluebill = myaoObj.get('id', '005' );

myaoObj.set('id', '005', {name: 'Anonymous'});

console.log(bluebill)
//{ name: 'Anonymous'}

/* myaoObj.getAll() return
[ 
{ name: 'Johnny', team: 'Black', age: 28, id: '001' },
{ name: 'Simon', team: 'Red', age: 32, id: '002' },
{ name: 'Leonardo', team: 'Blue', age: 18, id: '003' },
{ name: 'Don', team: 'White', age: 40, id: '004' },
{ name: 'Anonymous' },
{ name: 'Sue', team: 'White', age: 20, id: '007' } ]
*/
```
### overwrite *>= 1.2.0*

>myaoObj.overwrite(*newData*);

**newData** - *array*

**return** - *this*

```js
myaoObj.overwrite([{name: "Peter", team:"Green"}]);

/* myaoObj.getAll() return
[{name: "Peter", team:"Green"}]
*/
```

### filter

> myaoObj.filter(*key*, *val*);

**key** - *string - object key* ; 'use '-' for revers filter

**val** - *single filter value* or *array of values*

**return** - new myao object with filtered data

```js
var bluered = myaoObj.filter('team', ['Blue', 'Red']);

var notblue = myaoObj.filter('-team', 'Blue');

/* bluered.getAll() return
[ { name: 'Simon', team: 'Red', age: 32, id: '002' },
  { name: 'Leonardo', team: 'Blue', age: 18, id: '003' },
  { name: 'Bill', team: 'Blue', age: 26, id: '005' } ]
*/

/* notblue.getAll() return
[ { name: 'Johnny', team: 'Black', age: 28, id: '001' },
  { name: 'Simon', team: 'Red', age: 32, id: '002' },
  { name: 'Don', team: 'White', age: 40, id: '004' },
  { name: 'Sue', team: 'White', age: 20, id: '007' } ]
*/
```

### sort

> myaoObj.sort(*key*);

**key** - *string - object key* ; 'use '-' for revers sort

**return** - *this*

```js
myaoObj.sort('age');

/* myaoObj.getAll() return
[ { name: 'Leonardo', team: 'Blue', age: 18, id: '003' },
  { name: 'Sue', team: 'White', age: 20, id: '007' },
  { name: 'Bill', team: 'Blue', age: 26, id: '005' },
  { name: 'Johnny', team: 'Black', age: 28, id: '001' },
  { name: 'Simon', team: 'Red', age: 32, id: '002' },
  { name: 'Don', team: 'White', age: 40, id: '004' } ]
*/

//!!BUT!!

myaoObj.sort('-age');

/*myaoObj.getAll() return
[ { name: 'Don', team: 'White', age: 40, id: '004' },
  { name: 'Simon', team: 'Red', age: 32, id: '002' },
  { name: 'Johnny', team: 'Black', age: 28, id: '001' },
  { name: 'Bill', team: 'Blue', age: 26, id: '005' },
  { name: 'Sue', team: 'White', age: 20, id: '007' },
  { name: 'Leonardo', team: 'Blue', age: 18, id: '003' } ]
  */
```

### each  *>= 1.1.0*

> myaoObj.each(*callback*)

**callback** - *function with two parameters; first it is object in array, and second is index*

```js
myaoObj.each (function (elem, index) {
    elem.nick = elem.name.substr(0,2) + index; 
});

/* myObj.getAll() return
[ { name: 'Johnny', team: 'Black', age: 28, id: '001', nick: 'Jo0' },
  { name: 'Simon', team: 'Red', age: 32, id: '002', nick: 'Si1' },
  { name: 'Leonardo', team: 'Blue', age: 18, id: '003', nick: 'Le2' },
  { name: 'Don', team: 'White', age: 40, id: '004', nick: 'Do3' },
  { name: 'Bill', team: 'Blue', age: 26, id: '005', nick: 'Bi4' },
  { name: 'Sue', team: 'White', age: 20, id: '007', nick: 'Su5' } ]
*/
```

### getValues

> myaoObj.getValues(*key*)

**key** - *string - object key* ; 'use '-' for revers sort

**return** - *array with values*

```js
var names = myaoObj.getValues('name');

console.log(names); //[ 'Johnny', 'Simon', 'Leonardo', 'Don', 'Bill', 'Sue' ]
```
### getLength

> myaoObj.getLength()

**return** - *number - data length*

```js
var myaolength = myaoObj.getLength();

console.log(myaolength); // 6
```