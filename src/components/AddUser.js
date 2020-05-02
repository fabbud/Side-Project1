import React from 'react';

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      username: '',
      email: '',
      city: '',
      company: {
        name: 'eee',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = () => {
    this.props.addUser(this.state);
    this.setState({
      id: '',
      name: '',
      username: '',
      email: '',
      city: '',
      company: {
        name: '',
      },
    });
  };

  render() {
    console.log(this.state.company.name);

    return (
      <div>
        <input
          name="id"
          placeholder="id"
          value={this.state.id}
          onChange={this.handleChange}
        />
        <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          name="city"
          placeholder="city"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <input
          name="name"
          placeholder="Company Name"
          value={this.state.company.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit User</button>
      </div>
    );
  }
}

export default AddUser;
