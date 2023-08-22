import './App.css'
import user from './user.json'
import MyComponent from '../components/NewComponent.jsx'
import FirstClassComponent from '../components/FirstClassComponent.jsx'

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

  return (
    <>
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
