import React, { Component } from "react";

export default class CompChill extends Component {
  // State là một đối tượng chứa các thông tin đượ cử dụng để tạo và quản lý UI
  // State chỉ có thể được thay đổi trong component đó
  // Để khởi tạo state trong component sử dụng constructor
  constructor() {
    // Constructor dùng để khởi tạo state trong class component
    // Super dùng đẻ gọi Constructor lớp cha
    super();
    // Khởi tạo state => để khởi tạo state, chúng ta sử dụng this.state={}
    this.state = {
      studentA: "Minh Thanh",
      studentB: "Khanh Phan",
      address: {
        city: "Ha Noi",
      },
    };
  }

  handleChangeStudent = () => {
    this.setState({
      studentB: "Mai Le",
    });
  };

  render() {
    return (
      <div>
        {/* <h2>{this.props.companyName}</h2>
        <h2>{this.props.titleProps}</h2>
        <h2>{this.props.children}</h2> */}

        <div>
          <h2>State</h2>
          <div>{this.state.studentA} dep zai</div>
          <div>{this.state.studentB} cung the</div>
          <div>{this.state.address.city}</div>
          <button onClick={this.handleChangeStudent}>Click me</button>
        </div>
      </div>
    );
  }
}
