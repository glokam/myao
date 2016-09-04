(function(global, factory) {
   factory(global.myao = {});
}(this, function (myao) {
    
    function extend(target, obj){
        for(var key in obj)
            if(hasOwn.call(obj, key)) target[key] = obj[key];
        return target;
    }
    
    
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
 
        add: function (toAdd, atBeginning) {
            if (Array.isArray(toAdd)) {
                if (!atBeginning) {
                    this.data = this.data.concat(toAdd);
                } else {
                    this.data = toAdd.concat(this.data);
                };
            } else {
                if (!atBeginning) { 
                    this.data.push(toAdd) ;
                } else { 
                    this.data.unshift(toAdd);
                }
            }
            return this;
        }, //end of add method
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
                throw new Error('Wrong typeof parameter in overwrite method . Should be an array.');
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
        set: function (key, id, obj) {
          var target = this.get(key, id); 

            if (!target) return this;
            
            extend(target, obj);
            
            return this;
        },//end of set method

        replace: function (key, id, obj) {
            var hasOwn = Object.prototype.hasOwnProperty, 
                target = this.get(key, id);

            if (!target) return this;

            for (var prop in target) {
                if (hasOwn.call(target, prop)) delete target[prop];
            }

            extend(target, obj);

            return this;
        },//end of replace method
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
    
    //Public methods
    myao.create = function (data) {
        return new Myao(data);
    };
}));