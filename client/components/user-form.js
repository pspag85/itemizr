import React,{Component} from 'react'

var UserForm = props => (
      <div>
        <form onSubmit={this.handleSubmit}>
         <input
            type='text' name={name}
            value={this.state[name]}
            onChange={this.handleChange}
          />
       </form>
      </div>
)
