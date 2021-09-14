import React,{ useEffect,useState } from 'react';
import './App.css';
import GetList from './GetList';

function App() {
  const [searchTerm,setSearchTerm] = useState(" ");

  const [jobList,setJobList] = useState ([]);
   useEffect(() => {
     async function fetchJobList(){
       try{
         const requestUrl = 'https://remotive.io/api/remote-jobs';
         const response= await fetch(requestUrl,{mode : "no-cors",});
         const responseJSON = await response.json();
         console.log(responseJSON);
         setJobList(responseJSON);
         }catch{

       }
     }
     fetchJobList();
   }, [])

  return (
    <div className="App">
      <input
      type="text"
      placeholder="Search..."
      onChange={(event) =>{setSearchTerm(event.target.value)}} />
      {jobList.filter((val) => {
        if (searchTerm=="") {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {

        }
      }).map((val,key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
            </div>
        );
      })}
      <GetList jobList={jobList} />
    </div>
  );
}

export default App;
