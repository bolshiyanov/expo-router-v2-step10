import { Link } from "expo-router";
import { useAppSelector } from "@/components/utils/hooks/redux";
import transformLanguageData from "@/components/utils/transformLanguageData";
import FooterComponent from "@/components/FooterComponent";

import {
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
  StyleSheet,
  Text
} from "react-native";
import Colors from "config";

import { DataTypeInterface } from "@/constants/types/dataType";
import data from "@/data/data";

export default function BlogIndexComponent({langPage}) {
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
        {transformLanguageData("name", langPage, item)}
        </Text>
      </Pressable>
    </Link>
  );


  return (
   
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.path}
        numColumns={size}
        key={size}
        style={[styles.container, { backgroundColor: selectedTheme.background }]}
       ListFooterComponent={FooterComponent}
      />
     
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
    elevation: 4,
    overflow: "hidden",
    borderStyle: "solid",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "80%",
  },
  name: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 8,
    textTransform: "uppercase",
  },
});
