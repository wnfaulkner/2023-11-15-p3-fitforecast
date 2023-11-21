import './EditUserForm.css'
import { Component } from 'react'
import { editUser } from '../../utilities/users-service';

export default class EditUserForm extends Component {
  state = {
   location: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      
      const formData = {...this.state};
      //console.log(formData)
      // delete formData.error;
      // delete formData.confirm;
      const user = await editUser(formData);
      const updatedUser = this.props.user
      //updatedUser.location = formData.updatedUserLocation*1
      //console.log(updatedUser)
      this.props.setUser(updatedUser)
      //console.log(this.props.user)
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