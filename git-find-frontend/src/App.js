import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import axios from 'axios';
import UserCard from './components/userCard';
import UserGists from './components/userGists';


function App() {

  const [userData, setUserData] = useState(null)
  const [userGists, setUserGists] = useState(null)
  const [userOrganization, setUserOrganization] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  let Endpoint = "http://localhost:3333/gitinfo";

  async function handleSubmit(e) {
    setError(false)
    setLoading(true)
    e.preventDefault()

    const username = e.target.username.value
    console.log(username)

    try {
      await axios.get(Endpoint+"/user",
      {
        params: {
          username: username
        }
      }).then((res) => {
        setUserData(res.data)
        console.log(res.data)
      })

      await axios.get(Endpoint+"/gist",
      {
        params: {
          username: username
        }
      }).then((res) => {
        setUserGists(res.data)
        console.log(res.data)
      })

      await axios.get(Endpoint+"/organization",
      {
        params: {
          username: username
        }
      }).then((res) => {
        setUserOrganization(res.data)
        console.log(res.data)
      })
    }
    catch (e) {
      console.log(e)
      if (e.message === "Request failed with status code 404")
        setError(true)
    }

    setLoading(false)
  }

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='py-4 px-10'>
          <form className='input-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-lg-6 pb-2'>
                    <label for="input">Enter the github username here:</label>
                    <Input name="username" type="text" placeholder="Input github username" variant="outlined" required />
                  </div>
                </div>
                <div className='d-flex'>
                  <Button type='submit' variant="contained">Submit</Button>
                  {loading ?
                    <div class="spinner-border ml-2" role="status">
                      <span class="sr-only"></span>
                    </div> : ""}
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className='row'>
          {
            error ?
              <div className='flex text-center'>
                <h3>Oops! User Not found! Please try again</h3>
              </div> :
              <>
                <div className='col-md-4'>
                  {userData ? <UserCard props={userData} /> : ""}
                </div>
                <div className='col-md-8'>
                  {userGists !== null ? <UserGists userData={userGists} title="Public gists" /> : ""}
                  {userOrganization ? <UserGists userData={userOrganization} title="Organizations" /> : ""}
                </div>
              </>

          }

        </div>
      </div>
    </div>
  );
}

export default App;
