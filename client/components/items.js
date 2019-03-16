import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import AddItem from './add-item'
import Item from './item'

class Items extends Component{
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.updateItems = this.updateItems.bind(this);
    this.remove = this.remove.bind(this);
  }

  updateItems(item) {
    this.setState({ items: [...this.state.items, item.data] });
  }
  async remove(id){
    try{
      const deleted = await axios.delete(`/api/items/${id}`)
      if(deleted) {
        const items = this.state.items.filter(item => item.id !== id)
        this.setState({
          items
        })
      }
    } catch(err) {
      console.error(err)
    }
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
        :items.map((item, index) => <Item
            key={item.name}
            id={item.id}
            name={item.name}
            onHand={item.onHand}
            par={item.par}
            orderQty={item.orderQty}
            remove={this.remove}
          />
        )}
      </div>
    )
  }
}

export default Items




