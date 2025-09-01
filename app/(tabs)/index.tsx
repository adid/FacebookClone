import CreatePost from "@/components/CreatePost";
import FacebookHeader from "@/components/FacebookHeader";
import Posts from "@/components/Posts";
import Stories from "@/components/Stories";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <FacebookHeader />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Part 1: What's on your mind? */}
        <CreatePost />

        {/* Part 2: Stories */}
        <Stories />

        {/* Part 3: Posts Feed */}
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 55,
  },
  content: {
    flex: 1,
    backgroundColor: "#ffffffff",
  },
  placeholder: {
    height: 500,
    backgroundColor: "transparent",
  },
});
