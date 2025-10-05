# chef-christoffel-menu-app
# 🍽️ Chef Christoffel Menu App— POE Part 2

## 📖 Project Description
The **Chef’s Menu App** is a mobile application built using **React Native** and **Expo**.  
It allows chefs to create, manage, and view a menu of dishes. The app’s Home Screen displays the **list of dishes saved by the chef** and the **total number of menu items** currently available.  

This project is part of my **Portfolio of Evidence (POE) Part 2** submission for the **Web and App Development** module. It demonstrates my understanding of React Native components, navigation, and data management concepts.

---

## 🎯 Objectives
- To build a functional React Native app using **Expo**.  
- To demonstrate component-based development and navigation between screens.  
- To allow users (chefs) to add, view, and manage dishes.  
- To display the **total number of dishes** dynamically on the Home Screen.  
- To apply good design practices using consistent color themes (red and dark blue).  

---

## ⚙️ Features
- 🧾 **Home Screen** – Displays all dishes added by the chef and shows the total dish count.  
- ➕ **Add Dish Screen** – Allows adding new dishes with names, descriptions, and prices.  
- 💾 **Local Data Storage** – Saves and retrieves dish data (using React state or AsyncStorage).  
- 🎨 **Professional UI** – Designed using red (`#e63946`) and dark blue (`#0a1f44`) theme colors.  
- 🔁 **Dynamic Updates** – Home Screen updates immediately when new dishes are added.  

---

## 🧩 Technologies Used
- **React Native** (via **Expo Snack**)  
- **JavaScript (ES6)**  
- **React Navigation**  
- **Expo CLI**  
- **AsyncStorage** (for saving dishes locally)  

---

## 🧰 Installation & Setup Instructions

### Option 1: Run in Snack
1. Open the project in [Snack Expo](https://snack.expo.dev/).  
2. Click “Run” to start the app in your browser or scan the QR code using **Expo Go** on your phone.  
3. You’ll land on the **Home Screen**, showing the saved dishes (if any).  
4. Use the **Add Dish** button to go to the AddDishScreen and add new menu items.

### Option 2: Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/[YourUsername]/chefs-menu-app.git

📱 How the App Works
1.Home Screen
Displays the list of all dishes that the chef has added.
Shows the total number of dishes at the top.
Includes a button to navigate to the Add Dish Screen.
2.Add Dish Screen
Lets the chef add new dishes by entering the name, description, and price.
After saving, the app returns to the Home Screen where the new dish is displayed instantly. 
3.Data Display
The total dish count updates in real-time.
All dishes remain visible while the app is running. 

🧠 Concepts Demonstrated
Functional components in React Native
State management using the useState hook
Passing data between screens using React Navigation
Displaying lists with FlatList
Dynamic UI updates and data binding
Component reusability and layout design

🎨 Design & Theme
Primary Colors:
🔴 Red — #e63946
🔵 Dark Blue — #0a1f44
Clean, professional layout with rounded buttons and easy navigation.
Home Screen and Add Dish Screen are visually consistent for a user-friendly experience.

🖼️ Screenshots
Home Screen

![image alt](https://github.com/Khutie14/chef-christoffel-menu-app/blob/main/HomeScreen%20screenshot.jpeg?raw=true)

Add Dish Screen

![image alt](https://github.com/Khutie14/chef-christoffel-menu-app/blob/main/AddDishScreen%20screenshot.jpeg?raw=true)


🧩 Acknowledgements
React Native Documentation
Expo Documentation
React Navigation
Guidance from lecturer and peers during development
