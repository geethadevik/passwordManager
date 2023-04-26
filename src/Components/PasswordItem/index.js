import './index.css'

// const buttons = {
//   delete:
//     'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png',
//   passwords:
//     'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png',
// }
const PasswordItem = props => {
  const {passwordDetails, isChecked, onDeleteItem} = props
  const {webInput, userName, password, id} = passwordDetails

  const passwordItem = isChecked ? (
    <p className="para">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  const initial = webInput[0].toUpperCase()
  const onClickDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-item-container">
      <div className="initial-section">{initial}</div>
      <div className="text-cont">
        <p className="heading">{webInput}</p>
        <p className="para">{userName}</p>
        {passwordItem}
      </div>
      <div className="button-cont">
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
