import React from "react";
import { Text, View, StyleSheet } from 'react-native'

export function Details (props) {
  const user = props.route.params.object

  const styles = StyleSheet.create({
    userInformation: {
      margin: 10
    },
    title: {
      fontWeight: "bold",
      margin: 10
    },
    information: {
      marginBottom: 10,
      color: '#828282',
      paddingRight: 100,
      marginLeft: 10
    }
  })

  return (
    <View style={styles.userInformation}>
      <View>
        <Text style={styles.title}>Información de usuario</Text>
        <Text style={styles.information}>
          Nombre: { user.item.name }
        </Text>
        <Text style={styles.information}>
          Usuario: { user.item.username }
        </Text>
        <Text style={styles.information}>
          Teléfono: { user.item.phone }
        </Text>
        <Text style={styles.information}>
          Sitio Web: { user.item.website }
        </Text>
      </View>

      <View>
        <Text style={styles.title}>Información de Compañia</Text>
        <Text style={styles.information}>
          Compañia: { user.item.company.name }
        </Text>
        <Text style={styles.information}>
          Frase: { user.item.company.catchPhrase }
        </Text>
      </View>

      <View>
        <Text style={styles.title}>Dirección</Text>
        <Text style={styles.information}>
          Calle: { user.item.address.street }
        </Text>
        <Text style={styles.information}>
          Suite: { user.item.address.suite }
        </Text>
        <Text style={styles.information}>
          Ciudad: { user.item.address.city }
        </Text>
        <Text style={styles.information}>
          C.P: { user.item.address.zipcode }
        </Text>
      </View>
    </View>
  )
}
