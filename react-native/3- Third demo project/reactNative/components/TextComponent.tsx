import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TextComponent() {
  return (
    <View style={styles.container}>
      <Text 
      numberOfLines={2}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptate, doloremque asperiores eum sequi dolorum suscipit saepe modi vero molestias libero sit earum debitis architecto corporis at? Rem, praesentium ex?
      </Text>

      <Text onLongPress={() => console.log("long press")}>press me</Text>
      <Text style={{fontSize: 20}} allowFontScaling={false}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia perferendis illum saepe ullam praesentium odit, quasi iusto! Velit veniam laboriosam nam, minima accusamus mollitia nihil error odit, quia voluptatibus consectetur?
      </Text>
     
      <Text numberOfLines={1} ellipsizeMode="head">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia perferendis illum saepe ullam praesentium odit, quasi iusto! Velit veniam laboriosam nam, minima accusamus mollitia nihil error odit, quia voluptatibus consectetur?
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})