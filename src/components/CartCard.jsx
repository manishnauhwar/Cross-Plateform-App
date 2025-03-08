import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'


const CartCard = ({item,deleteItemFromCart}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.coverimage} />
      <View style={styles.cardcontent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.circlesizecontainer}>
          <View style={[styles.circle ,{backgroundColor:item.color}]}></View>
          <View style={styles.sizecircle}>
            <Text style={styles.sizetext}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>deleteItemFromCart(item)}>
        <FontAwesome6 name={"trash"} color={"#F68CB5"} size={25} />
      </TouchableOpacity>
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",

  },
  coverimage: {
    height: 125,
    width: "25%",
    borderRadius: 10,
  },
  cardcontent: {
    flex: 1,
    marginHorizontal: 10,

  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    fontSize: 18,
    color: "#797979",
    marginVertical: 10,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  circlesizecontainer: {
    flexDirection: "row",
  },
  sizecircle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  sizetext: {
    fontSize: 18,
    fontWeight: "500",

  },
})