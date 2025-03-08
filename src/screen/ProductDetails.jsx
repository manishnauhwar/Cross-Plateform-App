import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { cartContext } from '../context/cartcontext';

const sizes = ["S", "M", "L", "XL"];
const colorsArray = [
  "#91A180",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D7528",
  "#000000",
];
const ProductDetails = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(cartContext);
  const route = useRoute();
  const item = route.params.item;
  const [selectedsize, setSelectedsize] = useState(null);
  const [selectedcolor, setSelectedcolor] = useState(null);

  const handleAddtoCart = (item) => {
    item.size = selectedsize;
    item.color = selectedcolor;
    addToCart(item);
    navigation.navigate("CART");
  }
  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <View style={styles.headercontainer}>
        <Header />
      </View>
      <Image source={{ uri: item.image }} style={styles.coverimage} />
      <View style={styles.contentcontainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={[styles.title, styles.price]}>{item.price}</Text>
      </View>
      {/* Size container */}
      <Text style={[styles.title, styles.sizetext]}>Size</Text>
      <View style={styles.sizecontainer}>
        {
          sizes.map((size, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedsize(size);
                }}
                style={styles.sizevaluecontainer}
              >
                <Text style={[styles.sizevalue,
                  selectedsize === size && { color: "#E55B5B" },
                ]}>
                  {size}
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <Text style={[styles.title, styles.colortext]}>Colors</Text>
      <View style={styles.colorcontainer}>
        {
          colorsArray.map((color, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedcolor(color)
                }}
                style={[
                  styles.circleborder,
                  selectedcolor == color && { borderColor: color, borderWidth: 2, }
                ]}
              >
                <View style={[styles.circle, { backgroundColor: color }]} />
              </TouchableOpacity>
            )
          })
        }
      </View>
      {/* button container */}
      <TouchableOpacity style={styles.cartbutton} onPress={() => { handleAddtoCart(item) }}>
        <Text style={styles.buttontext}>Add To Cart </Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headercontainer: {
    padding: 20,
  },
  coverimage: {
    width: "100%",
    height: 440,
  },
  contentcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500"
  },
  price: {
    color: "#4D4D4D"
  },
  sizecontainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizetext: {
    marginHorizontal: 20,
  },
  sizevaluecontainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  sizevalue: {
    fontSize: 18,
    fontWeight: "600",
  },
  colortext: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  colorcontainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
  },
  circleborder: {
    height: 48,
    marginHorizontal: 5,
    width: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  cartbutton: {
    backgroundColor: "#E96E6E",
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  buttontext: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    textAlign: "center"
  }
});
