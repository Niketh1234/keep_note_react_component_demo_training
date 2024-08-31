import { Component } from "react";

import './ShowDish.css'
export default class ShowDish extends Component {


    render() {
        return (
            <div className="table-container">

                <table >
                    <thead><th>Id</th><th>Name</th><th>Price</th></thead>
                    {this.props.dishes.map(dish => <tr key={dish.id}><td>{dish.id}</td><td>{dish.name}</td><td>{dish.price}</td></tr>)}
                </table>
            </div>
        );
    }

}