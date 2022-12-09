//LIFO (Last In, First Out)
// Array structure

const Stack = {
    count: 0,
    storage: [],
    push: function (value) {        
        Stack.storage[Stack.count] = value;
        Stack.count++;
        return Stack.storage;
    },
    pop: function () {
        if ( Stack.count === 0 ) {
            return undefined;
        };
        Stack.count--;
        delete Stack.storage[Stack.count];
        return Stack.storage
    },
    peek: function () {
        return Stack.storage[Stack.count - 1]
    },
    size: function () {
        return Stack.count
    }
}

export default Stack
