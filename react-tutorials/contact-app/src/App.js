import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    information: [
      {
        id : 0,
        name : '홍길동',
        phone : '010-0000-0000'
      },
      {
        id : 1,
        name : '아이유',
        phone : '010-0000-0001'
      },
      {
        id : 2,
        name : '이수현',
        phone : '010-0000-0002'
      },
    ], 
    keyword : ''
  }

  handleChange = (e) => {
    this.setState({
      keyword : e.target.value
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    });
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat(Object.assign({}, data, {
        id: this.id++
      }))
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information : information.map(
        info => {
          if(info.id === id) {
            return {
              id,
              ...data
            };
          }
          return info;
        }
      )
    }) 
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input value={this.state.keyword} onChange={this.handleChange} placeholder="검색..."/>
        <PhoneInfoList 
          data={this.state.information.filter(
            n => n.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove} 
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;