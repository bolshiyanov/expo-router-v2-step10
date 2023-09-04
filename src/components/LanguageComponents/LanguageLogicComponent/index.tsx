import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/components/utils/hooks/redux";
import { getLocales } from "expo-localization";
import { langChangeAction } from "@/store/reducers/LangSlice";
import { supportedLang, defaultdLang} from "config";
import { Platform } from "react-native";


const LanguageLogicComponent = () => {
  const dispatch = useAppDispatch();
  const savedLang = useAppSelector((state) => state.langSlice.lang);

  useEffect(() => {
    if (Platform.OS === "web") {
      const savedLang = localStorage.getItem("lang");
      const browserLang = navigator.language.split("-")[0]; // Extract the language code

      if (!savedLang) {
        const browserLangKey = Object.keys(supportedLang).find(
          (key) => supportedLang[key] === browserLang
        );
        if (browserLangKey) {
          dispatch(langChangeAction(browserLangKey));
          localStorage.setItem("lang", browserLangKey);
        } else {
          // If user's language is not supported, dispatch 'en' or your default language
          const defaultLanguage = defaultdLang; // Change this to your desired default language
          dispatch(langChangeAction(defaultLanguage));
          localStorage.setItem("lang", defaultLanguage);
        }
      } else {
        dispatch(langChangeAction(savedLang));
      }
    } else {
      const deviceLang = getLocales()[0].languageCode;

      if (!savedLang) {
        const deviceLangKey = Object.keys(supportedLang).find(
          (key) => supportedLang[key] === deviceLang
        );
        if (deviceLangKey) {
          dispatch(langChangeAction(deviceLangKey));
        } else {
          // If user's language is not supported, dispatch 'en' or your default language
          const defaultLanguage = defaultdLang; // Change this to your desired default language
          dispatch(langChangeAction(defaultLanguage));
        }
      }
    }
  }, [dispatch, supportedLang]);
  return null;
};

export default LanguageLogicComponent;
