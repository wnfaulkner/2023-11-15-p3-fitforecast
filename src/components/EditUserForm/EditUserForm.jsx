//EDIT USER FORM COMPONENT

import { Component } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import './EditUserForm.css'
import { getUser, editUser } from '../../utilities/users-service';

class EditUserForm extends Component {
  state = {
   location: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      const updatedUserData = { userId: this.props.user._id, ...formData };
      const user = getUser();
      console.log(user);
      this.props.history.push('/profile'); // Manually navigate using history
    } catch {
      this.setState({ error: 'Failed to Edit User - Try Again' });
    }
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      
      const formData = {...this.state};
      // console.log(formData)
      delete formData.error;
      //delete formData.confirm;
      const updatedUserData = {userId: this.props.user._id, ...formData}
      //const user = await editUser(updatedUserData);
      // const user = getUser()
      //await this.props.setUser(user)
      // console.log(user)
      // useNavigate('/profile')
      this.props.history.push('/profile');
    } catch {
      this.setState({ error: 'Failed to Edit User - Try Again' });
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  render() {
    //const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form id="edit-user-form" autoComplete="off" onSubmit={this.handleSubmit}>
                <p>{this.props.user.profilePic}</p>
                <p>{this.props.user.username}</p>
                <p>Current User Location: {this.props.user.location}</p>
                <input name="updatedUserLocation"
                    type="text"
                    id="textInput"
                    placeholder="Update Location"
                    onChange={this.handleChange}
                    />
                <button type="submit">Save</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}

export default withRouter(EditUserForm);