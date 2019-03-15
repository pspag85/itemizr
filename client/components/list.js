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
    this.removeItem = this.removeItem.bind(this);
  }

  updateItems(item) {
    this.setState({ items: [...this.state.items, item.data] });
  }

  async removeItem(id) {
    // try {
    //   const deleted = await axios.delete(`/api/items/${id}`)
    //   if(deleted) {
    //     const items = this.state.items.filter(item => item.id !== id)
    //     this.setState({
    //       items
    //     })
    //   }
    // } catch(err) {
    //   console.error(err)
    // }
  }

  async componentDidMount() {
    try {
      const items = await axios.get('/api/items');
      this.setState({ items: res.data });
    } catch(err) {
      console.error(err)
    }
  }

  render() {

    return (
      <div id="items">
        <AddItem update={this.updateItems} />
        {this.state.items.map((item, index) => (
          <AddItem item={item} key={item.id} remove={this.removeItem} />
        ))}
      </div>
    );
  }
}

export default Items




