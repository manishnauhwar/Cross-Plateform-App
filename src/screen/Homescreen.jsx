import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../../src/data/data.json'

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']

const Homescreen = () => {
  const [products,setProducts]=useState(data.products)
  const [selectedCategory, setSelectedCategory] = useState("Trending Now");


  const handleliked=(item)=>{
    const newProducts  = products.map((prod)=>{
      if(prod.id===item.id){
        return {
          ...prod,
          isLiked:true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
  }

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.container}>
      <Header />

      {/* Product list */}
      <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.textmatch}>Match Your Style</Text>

            {/* Input Container */}
            <View style={styles.inputcontainer}>
              <View style={styles.iconcontainer}>
                <Fontisto name={"search"} size={26} color={"#C0C0C0"} />
              </View>
              <TextInput style={styles.searchbox} placeholder='Search' />
            </View>

            {/* Category Section */}
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <Category
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 10 }}
            />
          </>
        }
        data={products}
        renderItem={({ item , index}) => (
        <ProductCard item={item} handleliked={handleliked}/>

        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={{
          paddingBottom:150,
        }}
      />
    </LinearGradient>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  textmatch: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },

  inputcontainer: {
    height: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },

  iconcontainer: {
    marginHorizontal: 15,
  },

  searchbox: {
    flex: 1,
  },
});
