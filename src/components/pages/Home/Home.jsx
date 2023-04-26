import { useSelector } from "react-redux"



const Home = () => {

  const { isLogged, user } = useSelector( (store)=> store.auth )
  

  return (
    <div>
      {
        isLogged ? <h1>Te doy permiso {user.email}</h1> :  <h1>No Te doy permiso</h1>
      }


    </div>
  )
}

export default Home