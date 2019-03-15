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
          this.setState({items: res.data});
    } catch(err) {
      console.error(err)
    }

  }

  render() {
    console.log('state:  ', this.state)
    const items = this.state.items
    return (
      <div>
        <AddItem update={this.updateItems} />
        {items.length < 1 ? <h2> no items </h2>
        :items.map((item, index) => <h2  key={item.name}>{item.name}</h2>)}
      </div>
    )
  }
}

export default Items




