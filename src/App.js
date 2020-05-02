import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showAddUserForm: false,
    };
    this.getUsers = this.getUsers.bind(this);
    this.showUserForm = this.showUserForm.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          users: data,
        });
      });
  }

  deleteUser = (id) => {
    const users = this.state.users.filter((user) => user.id !== id);
    this.setState({ users });
  };

  showUserForm() {
    const showAddUserForm = this.state.showAddUserForm;
    this.setState({
      showAddUserForm: !showAddUserForm,
    });
  }

  addUser(newUser) {
    const users = this.state.users;
    users.push(newUser);
    this.setState({
      users: users,
    });
  }

  render() {
    const users = this.state.users;
    return (
      <div>
        <button className="add-user-button" onClick={this.showUserForm}>
          Add User
        </button>
        <div className={this.state.showAddUserForm ? '' : 'show-add-user'}>
          <AddUser adduser={this.addUser} />
        </div>
        {users.map((user) => (
          <UserCard {...user} key={user.id} deleteUser={this.deleteUser} />
        ))}
      </div>
    );
  }
}

export default App;
