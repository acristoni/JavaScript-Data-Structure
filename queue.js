//FIFO (First In, First OUT)

const Queue = {
    collection: [],
    print: function () {
        console.log(this.collection)
    },
    enqueue: function (element) {
        this.collection.push(element)
        return this.collection
    },
    dequeue: function () {
        this.collection.shift()
        return this.collection
    },
    front: function () {
        return this.collection[0]
    },
    isEmpty: function () {
        return this.collection.length === 0
    },
    size: function () {
        return this.collection.length
    },
    priorityQueue: function () {
        //DEPOIS EU FAÇO
        return this.collection
    }
}

export default Queue