let products = [];
module.exports = class Product {
    constructor(id, title, ISBN, publishedDate, author) {
        this.id = id || Math.random().toString();
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }
    save() {
        products.push(this);
        return this;
    }

    update() {
        const index = products.findIndex(p => p.id === this.id);
        if (index > -1) {
            products.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }
    }
    static fetchAll() {
        return products;
    }
    static findById(productId) {
        const index = products.findIndex(p => p.id === productId);
        if (index > -1) {
            return products[index];
        } else {
            throw new Error('NOT Found');
        }
    }
    static deleteById(productId) {
        const index = products.findIndex(p => p.id === productId);
        if (index > -1) {
            products = products.filter(p => p.id !== productId);
        } else {
            throw new Error('NOT Found');
        }
    }
}