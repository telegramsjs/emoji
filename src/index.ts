import type { UnicodeEmoji, EmojiTypeSearch, AliasEmoji } from "./types";
const emojiJSON: UnicodeEmoji = require("unicode-emoji-json");

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Find an emoji by its name or alias.
 * @param text The name or alias of the emoji to search for.
 * @returns The emoji object if found, otherwise null.
 * @example
 * ```typescript
 * const foundEmoji = find(":heart:");
 * console.log(foundEmoji); // Output: { name: 'red heart', alias: ':heart:', slug: '2764', ... }
 * ```
 */
function find(text: string): AliasEmoji | null {
  if (!text) {
    throw new TypeError("Specify function parameters");
  }

  const trimmedText = text.trim();
  const emojis = Object.keys(emojiJSON);
  const isAlias = trimmedText[0] === ":";

  for (const emoji of emojis) {
    const emojiSlug = `:${emojiJSON[emoji].slug}:`;
    if ((isAlias && emojiSlug === text) || (!isAlias && emoji === text)) {
      return { alias: emoji, ...emojiJSON[emoji] };
    }
  }

  return null;
}

/**
 * Check if a text contains emojis of a specified type.
 * @param text The text to search for emojis.
 * @param emojiType The type of emojis to search for: "unicode", "emoji", or "all". Default is "all".
 * @returns True if emojis of the specified type are found, otherwise false.
 * @example
 * ```typescript
 * console.log(has("I ❤️ coding with emojis!")); // Output: true
 * console.log(has("I ❤️ coding with emojis!", "unicode")); // Output: true
 * console.log(has("I ❤️ coding with emojis!", "emoji")); // Output: true
 * ```
 */
function has(text: string, emojiType: EmojiTypeSearch = "all"): boolean {
  if (!text) {
    throw new TypeError("Specify function parameters");
  }

  const isValidType =
    emojiType === "unicode" || emojiType === "emoji" || emojiType === "all";

  if (!isValidType) {
    throw new TypeError(
      "Invalid emojiType parameter. Valid values are 'unicode', 'emoji', or 'all'.",
    );
  }

  const emojiRegex = new RegExp(
    Object.keys(emojiJSON)
      .map((emoji) => {
        if (emojiType === "unicode") {
          return escapeRegExp(`:${emojiJSON[emoji].slug}:`);
        } else if (emojiType === "emoji") {
          return escapeRegExp(emoji);
        } else {
          return escapeRegExp(`:${emojiJSON[emoji].slug}:|${emoji}`);
        }
      })
      .join("|"),
    "g",
  );
  return emojiRegex.test(text);
}

/**
 * Remove emojis from a text based on the specified type.
 * @param text The text from which to remove emojis.
 * @param emojiType The type of emojis to remove: "unicode", "emoji", or "all". Default is "all".
 * @returns The text with emojis removed.
 * @example
 * ```typescript
 * console.log(strip("I ❤️ coding with emojis!")); // Output: "I love coding with emojis!"
 * console.log(strip("I ❤️ coding with emojis!", "unicode")); // Output: "I love ❤️ coding with emojis!"
 * console.log(strip("I ❤️ coding with emojis!", "emoji")); // Output: "I ❤️ coding with emojis!"
 * ```
 */
function strip(text: string, emojiType: EmojiTypeSearch = "all"): string {
  if (!text) {
    throw new TypeError("Specify function parameters");
  }

  const isValidType =
    emojiType === "unicode" || emojiType === "emoji" || emojiType === "all";

  if (!isValidType) {
    throw new TypeError(
      "Invalid emojiType parameter. Valid values are 'unicode', 'emoji', or 'all'.",
    );
  }

  const emojiRegex = new RegExp(
    Object.keys(emojiJSON)
      .map((emoji) => {
        if (emojiType === "unicode") {
          return escapeRegExp(`:${emojiJSON[emoji].slug}:`);
        } else if (emojiType === "emoji") {
          return escapeRegExp(emoji);
        } else {
          return escapeRegExp(`:${emojiJSON[emoji].slug}:|${emoji}`);
        }
      })
      .join("|"),
    "g",
  );
  return text.replace(emojiRegex, "");
}

/**
 * Search for emojis in a text and return an array of emoji objects.
 * @param text The text to search for emojis.
 * @returns An array of emoji objects found in the text.
 * @example
 * ```typescript
 * console.log(search("I ❤️ coding with emojis!")); // Output: [ { name: 'red heart', alias: ':heart:', ... }, ... ]
 * ```
 */
function search(text: string): (AliasEmoji | null)[] {
  if (!text) {
    throw new TypeError("Specify function parameters");
  }

  const trimmedText = text.trim().toLowerCase().replace(/\:/g, "");
  const emojis = Object.keys(emojiJSON);
  const results: (Required<
    (typeof emojiJSON)[keyof typeof emojiJSON]
  > | null)[] = [];

  for (const emoji of emojis) {
    const emojiSlug = `:${emojiJSON[emoji].slug}:`.toLowerCase();
    if (emoji.includes(trimmedText) || emojiSlug.includes(trimmedText)) {
      results.push(find(emoji));
    }
  }

  return results;
}

/**
 * Replace emoji codes with their respective Unicode characters.
 * @param text The text to convert emoji codes to Unicode characters.
 * @returns The text with emoji codes replaced by Unicode characters.
 * @example
 * ```typescript
 * console.log(unemojify(":heart: :smile:")); // Output: "❤️ 😊"
 * ```
 */
function unemojify(text: string): string {
  if (!text) {
    throw new TypeError("Specify function parameters");
  }
  if (has(text)) return text;

  const emojiRegex = new RegExp(
    Object.keys(emojiJSON).map(escapeRegExp).join("|"),
    "g",
  );
  return text.replace(emojiRegex, (match) => `:${emojiJSON[match].slug}:`);
}

/**
 * Replace Unicode characters with their respective emoji codes.
 * @param text The text to convert Unicode characters to emoji codes.
 * @returns The text with Unicode characters replaced by emoji codes.
 * @example
 * ```typescript
 * console.log(emojify("I ❤️ coding with emojis!")); // Output: "I :heart: coding with :smile:!"
 * ```
 */
function emojify(text: string): string {
  if (!text) {
    throw new TypeError("Specify function parameters");
  }

  const emojiRegex = new RegExp(
    Object.keys(emojiJSON)
      .map((emoji) => escapeRegExp(`:${emojiJSON[emoji].slug}:`))
      .join("|"),
    "g",
  );
  return text.replace(emojiRegex, (match) => {
    const foundEmoji = find(match);
    return foundEmoji ? foundEmoji.alias : match;
  });
}

export default { find, search, unemojify, emojify };
export {
  UnicodeEmoji,
  EmojiTypeSearch,
  AliasEmoji,
  find,
  search,
  unemojify,
  emojify,
};
