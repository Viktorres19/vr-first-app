import './App.css'
import { useState } from 'react'
import user from './user.json'
import MyComponent from '../components/NewComponent.jsx'
import FirstClassComponent from '../components/FirstClassComponent.jsx'
import FormExample from '../components/FormExample/FormExample.jsx'
import ConfirmationDialog from '../components/FormExample/ConfirmationDialog.jsx'

const Greeting = (props) => {
  /*В res попадуть всі інші атрибути*/
  const { name, mark = false, ...rest } = props
  return (
    /*всі інші пропси ми можемо такоже передати в якийсь елемент*/
    <h1 className="greeting" {...rest}>
      Hello <i className="emphasize">{name}</i>. Welcome{mark ? '!' : '.'}
    </h1>
  )
}


const App = () => {
  const mailMe = `mailto${user.email}`
  const listItems = user.hobbies.map((item) => <li key={item}>{item}</li>)

  const [user, setUser] = useState({})
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const confirmUserData = (data) => setUser(user)
  const closeDialog = () => setConfirmationOpen(false)
  const confirm = () => true

  return (
    <>
      <div>
        <FormExample onSubmit={confirmUserData} />
        <ConfirmationDialog
          title="Please confirm registration"
          cancel={closeDialog}
          open={confirmationOpen}
          confirm={confirm}
        >
          <p>Pleaser confirm your email: {user.email}</p>
        </ConfirmationDialog>
      </div>
      <main className="app">
        <h1>My first app</h1>
        <div>Name: {user.name}</div>
        <div>
          css: { user.skills.css }
        </div>
        <ul>
          {listItems}
        </ul>
        <a href={mailMe}>Email me</a>
      </main>
      <Greeting
        name="everyone"
        style={{ border: "solid red" }}
        aria-hidden
        mark={true}
      />
      <MyComponent />
      <FirstClassComponent />
    </>
  )
}

export default App

/*Пропсою може бути:
строкою,
номером,
boolean,
object,
callback,
інший елемент
*/
