import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "./ui/IconSymbol";

interface Post {
  id: string;
  username: string;
  profilePicture: any;
  timeAgo: string;
  content: string;
  postImage?: any;
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  privacy: "public" | "friends" | "custom";
}

const mockPosts: Post[] = [
  {
    id: "1",
    username: "Mahmudul Islam Mahin",
    profilePicture: require("../uploads/B.jpg"),
    timeAgo: "2h",
    content: "Shop With Errum BD Today",
    postImage: require("../uploads/W.jpg"),
    likes: 124,
    comments: 23,
    shares: 8,
    isLiked: false,
    privacy: "public",
  },
  {
    id: "2",
    username: "Mohammad Jabir",
    profilePicture: require("../uploads/C.jpg"),
    timeAgo: "4h",
    content: "I Love my Cat",
    postImage: require("../uploads/X.jpg"),
    likes: 89,
    comments: 15,
    shares: 5,
    isLiked: true,
    privacy: "friends",
  },
  {
    id: "3",
    username: "Saadman Sakib",
    profilePicture: require("../uploads/D.jpg"),
    timeAgo: "6h",
    content:
      "Working on a new project! Excited to share the results soon. Stay tuned! 💻",
    likes: 67,
    comments: 12,
    shares: 3,
    isLiked: false,
    privacy: "custom",
  },
  {
    id: "4",
    username: "Nahiyan Kabir",
    profilePicture: require("../uploads/E.jpg"),
    timeAgo: "8h",
    content: "Great day watching Anime!",
    postImage: require("../uploads/Z.jpg"),
    likes: 156,
    comments: 34,
    shares: 12,
    isLiked: true,
    privacy: "public",
  },
];

export default function Posts() {
  const getPrivacyIcon = (privacy: "public" | "friends" | "custom") => {
    switch (privacy) {
      case "public":
        return "globe";
      case "friends":
        return "person.2.fill";
      case "custom":
        return "gear";
      default:
        return "globe";
    }
  };

  const renderPost = (post: Post) => {
    return (
      <View key={post.id} style={styles.postContainer}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image source={post.profilePicture} style={styles.profilePicture} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{post.username}</Text>
            <View style={styles.postMetaInfo}>
              <Text style={styles.timeAgo}>{post.timeAgo}</Text>
              <Text style={styles.metaSeparator}>•</Text>
              <IconSymbol
                name={getPrivacyIcon(post.privacy)}
                size={12}
                color="#65676B"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.moreButton}>
            <IconSymbol name="ellipsis" size={20} color="#65676B" />
          </TouchableOpacity>
        </View>

        {/* Post Content */}
        <Text style={styles.postContent}>{post.content}</Text>

        {/* Post Image */}
        {post.postImage && (
          <Image source={post.postImage} style={styles.postImage} />
        )}

        {/* Post Stats */}
        <View style={styles.postStats}>
          {/* Left side - Reaction buttons and count */}
          <View style={styles.statsLeft}>
            {post.likes > 0 && (
              <View style={styles.reactionSection}>
                <View style={styles.reactionButtons}>
                  <View style={styles.reactionButton}>
                    <View style={styles.blueReactionBg}>
                      <AntDesign name="like1" size={10} color="#FFFFFF" />
                    </View>
                  </View>
                  <View style={styles.reactionButton}>
                    <View style={styles.redReactionBg}>
                      <MaterialIcons
                        name="favorite"
                        size={10}
                        color="#FFFFFF"
                      />
                    </View>
                  </View>
                  <View style={styles.reactionButton}>
                    <View style={styles.yellowReactionBg}>
                      <FontAwesome6
                        name="face-sad-cry"
                        size={16}
                        color="#000000ff"
                      />
                    </View>
                  </View>
                </View>
                <Text style={styles.statsText}>{post.likes}</Text>
              </View>
            )}
          </View>

          {/* Right side - Comments and Shares */}
          <View style={styles.statsRight}>
            {post.comments > 0 && (
              <Text style={styles.statsText}>{post.comments} comments</Text>
            )}
            {post.comments > 0 && post.shares > 0 && (
              <Text style={styles.metaSeparator}> • </Text>
            )}
            {post.shares > 0 && (
              <Text style={styles.statsText}>{post.shares} shares</Text>
            )}
          </View>
        </View>

        {/* Post Actions */}
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionButton}>
            <AntDesign
              name="like2"
              size={20}
              color={post.isLiked ? "#1877F2" : "#65676B"}
            />
            <Text
              style={[
                styles.actionText,
                { color: post.isLiked ? "#1877F2" : "#65676B" },
              ]}
            >
              Like
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <EvilIcons
              name="comment"
              size={24}
              color="#65676B"
              style={{ transform: [{ scaleX: -1 }] }}
            />
            <Text style={styles.actionText}>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="share" size={18} color="#65676B" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {mockPosts.map((post) => renderPost(post))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    backgroundColor: "#FFFFFF",
    marginBottom: 8,
    paddingTop: 12,
    borderBottomWidth: 4,
    borderBottomColor: "#c1c1c1ff",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1C1E21",
  },
  postMetaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  timeAgo: {
    fontSize: 13,
    color: "#65676B",
  },
  metaSeparator: {
    fontSize: 13,
    color: "#65676B",
    marginHorizontal: 4,
  },
  moreButton: {
    padding: 8,
  },
  postContent: {
    fontSize: 16,
    color: "#1C1E21",
    lineHeight: 20,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    marginBottom: 2,
  },
  postStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6EA",
  },
  statsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsText: {
    fontSize: 13,
    color: "#65676B",
  },
  reactionSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  reactionButtons: {
    flexDirection: "row",
    marginRight: 6,
  },
  reactionButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginRight: -4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  blueReactionBg: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#1877F2",
    justifyContent: "center",
    alignItems: "center",
  },
  redReactionBg: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#E74C3C",
    justifyContent: "center",
    alignItems: "center",
  },
  yellowReactionBg: {
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    color: "#F1C40F",
    backgroundColor: "#f7edc4ff",
  },
  postActions: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  actionText: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 6,
    color: "#65676B",
  },
});
