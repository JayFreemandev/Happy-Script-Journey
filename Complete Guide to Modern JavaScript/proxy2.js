const validateAge = {
    set: function(object, property, value) {
        if(property == 'age'){
            if(value < 19){
                throw new Error('TOO YOUNG');
            }else {
                object[property] = value;
                return true;
            }
        }
    }
};

const user = new Proxy({}, validateAge);
user.age = 17;