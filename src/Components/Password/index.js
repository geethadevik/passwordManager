import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class Password extends Component {
  state = {
    updateList: [],
    webInput: '',
    userName: '',
    password: '',
    searchInput: '',
    isChecked: false,
  }

  onAddPassword = event => {
    event.preventDefault()
    const {webInput, userName, password} = this.state

    const newPassword = {
      id: uuidv4(),
      webInput,
      userName,
      password,
    }
    this.setState(prevState => ({
      updateList: [...prevState.updateList, newPassword],
      webInput: '',
      userName: '',
      password: '',
    }))
  }

  onDeleteItem = id => {
    const {updateList} = this.state
    const searchResults = updateList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({updateList: searchResults})
  }

  onChangeWebInput = event => {
    this.setState({webInput: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeSearchList = event => {
    this.setState({searchInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />
      <p>No Passwords</p>
    </div>
  )

  render() {
    const {
      webInput,
      userName,
      password,
      isChecked,
      updateList,
      searchInput,
    } = this.state
    const searchResults = updateList.filter(eachPassword =>
      eachPassword.webInput.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const count = searchResults.length
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-image"
        />
        <div className="password-container">
          <form
            className="password-content-container"
            onSubmit={this.onAddPassword}
          >
            <h1 className="heading">Add New Password</h1>
            <div className="web-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="web-logo"
              />
              <input
                type="text"
                value={webInput}
                placeholder="Enter Website"
                className="web-input"
                onChange={this.onChangeWebInput}
              />
            </div>
            <div className="user-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="user-logo"
              />
              <input
                type="text"
                value={userName}
                className="user-name"
                placeholder="Enter Username"
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="password-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="password-logo"
              />
              <input
                type="password"
                value={password}
                className="password"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="add-button-container">
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        {/* //bottom card */}

        <div className="password-item-container">
          <div>
            <div className="password-title-container">
              <div className="password-text-container">
                <h1 className="password-title">Your Passwords</h1>
                <p className="password-count">{count}</p>
              </div>
              <div className="search-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input
                  type="search"
                  placeholder="search"
                  className="search-input"
                  onChange={this.onChangeSearchList}
                  value={searchInput}
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <input
                type="checkbox"
                checked={isChecked}
                id="showPassword"
                onChange={this.onChecked}
              />
              <label htmlFor="showPassword">Show passwords</label>
            </div>
            {count === 0 ? (
              this.renderNoPasswordsView()
            ) : (
              <ul className="list-items-container">
                {searchResults.map(eachPassword => (
                  <PasswordItem
                    key={eachPassword.id}
                    passwordDetails={eachPassword}
                    isChecked={isChecked}
                    onDeleteItem={this.onDeleteItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Password
