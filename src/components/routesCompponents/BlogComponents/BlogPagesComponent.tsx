import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useAppSelector } from "@/components/utils/hooks/redux";
import transformLanguageData from "@/components/utils/transformLanguageData";
import { ScrollView } from "react-native-gesture-handler";
import FooterComponent from "@/components/FooterComponent";
import data from "@/data/data";
import Colors from "config";

const BlogPagesComponent = ({ langPage }) => {
  
  const isProduction = process.env.NODE_ENV === "production";
  const theme = useAppSelector((state) => state.themeSlice.theme);
  const selectedTheme = theme === "dark" ? Colors.dark : Colors.light;

  const { path } = useLocalSearchParams();

  let updatedPath = path;
  if (isProduction && typeof updatedPath === "string") {
    updatedPath = updatedPath.replace(".html", "");
  }
  const selectedPath = Array.isArray(updatedPath)
    ? updatedPath[0]
    : updatedPath;
  const item = data.find((c) => c.path.toString() === selectedPath);
  
  return (
    <ScrollView
      style={[styles.container, { backgroundColor: selectedTheme.background }]}
    >
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.boxDetailsContainer}>
            <View style={styles.detailsContainer}>
              <Text style={[styles.name, { color: selectedTheme.text }]}>
                {" "}
                {transformLanguageData("name", langPage, item)}{" "}
              </Text>
              {item.descriptionsEn && (
                <Text
                  style={[
                    styles.detailsText,
                    { color: selectedTheme.subTitle },
                  ]}
                >
                  {transformLanguageData("descriptions", langPage, item)}
                </Text>
              )}
            </View>
          </View>
        </>
      )}
      <FooterComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 16,
    textTransform: "uppercase",
    marginBottom: 24,
  },
  boxDetailsContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  detailsContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
    maxWidth: 800,
    width: "100%",
  },
  detailsText: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 24,
    padding: 16,
    width: "100%",
  },
});

export default BlogPagesComponent;
