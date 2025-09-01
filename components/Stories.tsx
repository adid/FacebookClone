import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

interface Story {
  id: string;
  username: string;
  profilePicture: any;
  storyImage: any;
  isViewed: boolean;
}

const mockStories: Story[] = [
  {
    id: "1",
    username: "Your Story",
    profilePicture: require("../uploads/A.jpg"),
    storyImage: require("../uploads/A.jpg"),
    isViewed: false,
  },
  {
    id: "2",
    username: "Mahmudul Islam Mahin",
    profilePicture: require("../uploads/B.jpg"),
    storyImage: require("../uploads/W.jpg"),
    isViewed: false,
  },
  {
    id: "3",
    username: "Mohammad Jabir",
    profilePicture: require("../uploads/C.jpg"),
    storyImage: require("../uploads/X.jpg"),
    isViewed: true,
  },
  {
    id: "4",
    username: "Saadman Sakib",
    profilePicture: require("../uploads/D.jpg"),
    storyImage: require("../uploads/Y.jpg"),
    isViewed: false,
  },
  {
    id: "5",
    username: "Nahiyan Kabir",
    profilePicture: require("../uploads/E.jpg"),
    storyImage: require("../uploads/Z.jpg"),
    isViewed: true,
  },
];

export default function Stories() {
  const renderStory = (story: Story, index: number) => {
    if (index === 0) {
      return (
        <TouchableOpacity key={story.id} style={styles.storyContainer}>
          <View style={styles.addStoryCardContainer}>
            {/* Image Container */}
            <View style={styles.addStoryImageContainer}>
              <Image source={story.storyImage} style={styles.addStoryImage} />
            </View>

            {/* Plus Icon positioned between image and text */}
            <View style={styles.addIconContainer}>
              <IconSymbol name="plus" size={20} color="#FFFFFF" />
            </View>

            {/* Text Container */}
            <View style={styles.addStoryTextContainer}>
              <Text style={styles.addStoryText}>Create{"\n"}Story</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity key={story.id} style={styles.storyContainer}>
        <View style={styles.storyCardContainer}>
          <Image source={story.storyImage} style={styles.storyImage} />
          <Image
            source={story.profilePicture}
            style={[
              styles.storyProfilePicture,
              {
                borderColor: story.isViewed ? "#BDC3C7" : "#1877F2",
                borderWidth: story.isViewed ? 2 : 3,
              },
            ]}
          />
          {/* Text overlay at bottom-left with transparent background */}
          <View style={styles.storyTextOverlay}>
            <Text style={styles.storyUsername} numberOfLines={2}>
              {story.username}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesScrollContent}
      >
        {mockStories.map((story, index) => renderStory(story, index))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    marginBottom: 8,
    borderBottomWidth: 4,
    borderBottomColor: "#cacacaff",
  },
  storiesScrollContent: {
    paddingHorizontal: 12,
  },
  storyContainer: {
    marginRight: 6,
    width: 120,
  },
  storyCardContainer: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },
  storyImageContainer: {
    position: "relative",
  },
  storyImage: {
    width: 130,
    height: 220, // Increased from 200 to 250
    borderRadius: 12,
  },
  storyProfilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#FFFFFF",
  },
  storyTextOverlay: {
    position: "absolute",
    bottom: 2,
    left: 2,
    right: 2,
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  storyUsername: {
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF", // White text for contrast
    textAlign: "left", // Left-aligned for bottom-left positioning
  },
  addStoryCardContainer: {
    borderWidth: 1,
    borderColor: "#E4E6EA",
    borderRadius: 12,
    height: 220,
    width: 120,
    position: "relative",
    overflow: "hidden",
  },
  addStoryImageContainer: {
    height: 154, // Upper 70% of 220 (175px)
    width: "100%",
  },
  addStoryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  addStoryTextContainer: {
    height: 66,
    backgroundColor: "#f7f7f7ff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  addIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#0d75fdff",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#f7f7f7ff",
    borderWidth: 3,
    position: "absolute",
    top: 134, // Position at the border between image and text (175px - 20px offset)
    left: 40, // Center horizontally
    zIndex: 10,
  },
  addStoryText: {
    fontSize: 11,
    fontWeight: "700", // Bold text
    color: "#1C1E21",
    textAlign: "center",
    textDecorationStyle: "solid",
    lineHeight: 14, // Add line height for better spacing between lines
  },
});
