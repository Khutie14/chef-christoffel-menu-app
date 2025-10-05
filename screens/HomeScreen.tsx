import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dish } from "../App";
import { MotiView } from "moti";

type Props = {
  menu: Dish[];
};

export default function HomeScreen({ menu }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Chef Christoffel’s Menu 🍽️</Text>

      <Button
        title="Add New Dish"
        color="#e63946"
        onPress={() => navigation.navigate("AddDish" as never)}
      />

      <Text style={styles.count}>Total Dishes: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: index * 150, damping: 15 }}
            style={styles.item}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.course}>{item.course.toUpperCase()}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.price}>R {item.price}</Text>
          </MotiView>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0a1f44", // dark blue background
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  count: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#e63946",
  },
  course: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0a1f44",
  },
  desc: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0a1f44",
  },
});
