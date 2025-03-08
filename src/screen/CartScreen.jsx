import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { FlatList } from 'react-native-gesture-handler'
import { cartContext } from '../context/cartcontext'

const CartScreen = () => {
  const { carts, totalprice, deleteItemFromCart } = useContext(cartContext);
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.headerContainer}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        renderItem={({ item }) => <CartCard item={item} deleteItemFromCart={deleteItemFromCart} />}
        ListFooterComponent={
          <>
            <View style={styles.pricecontainer}>
              <View style={styles.price}>
                <Text style={styles.text}>Total:</Text>
                <Text style={styles.text}>${totalprice}</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.text}>Shopping:</Text>
                <Text style={styles.text}>${0}</Text>
              </View>
            </View>
            <View style={styles.dividor}></View>
            <View style={styles.price}>
              <Text style={styles.text}>Grand Total:</Text>
              <Text style={[styles.text, { color: "black", fontWeight: "700" }]}>
                ${totalprice}
              </Text>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
      <TouchableOpacity style={styles.checkoutContent}>
        <Text style={styles.buttontext}>Checkout</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  pricecontainer: {
    marginTop: 40,
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#757575",
  },
  dividor: {
    borderWidth: 1,
    borderColor: "#C0C0C0",
    marginVertical: 10,
  },
  checkoutContent: {
    backgroundColor: "#E96E6E",
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
  },
  buttontext: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});
