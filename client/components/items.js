import React,{Component} from 'react'
var axios = require('axios') //API libary ajax
import AddItem from './add-item'
import Item from './item'
import ColHeaders from './col-headers'

class Items extends Component{
  constructor() {
    super();
    this.state = {
      items: [],
    };
    this.updateItems = this.updateItems.bind(this);
    this.remove = this.remove.bind(this);
  }

  updateItems(itemData) {
    var items = this.state.items.filter(item => item.id !== itemData.id)
    this.setState({ items: [itemData,...items] });
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
    const items = this.state.items
    return (
      <div id='items-container'>
        <AddItem update={this.updateItems} />
        <ColHeaders
          col_1={'Name'}
          col_2={'On Hand'}
          col_3={'Par'}
          col_4={'Order Qty'}
         />

        {items.length < 1 ? <h2> no items </h2>
        :items.map((item, index) => <Item key={item.id + item.name}
            id={item.id}
            name={item.name}
            onHand={item.onHand}
            par={item.par}
            orderQty={item.orderQty}
            remove={this.remove}
            update={this.updateItems}
          />
        )}
      </div>
    )
  }
}

export default Items




