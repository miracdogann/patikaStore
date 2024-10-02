import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleSheet, TextInput } from 'react-native';
import store from './json/store.json';
import StoreCard from "./components/StoreCard";

const App = () => {
  // Başlık ve arama çubuğunu içeren bir bileşen oluşturuyoruz
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.pageTitle}>PATİKA STORE</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Ara..." // Kullanıcıya bir ipucu ver
        editable={false} // Kullanıcı bu alanı düzenleyemez
      />
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={store}
        renderItem={({ item }) => <StoreCard item={item} />}
        numColumns={2} // Her satırda 2 öğe görüntüle
        ListHeaderComponent={renderHeader} // Başlık ve arama çubuğunu burada ekliyoruz
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
  },
  pageTitle: {
    fontSize: 27,
    color: '#800080',
    fontWeight: '800',
    padding: 5,
  },
  searchInput: {
    backgroundColor: '#ECEFF1',
    padding:10,
    borderRadius:12
  },
})

export default App;
