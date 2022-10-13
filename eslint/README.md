### List of useful rules

---
- [space-before-blocks](#rule---space-before-blocks)
- [keyword-spacing](#rule---keyword-spacing)
- [object-property-newline](#rule---object-property-newline)
- [object-curly-newline](#rule---object-curly-newline)
- [array-element-newline](#rule---array-element-newline)
- [array-bracket-newline](#rule---array-bracket-newline)
- [comma-spacing](#rule---comma-spacing)
- [padding-line-between-statements](#rule---padding-line-between-statements)
- [func-style](#rule---func-style)
- [prefer-destructuring](#rule---prefer-destructuring)
- [comma-dangle](#rule---comma-dangle)
- [dot-location](#rule---dot-location)
- [multiline-ternary](#rule---multiline-ternary)
- [space-before-function-paren](#rule---space-before-function-paren)

---
### Rule - `space-before-blocks`
**Rule setup**

```javascript  
'space-before-blocks': [
    2, 
    'always'
]  
```  

❌ **Wrong use-case**
```javascript  
if(b){}  
```  
✅ **Correct use-case**
```javascript  
if(b) {}  
```

---
### Rule - `keyword-spacing`
**Rule setup**

```javascript  
'keyword-spacing': [  
    2, 
    { 
    'before': true 
    }
]  
```  

❌ **Wrong use-case**
```javascript  
if () {  
...  
}else {...}  
```  
✅ **Correct use-case**
```javascript  
if () {  
...  
} else {...}  
```  

---
### Rule - `object-property-newline`
**Rule setup**

```javascript  
'object-property-newline': [  
    2,  
    {    
        'allowAllPropertiesOnSameLine': false    
    } 
]  
```  

❌ **Wrong use-case**
```javascript  
const object1 = { a: 'a', b: 'b' }  
```  
✅ **Correct use-case**
```javascript  
const object2 = { a: 'a',   
             b: 'b' }  
```  

---
### Rule - `object-curly-newline`
**Rule setup**

```javascript  
'object-curly-newline': [    
    2,    
  {    
     'ObjectExpression':  {   
        'multiline': true,   
        'minProperties': 3   
      },    
} ],  
```  

❌ **Wrong use-case**
```javascript  
const object = { a: 'a', b: 'b', c: 'c' }  
```  
✅ **Correct use-case**
```javascript  
const object1 = {   
   a: 'a', b: 'b', c: 'c'  
}  
  
const object2 = { a: 'a', b: 'b' }  
```  

---
### Rule - Combination of `object-curly-newline` & `object-property-newline`
**Rule setup**

```javascript  
'object-curly-newline': [...] // above rule setup,  
'object-property-newline': [...] // above rule setup  
```  

❌ **Wrong use-case**
```javascript  
const object = { a: 'a', b: 'b', c: 'c' }  
```  
✅ **Correct use-case**
```javascript  
const object1 = {   
   a: 'a',   
   b: 'b',   
   c: 'c'  
}  
  
const object2 = { a: 'a', b: 'b' }  
```  

---
### Rule - `array-element-newline`
**Rule setup**

```javascript  
'array-element-newline': [    
    2,    
    {    
        'minItems': 3,    
    } 
],  
```  

❌ **Wrong use-case**
```javascript  
const array = [1, 2, 3]  
```  
✅ **Correct use-case**
```javascript  
const array1 = [1,   
            2,   
            3]  
  
const array2 = [1, 2]  
```  

---
### Rule - `array-bracket-newline`
**Rule setup**

```javascript  
'array-bracket-newline': [    
    2,    
    {    
        'minItems': 3,    
    } 
],  
```  

❌ **Wrong use-case**
```javascript  
const array = [1, 2, 3]  
```  
✅ **Correct use-case**
```javascript  
const array1 = [  
 1, 2, 3]  
  
const array2 = [1, 2]  
```  

---
### Rule - Combination of `array-element-newline` & `array-bracket-newline`
**Rule setup**

```javascript  
'array-element-newline': [...] // above rule setup,  
'array-bracket-newline': [...] // above rule setup  
```  

❌ **Wrong use-case**
```javascript  
const array = [1, 2, 3]  
```  
✅ **Correct use-case**
```javascript  
const array1 = [  
    1,
    2,   
    3  
]  
  
const array2 = [1, 2]  
```  

---
### Rule - `comma-spacing`
**Rule setup**

```javascript  
'comma-spacing': [    
    2,    
    {    
        'before': false,    
        'after': true    
    } 
],  
```  

❌ **Wrong use-case**
```javascript  
const someArray = ['something' ,'somthing2'];  
someFunc(a ,b);  
const a = 1 ,b = 2;  
```  
✅ **Correct use-case**
```javascript  
const someArray = ['something', 'somthing2'];  
someFunc(a, b);  
const a = 1, b = 2;  
```  

---
### Rule - `padding-line-between-statements`
**Rule setup**

```javascript  
'padding-line-between-statements': [    
    2,    
    {    
        'blankLine': 'always',    
        'prev': '*',    
        'next': 'return'  
    },  
    {    
        'blankLine': 'always',    
        'prev': 'if',    
        'next': '*'    
    }, 
],  
```  

❌ **Wrong use-case**
```javascript  
if(a) {  
const someConst = 'someConstContent';  
return someConst  
}  
if(b) {  
...  
}  
return c  
  
```  
✅ **Correct use-case**
```javascript  
if(a) {  
const someConst = 'someConstContent';  
  
return someConst  
}  
  
if(b) {  
...  
}  
  
return c  
```  

---
### Rule - `func-style`
**Rule setup**

```javascript  
'func-style': [    
    2,    
    'declaration',   
    {     
        'allowArrowFunctions': true   
    }  
],  
```  

❌ **Wrong use-case**
```javascript  
const func = function() {...}  
  
```  
✅ **Correct use-case**
```javascript  
function func() {...}  
const arrowFunc = () => {...}  
```

---
### Rule - `prefer-destructuring`
**Rule setup**

```javascript  
'prefer-destructuring': [    
    2,
    {     
        'object': true   
    }  
],  
```  

❌ **Wrong use-case**
```javascript  
const item1 = object.someItem
```  
✅ **Correct use-case**
```javascript  
const { someItem } = object
```

---
### Rule - `comma-dangle`
**Rule setup**

```javascript  
'comma-dangle': [    
    2,
    'never'
],  
```  

❌ **Wrong use-case**
```javascript  
const someArray = ['something', 'somthing2', ];  
someFunc(a, b,);  
const a = 1, b = 2,;  
```  
✅ **Correct use-case**
```javascript  
const someArray = ['something', 'somthing2'];  
someFunc(a, b);  
const a = 1, b = 2;  
```

---
### Rule - `dot-location`
**Rule setup**

```javascript  
'dot-location': [    
    2,
    'property'
],  
```  

❌ **Wrong use-case**
```javascript  
const foo = object.
	property;
```  
✅ **Correct use-case**
```javascript  
const foo = object
	.property;
```

---
### Rule - `multiline-ternary`
**Rule setup**

```javascript  
'multiline-ternary': [    
    2,
    'always'
],  
```  

❌ **Wrong use-case**
```javascript  
foo > bar ? value1 : value2;
foo > bar ? value : 
	value2;
foo > bar ?    
value : value2;
```  
✅ **Correct use-case**
```javascript  
foo > bar ? 
value1 : 
value2;
```

---
### Rule - `space-before-function-paren`
**Rule setup**

```javascript  
'space-before-function-paren': [    
    2,
    'never'
],  
```  

❌ **Wrong use-case**
```javascript  
function func () {...}
```  
✅ **Correct use-case**
```javascript  
function func() {...}
```
