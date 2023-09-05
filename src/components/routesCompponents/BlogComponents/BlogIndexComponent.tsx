import { Link } from "expo-router";
import { useAppSelector } from "@/components/utils/hooks/redux";
import { ScrollView } from "react-native-gesture-handler";
import FooterComponent from "@/components/FooterComponent";

import {
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import Colors from "config";

import { DataTypeInterface } from "@/constants/types/dataType";
import data from "@/data/data";

export default function BlogIndexComponent() {
  const lang = "es";
  const theme = useAppSelector((state) => state.themeSlice.theme);
  const selectedTheme = theme === "dark" ? Colors.dark : Colors.light;
  const isProduction = process.env.NODE_ENV === "production";

  const { width } = useWindowDimensions();
  const size = Math.round(width / 250);

  const renderItem = ({ item }: { item: DataTypeInterface }) => (
    <Link
      href={`/${lang}/blog/${isProduction ? item.path + ".html" : item.path}`}
      asChild
    >
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={[styles.name, { color: selectedTheme.subTitle }]}>
          {item.name}
        </Text>
      </Pressable>
    </Link>
  );
  const FooterComp = () => {
    return <FooterComponent />
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: selectedTheme.background }]}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.path}
        numColumns={size}
        key={size}
        ListFooterComponent={FooterComp}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  city: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
    borderStyle: "solid",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "70%",
  },
  name: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    textTransform: "uppercase",
  },
});
