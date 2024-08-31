import { Component } from "react";
import './AddDish.css'
import { Dish } from "../services/DishService";
import ShowDish from "../ShowDish/ShowDish";

export class AddDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: '',
            price: 0,
            dishes: []
        }
    }
    nameChange = (e) => {
        this.setState({ name: e.target.value })
    }
    priceChange = (e) => {
        this.setState({ price: e.target.value })
    }
    addHandler = () => {
        this.setState({ dishes: [...this.state.dishes, { id: this.state.id, name: this.state.name, price: this.state.price }] })
        this.setState({ id: 0, name: '', price: 0 })
    }
    render() {
        return (
            <div className="container">
                <span>Id :</span> <input type="text" value={this.state.id} onChange={(e) => {
                    this.setState({ id: e.target.value })
                }} />
                <span>Dish Name :</span> <input type="text" value={this.state.name} onChange={this.nameChange} />
                <span>Price :</span> <input type="number" value={this.state.price} onChange={this.priceChange} />
                <input type="submit" id="submitButton" value="Submit" onClick={this.addHandler} />
                <ShowDish dishes={this.state.dishes} />
            </div>
        )
    }
}