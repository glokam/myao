# myao =^_^=
## Manage Your Array of Objects

### Getting started:

```
<script src='myao.js'></script>

//or CDN:

<script src='https://cdn.rawgit.com/glokam/myao/737ac376504a9f7cb0440f0b6cc2579f50898a04/myao.min.js'></sript>
```

```
var arrayofobj = [
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

```
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

```
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

**return** - *first matching object*

```
var blackbill = myaoObj.get('id', '006' )

blackbill.team //'Black'

//!!BUT!!

var blackbill = myaoObj.get('name', 'Bill' );

blackbill.team //'Blue'
```

### remove

> myaoObj.remove(*key*, *id*)

**key** - *string - object key*

**id** - *unique value*

**return** - *this*

!! It removes FIRST matching object - to remove a group of objects use filter method 

```
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
### overwrite *v. 1.2.0 =>*

>myaoObj.overwrite(*newData*);

**newData** - *array*

**return** - *this*

```
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

```
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

```
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

### each  *v. 1.1.0 =>*

> myaoObj.each(*callback*)

**callback** - *function with two parameters; first it is object in array, and second is index*

```
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

```
var names = myaoObj.getValues('name');

console.log(names); //[ 'Johnny', 'Simon', 'Leonardo', 'Don', 'Bill', 'Sue' ]
```
### getLength

> myaoObj.getLength()

**return** - *number - data length*

```
var myaolength = myaoObj.getLength();

console.log(myaolength); // 6
```