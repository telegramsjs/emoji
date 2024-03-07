type UnicodeEmoji = {
  [key: string]: {
    name: string;
    alias?: string;
    slug: string;
    group: string;
    emoji_version: string;
    unicode_version: string;
    skin_tone_support: boolean;
  };
};

type EmojiTypeSearch = "unicode" | "emoji" | "all";

type AliasEmoji = Required<UnicodeEmoji[keyof UnicodeEmoji]>;

export { UnicodeEmoji, EmojiTypeSearch, AliasEmoji };
