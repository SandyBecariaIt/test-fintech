import React, { useEffect } from "react";
import { Text, View } from 'react-native'
import { useUsers } from './../Hooks/useUsers'
import { Loader } from './../components/ui/Loader'
import { ListUsers } from './../components/ListUsers/ListUsers'

export function Home ({ navigation }) {
  const {
    getDateAndHour,
    message,
    getUsers,
    usersList
  } = useUsers()

  useEffect(() => {
    getDateAndHour()
    getUsers()
  }, [])

  return (
    <View style={{ marginLeft: 20 }}>
      {
        !usersList ? (
          <Loader />
        ) : (
          <View>
            <Text>{message}</Text>
            <ListUsers users={usersList} />
          </View>
        )
      }

    </View>
  )
}
