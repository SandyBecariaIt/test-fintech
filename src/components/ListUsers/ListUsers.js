import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";
export function ListUsers ({ users }) {
  const navigation = useNavigation()

  const styles = StyleSheet.create({
    userList: {
      flexDirection: 'row',
      margin: 10
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 15
    },
    name: {
      fontWeight: "bold"
    },
    information: {
      color: '#828282',
      paddingRight: 100,
      marginTop: 3
    }
  })

  const goToDetail = (user) => {
    navigation.navigate('Details', { object: user })
  }
  return (
    <View nestedScrollEnabled={true}>
      <FlatList
        nestedScrollEnabled
        data={users}
        renderItem={(user) => {
          return (
            <TouchableOpacity onPress={() => goToDetail(user)}>
              <View style={styles.userList}>
                <Image
                  style={styles.image}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
                <View>
                  <Text style={styles.name}>{user.item.name}</Text>
                  <Text style={styles.information}>{user.item.username}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
