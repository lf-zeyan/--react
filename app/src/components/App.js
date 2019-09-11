import React, { Component } from 'react';
import axios from 'axios'
import '../mock/mock.js'

class App extends Component {//父组件
  constructor() {
    super()
    this.state = {
      list: [],
      btn: [],
      btns: [],
      page: 1
    }
  }
  componentDidMount() {
    axios.post('/getData', { page: this.state.page, num: 11 }).then(res => {
      this.setState({
        list: res.data.data,
        btn: res.data.zongshu
      })
      let arr = []
      for (let i = 1; i <= this.state.btn; i++) {
        arr.push(i)
      }
      this.setState({
        btns: arr
      })
    })
  }


  dian = (index) => {
    this.setState({
      page: index + 1
    })

    axios.post('/getData', { page: this.state.page, num: 11 }).then(res => {
      this.setState({
        list: res.data.data,
        btn: res.data.zongshu
      })
    })

  }

  render() {
    let btns = this.state.btns
    // console.log(btns);
    return (
      <div>
        {
          this.state.list.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.id}</span>
                <span>{item.name}</span>
                <span>{item.pic}</span>
              </div>
            )
          })
        }
        <div className='p'>
          {
            btns.map((item, index) => {
              return (
                <p>
                  <span className='span' onClick={() => { this.dian(index) }} key={index}>{item}</span>
                </p>
              )
            })
          }
        </div>

      </div>
    );
  }
}

export default App;
