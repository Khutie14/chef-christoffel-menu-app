import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { Dish } from "../App";

type Props = {
  addDish: (dish: Dish) => void;
};

export default function AddDishScreen({ addDish }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("starter");
  const [price, setPrice] = useState("");

  const navigation = useNavigation();

  const handleSave = () => {
    if (!name || !description || !price) {
      alert("Please fill in all fields");
      return;
    }
    addDish({ name, description, course, price });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Dish</Text>

      <TextInput
        placeholder="Dish Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Description"
        style={[styles.input, styles.multiline]}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Course</Text>
      <Picker
        selectedValue={course}
        onValueChange={(value) => setCourse(value)}
        style={styles.picker}
      >
        <Picker.Item label="Starter" value="starter" />
        <Picker.Item label="Main" value="main" />
        <Picker.Item label="Dessert" value="dessert" />
      </Picker>

      <TextInput
        placeholder="Price"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Button title="Save Dish" color="#e63946" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0a1f44",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0a1f44",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  multiline: {
    height: 80,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
  },
});
