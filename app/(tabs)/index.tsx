import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FacebookHeader from "@/components/FacebookHeader";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FacebookHeader />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Content will be added here in future iterations */}
        <View style={styles.placeholder}>
          {/* This is where the Facebook feed content would go */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  placeholder: {
    height: 500,
    backgroundColor: "transparent",
  },
});
