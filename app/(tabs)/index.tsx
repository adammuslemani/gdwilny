import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ktaba}>جدولني</Text>
        <Text style={styles.what}>ماذا ستفعل بيومك؟</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  box:{
   top:10,
   alignItems:"flex-end",
   borderWidth:1
  },
 ktaba:{
fontSize:50
 },
 what:{
  textAlign:"right" ,
  alignSelf:'flex-end'
 }
  })