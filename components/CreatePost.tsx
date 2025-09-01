import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

export default function CreatePost() {
  return (
    <View style={styles.container}>
      <View style={styles.createPostRow}>
        {/* User Profile Picture */}
        <Image
          source={require("../uploads/A.jpg")}
          style={styles.profilePicture}
        />

        {/* What's on your mind? Text */}
        <Text style={styles.thoughtInput}>
          <Text style={styles.thoughtText}>What's on your mind?</Text>
        </Text>

        {/* Photo Icon */}
        <TouchableOpacity style={styles.photoButton}>
          <IconSymbol name="photo" size={24} color="#6d6d6dff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 4,
    borderBottomColor: "#cacacaff",
  },
  createPostRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 4,
  },
  thoughtInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 12,
  },
  thoughtText: {
    fontSize: 16,
    color: "#000000ff",
  },
  photoButton: {
    padding: 8,
    borderRadius: 20,
  },
});
