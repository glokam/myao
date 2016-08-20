var Myao = function (data) {
    if (!(Array.isArray(data)) && data !== undefined) {
       throw new Error('Wrong typeof parameter in Myao.create . Should be an array or undefined for empty object');
    } else if (data === undefined) {
        this.data = [];
    } else {
        this.data = data;
    };
    
    return this;
};

Myao.prototype = {
 
add: function (toAdd) {
    if (Array.isArray(toAdd)) {
       this.data = this.data.concat(toAdd);
    } else {
        this.data.push(toAdd);
    }
    return this;
},//end of add method
remove: function (key, id) {
    var leng = this.getLength(), 
        data = this.data, i;
    for (i = 0; i < leng; i++) {
      if(data[i][key] === id) {
          this.data.splice(i, 1);
          break;
      }  
    };
    return this;
},//end of remove method   
overwrite: function (newData) {
    if (!(Array.isArray(newData))) {
       throw new Error('Wrong typeof parameter in update method . Should be an array.');
    } 
    this.data = newData;
    return this;
},       
get: function (key, id) {
    var leng = this.getLength(), 
        data = this.data, i;
    for (i = 0; i < leng; i++) {
      if(data[i][key] === id) return data[i];   
    }
    return null;
},//end of get method
    
getValues: function (key) {
      var leng = this.getLength(), 
        data = this.data, i,
        values = [];  
    for (i = 0; i < leng; i++) {
      values.push(data[i][key]);   
    }
    return values;
},    
    
filter: function (key, val) {
    var leng = this.getLength(), 
        data = this.data, 
        newData = [],
        reverse = false,
        statemant,
        i;
    
    if(key.charAt(0) === "-") {
        reverse = true;
        key = key.substr(1);
    };
    
    for (i = 0; i < leng; i++) {
      
        if (reverse) {
            if (Array.isArray(val)) {
                statemant = true;
                for (var j = 0; j < val.length; j++) {
                    if(data[i][key] === val[j]) {
                        statemant = false;
                        break;
                    };
                }
                if (statemant) newData.push(data[i]);
            } else {
                if(data[i][key] !== val) newData.push(data[i]);    
            }
        } else { 
            if (Array.isArray(val)) {
                for (var j = 0; j < val.length; j++) {
                    if(data[i][key] === val[j]) {
                        newData.push(data[i]);
                        break;
                    }
                }
            } else {
                if(data[i][key] === val) newData.push(data[i]);
            }
        }
    };  
    return new Myao(newData);
},//end of filter method
sort: function (key) {
    var order = 1;
    if(key.charAt(0) === "-") {
        order = -1;
        key = key.substr(1);
    }
    this.data.sort(function (a,b) {
        var result = (a[key] < b[key]) ? -1 : (a[key] > b[key]) ? 1 : 0;
        return result * order;
    })
    return this;
},
    
each: function (callback) {
    var leng = this.getLength(), 
        data = this.data, i;
        values = [];  
    for (i = 0; i < leng; i++) {
      callback(data[i], i);   
    }
    return this;
},//end of each method
    
getAll: function () {
    return this.data;
},//end of getAll method
    
getLength: function () {
    return this.data.length;
}//end of getLength
    
};//end of Myao.prototype

exports.create = function (data) {
    return new Myao(data);
};