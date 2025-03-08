import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <Text style={[styles.categorytext,
      selectedCategory === item && {
        color: "#FFFFFF", backgroundColor: "#E96E6E"
      },
      ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
  categorytext: {
    fontSize: 16,
    fontWeight: "600",
    color: "#938F8F",
    backgroundColor: "#DFDCDC",
    padding: 10,
    textAlign: "center",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})
