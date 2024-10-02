import React from "react";
import { View, Text, Image } from "react-native";
import styles from './StoreCardStyle';

const StoreCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.c_container}>
        <Image source={{ uri: item.imgURL }} style={styles.card_image} />
        <Text style = {styles.card_title}>{item.title}</Text>
        <Text style = {styles.card_price}>{item.price}</Text>
        {/* Stok değerini kontrol edelim */}
        {!item.inStock && <Text style = {styles.card_stock}>Stokta yok</Text>}
      </View>
    </View>
  );
};

export default StoreCard;
