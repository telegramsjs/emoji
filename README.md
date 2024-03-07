# @telegram.ts/emoji

[![NPM Version](https://img.shields.io/npm/v/@telegram.ts/emoji)](https://www.npmjs.com/package/@telegram.ts/emoji)
[![Bot API](https://img.shields.io/badge/Bot%20API-v.7.1-00aced.svg?style=flat-square&logo=telegram)](https://core.telegram.org/bots/api)
[![NPM Downloads](https://img.shields.io/npm/dt/@telegram.ts/emoji.svg?maxAge=3600)](https://www.npmjs.com/package/@telegram.ts/emoji)
[![License](https://img.shields.io/npm/l/@telegram.ts/emoji)](https://github.com/telegramsjs/plugins/blob/main/LICENSE)

Library for working with emojis in TypeScript.

## Installation

```bash
npm install @telegram.ts/emoji
```

## Usage

```typescript
import { find, search, unemojify, emojify } from "@telegram.ts/emoji";

// Find an emoji by its name or alias
const foundEmoji = find(":heart:");
console.log(foundEmoji); // Output: { name: 'red heart', alias: ':heart:', slug: '2764', ... }

// Check if a text contains emojis of a specified type
console.log(has("I ❤️ coding with emojis!")); // Output: true
console.log(has("I ❤️ coding with emojis!", "unicode")); // Output: true
console.log(has("I ❤️ coding with emojis!", "emoji")); // Output: true

// Remove emojis from a text based on the specified type
console.log(strip("I ❤️ coding with emojis!")); // Output: "I love coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "unicode")); // Output: "I love ❤️ coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "emoji")); // Output: "I ❤️ coding with emojis!"

// Search for emojis in a text and return an array of emoji objects
console.log(search("I ❤️ coding with emojis!")); // Output: [ { name: 'red heart', alias: ':heart:', ... }, ... ]

// Replace emoji codes with their respective Unicode characters
console.log(unemojify(":heart: :smile:")); // Output: "❤️ 😊"

// Replace Unicode characters with their respective emoji codes
console.log(emojify("I ❤️ coding with emojis!")); // Output: "I :heart: coding with :smile:!"
```

## API

### find(text: string): AliasEmoji | null

Find an emoji by its name or alias.

### has(text: string, emojiType?: EmojiTypeSearch): boolean

Check if a text contains emojis of a specified type.

### strip(text: string, emojiType?: EmojiTypeSearch): string

Remove emojis from a text based on the specified type.

### search(text: string): (AliasEmoji | null)[]

Search for emojis in a text and return an array of emoji objects.

### unemojify(text: string): string

Replace emoji codes with their respective Unicode characters.

### emojify(text: string): string

Replace Unicode characters with their respective emoji codes.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/telegramsjs/emoji/blob/main/LICENSE) file for details.