import { createContext } from "react";

export const DefaultMetaTagsContextProvider = (() => {
  const setMeta = (name: string, value: any) => {
    const head = document.querySelector<HTMLMetaElement>("head");
    if (!head) {
      throw new Error("head tag not found");
    }
    let tag = document.querySelector<HTMLMetaElement>(`head meta[name=${name}]`);
    if (!tag) {
      tag = document.createElement("meta");
      head.appendChild(tag);
    }
    tag.name = name;
    tag.content = value;
  };
  return {
    setTitle: (title: string): string => (document.title = title),
    setMeta,
    setDescription: (description: string) => {
      setMeta("description", description);
    },
  };
})();

export const MetaTagsContext = createContext(DefaultMetaTagsContextProvider);
