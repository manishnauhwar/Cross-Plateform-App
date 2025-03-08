import { StyleSheet, Text, View, Image ,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'


const Header = ({isCart}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity  
      onPress={()=> navigation.navigate("HOME_STACK")} style={styles.appIconcontainer}>
        {
          isCart? (<Ionicons name={"chevron-back"} color={"#E96E6E"} size={24}/>
          ):(
        <Image
          source={require("../assets/appicon.png")}
          style={styles.appIcon}
        />
        )}
      </TouchableOpacity>
      { isCart && 
        <Text style={styles.mycart}>My Cart</Text>
      }

      <Image
        source={require("../assets/dp.png")}
        style={styles.dpicon}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appIconcontainer: {
    backgroundColor: "#FFFFFF",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",

  },
  appIcon: {
    height: 28,
    width: 28,
  },
  dpicon: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  mycart:{
fontSize:28,
color:"black",
  }
})