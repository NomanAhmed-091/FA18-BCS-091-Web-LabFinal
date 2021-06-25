import { useState , useEffect } from 'react';
import axios from 'axios';
import Topbar from '../components/topbarapp';
import MatchCard from '../components/Matchcard';
import { useHistory } from "react-router-dom";

function AppScreen() {
let [Admin,setAdmin] = useState(false)
let [users,setusers] = useState([]);
let [isloaded,setisloaded] = useState(false);
let [token,settoken] = useState('');
let history = useHistory();


useEffect(()=>{
    getUsers();
    settoken(localStorage.getItem('token'))
    if(token !== ''){
        setAdmin(true)
    }
})

async function getUsers() {
  try {
    const {data} = await axios.get('/api/match');
    setusers(data);
    setisloaded(true)
  } catch (error) {
    console.error(error);
  }
}

function logout(){
    localStorage.setItem('token','')
    settoken('');
    window.location.reload(false)
}

function deleteMatch(id) {
    axios.delete(`api/match/${id}`, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
            alert('unable to delete.Please try again')
        });
}

  return (
      <div className="App">
      <Topbar isAdmin={Admin} logout={logout} login={()=>history.push('/login')}/>
      <div style={{marginTop:"2rem",display:"flex",justifyContent:"center",flexFlow:"row wrap"}}>
      {isloaded && [...users].map((a,key)=>{
        return(
          <div key={key}>
             <MatchCard no={key+1} city={a.city} teamA={a.teamA} teamB={a.teamB} date={a.date} 
             isAdmin={Admin} delete={()=>deleteMatch(a._id)}/>
          </div>
        )
      })}
      </div>
    </div>

  );
}

export default AppScreen;
