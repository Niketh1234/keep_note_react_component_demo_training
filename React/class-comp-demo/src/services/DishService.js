export class Dish {
    constructor(props) {}
    static Dishes = [{ id: 1, name: 'Biryani', price: '200' }];

    static getDishes() {
        return this.Dishes;
    }

    static addDish(id, name, price) {
        this.Dishes.push({ id, name, price });
    }
}
