import { useState } from 'react'
import { User, UserObjectDTO } from './components/User'

const ysabellaUser: UserObjectDTO = {
  id: "abcd",
  name: "Ysabella",
  age: 23,
  status: "Casada",
  nacionality: "Brasileira",
  profession: "Programadora",
  color: "red"
}

const joffreUser: UserObjectDTO = {
  id: 'abc',
  name: "Joffre",
  age: 30,
  status: "Casado",
  nacionality: "Brasileiro",
  color: "green"
}

const lucasUser: UserObjectDTO = {
  id: 'abcde',
  name: "Lucas",
  age: 28,
  status: "noivo",
  nacionality: "Brasileiro",
  color: "purple"
}

function App() {
  const usersArray = [ysabellaUser, joffreUser, lucasUser]
  const [user, setUser] = useState<UserObjectDTO>(usersArray[0]);


  const cliqueNoBotao = () => {
    const shownUserIndex = usersArray.indexOf(user)

    if (shownUserIndex === usersArray.length - 1) {
      setUser(usersArray[0])
    } else {
      setUser(usersArray[shownUserIndex + 1])
    }
  }

  return (
    <div className="App">
      <h1>Hello World</h1>

      <User user={user} />

      <button type="button" onClick={cliqueNoBotao}>
        altere o usuario
      </button>
    </div>
  )
}

export default App

// Componentes, Propriedades, Estado

// React