import { useState } from 'react';
import * as api from './../utils/index'

export const useUsers = () => {
  const [message , setCurr] = useState('');
  const [usersList , setUserList] = useState(null);
  
  const getDateAndHour = () => {
    var date = new Date();
    var today = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    var hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    setCurr(`Bienvenido \n Fecha actual: ${today} \n Hora: ${hour}`);
  }

  const getUsers = async () => {
    const data = await api.getAllUsers()
    setUserList(data)
  }

  return {
    getDateAndHour,
    usersList,
    message,
    getUsers
  }
}
