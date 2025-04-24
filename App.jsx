import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {
  
 const getAllUsers = async ()=>{
  const response = await axios.get(BASE_URL + "/users");
  console.log(response.data);
}

  const getUserById = async (userId) => {
    // belirli bir id almak icin kullanılır
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  }

  const createUser = async(newUser) => {
    // veri eklemek icin kullanılır
    const response = await axios.post(`${BASE_URL}/users/`, newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updateUser) => {
      debugger;
    // PUT: veri güncellemek icin kullanılır
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updateUser);
    console.log(response.data)
  }
  
  const deleteUserById = async (userId) => {
    // Veriyi silmek icin kullanılır
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log("response", deletedResponse.data);
  }
 

 useEffect(() => {
  //getAllUsers();
  //getUserById(1);
    
  // const newUser = {
  //   "username":"baki",
  //   "password": "12345"
  // }
  // createUser(newUser)
  
  //  updateUser("7f2e", {   
  //    "username" : "mehmet",
  //    "password" : "3457"
  //  }) 

  deleteUserById("2");

 }, [])

  return (
    <>
      <div>
       
      </div>
     
    </>
  )
}

export default App
