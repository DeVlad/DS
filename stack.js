var Stack = function () {
    this.storage = '|*|';
    this.delimiter = '|*|';
    this.count = 0;
    this.lastItem = '';
};

Stack.prototype.push = function (item) {
    this.storage += item + this.delimiter;
    this.count++;
    this.lastItem = item;
};

Stack.prototype.pop = function () {
    var removed = this.lastItem;
    this.storage = this.storage.slice(0, this.storage.lastIndexOf(this.lastItem) - this.delimiter.length); // -3 remove delimiter
    this.lastItem = this.storage.slice(0, this.storage.lastIndexOf(this.delimiter));
    this.lastItem = this.storage.slice(this.storage.lastIndexOf(this.delimiter) + this.delimiter.length); // + 3 remove prefix delimiter 
    this.storage += this.delimiter;
    this.count--;
    return removed;
};

Stack.prototype.size = function () {
    return this.count;
};

Stack.prototype.last = function () {
    return this.lastItem;
};
