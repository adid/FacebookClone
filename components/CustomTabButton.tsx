import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export function CustomTabButton(props: BottomTabBarButtonProps) {
  const { onPress, onLongPress, children, accessibilityState } = props;
  const isFocused = accessibilityState?.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress || undefined}
      style={[
        styles.tabButton,
        {
          backgroundColor: isFocused ? "#E7F3FF" : "transparent",
        },
      ]}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={accessibilityState}
    >
      <View style={styles.tabContent}>{children}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    minHeight: 50,
  },
  tabContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});
