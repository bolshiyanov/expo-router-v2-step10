import translationArray from "@/constants/types/translationArray.json";
import {useAppSelector } from "@/components/utils/hooks/redux";

let lang = null;
export const __ = (text: string) => {
    text = text.toLowerCase();
    const savedLang = useAppSelector((state) => state.langSlice.lang);

    const items = translationArray .filter(e => e.en.toLowerCase() === text);
    if (items.length === 0) {
        return "{{" + text + ":" + (lang ?? savedLang) + "}}"; 
    }

    return items[0][lang ?? savedLang] ?? items[0].en;
};