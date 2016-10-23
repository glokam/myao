function remove(key, id) {
    var leng = this.getLength(), 
        data = this.data, i;
    for (i = 0; i < leng; i++) {
      if(data[i][key] === id) {
          this.data.splice(i, 1);
          break;
      }  
    };
    return this;
};

module.exports = remove;