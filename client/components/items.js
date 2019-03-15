import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import AddItem from './add-item'


class Items extends Component{
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.updateItems = this.updateItems.bind(this);
  }

  updateItems(item) {
    this.setState({ items: [...this.state.items, item.data] });
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/items');
      this.setState({ items: [...this.state.items, res.data]});
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const items = this.state.items
    console.log('items:', items)
    return (
      <div id="items">
        <AddItem update={this.updateItems} />
        {
          !Array.isArray(items) ? (<div> <h2> no items </h2> </div>)
          :items.map((item, index) => {
             return (
              <h2> key={item.name} {item.name} </h2>
            )
          }
        )}
      </div>
    )
  }
}

export default Items




