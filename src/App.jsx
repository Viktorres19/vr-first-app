import './App.css'
import user from "./user.json"


const App = () => {
  const mailMe = `mailto${user.email}`
  const listItems = user.hobbies.map((item) => <li key={item}>{item}</li>)

  return (
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
  )
}

export default App
