[@telegram.ts/types](README.md) / Exports

# @telegram.ts/types

## Table of contents

### Type Aliases

- [AliasEmoji](modules.md#aliasemoji)
- [EmojiTypeSearch](modules.md#emojitypesearch)
- [UnicodeEmoji](modules.md#unicodeemoji)

### Variables

- [default](modules.md#default)

### Functions

- [emojify](modules.md#emojify)
- [find](modules.md#find)
- [has](modules.md#has)
- [search](modules.md#search)
- [strip](modules.md#strip)
- [unemojify](modules.md#unemojify)

## Type Aliases

### AliasEmoji

Ƭ **AliasEmoji**: `Required`\<[`UnicodeEmoji`](modules.md#unicodeemoji)[keyof [`UnicodeEmoji`](modules.md#unicodeemoji)]\>

#### Defined in

[types.ts:15](https://github.com/telegramsjs/emoji/blob/372e300/src/types.ts#L15)

___

### EmojiTypeSearch

Ƭ **EmojiTypeSearch**: ``"unicode"`` \| ``"emoji"`` \| ``"all"``

#### Defined in

[types.ts:13](https://github.com/telegramsjs/emoji/blob/372e300/src/types.ts#L13)

___

### UnicodeEmoji

Ƭ **UnicodeEmoji**: `Object`

#### Index signature

▪ [key: `string`]: \{ `alias?`: `string` ; `emoji_version`: `string` ; `group`: `string` ; `name`: `string` ; `skin_tone_support`: `boolean` ; `slug`: `string` ; `unicode_version`: `string`  }

#### Defined in

[types.ts:1](https://github.com/telegramsjs/emoji/blob/372e300/src/types.ts#L1)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `emojify` | (`text`: `string`) => `string` |
| `find` | (`text`: `string`) => [`AliasEmoji`](modules.md#aliasemoji) \| ``null`` |
| `has` | (`text`: `string`, `emojiType`: [`EmojiTypeSearch`](modules.md#emojitypesearch)) => `boolean` |
| `search` | (`text`: `string`) => ([`AliasEmoji`](modules.md#aliasemoji) \| ``null``)[] |
| `strip` | (`text`: `string`, `emojiType`: [`EmojiTypeSearch`](modules.md#emojitypesearch)) => `string` |
| `unemojify` | (`text`: `string`) => `string` |

#### Defined in

[index.ts:201](https://github.com/telegramsjs/emoji/blob/372e300/src/index.ts#L201)

## Functions

### emojify

▸ **emojify**(`text`): `string`

Replace Unicode characters with their respective emoji codes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to convert Unicode characters to emoji codes. |

#### Returns

`string`

The text with Unicode characters replaced by emoji codes.

**`Example`**

```typescript
console.log(emojify("I ❤️ coding with emojis!")); // Output: "I :heart: coding with :smile:!"
```

#### Defined in

[index.ts:184](https://github.com/telegramsjs/emoji/blob/372e300/src/index.ts#L184)

___

### find

▸ **find**(`text`): [`AliasEmoji`](modules.md#aliasemoji) \| ``null``

Find an emoji by its name or alias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The name or alias of the emoji to search for. |

#### Returns

[`AliasEmoji`](modules.md#aliasemoji) \| ``null``

The emoji object if found, otherwise null.

**`Example`**

```typescript
const foundEmoji = find(":heart:");
console.log(foundEmoji); // Output: { name: 'red heart', alias: ':heart:', slug: '2764', ... }
```

#### Defined in

[index.ts:18](https://github.com/telegramsjs/emoji/blob/372e300/src/index.ts#L18)

___

### has

▸ **has**(`text`, `emojiType?`): `boolean`

Check if a text contains emojis of a specified type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The text to search for emojis. |
| `emojiType` | [`EmojiTypeSearch`](modules.md#emojitypesearch) | `"all"` | The type of emojis to search for: "unicode", "emoji", or "all". Default is "all". |

#### Returns

`boolean`

True if emojis of the specified type are found, otherwise false.

**`Example`**

```typescript
console.log(has("I ❤️ coding with emojis!")); // Output: true
console.log(has("I ❤️ coding with emojis!", "unicode")); // Output: true
console.log(has("I ❤️ coding with emojis!", "emoji")); // Output: true
```

#### Defined in

[index.ts:49](https://github.com/telegramsjs/emoji/blob/372e300/src/index.ts#L49)

___

### search

▸ **search**(`text`): ([`AliasEmoji`](modules.md#aliasemoji) \| ``null``)[]

Search for emojis in a text and return an array of emoji objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to search for emojis. |

#### Returns

([`AliasEmoji`](modules.md#aliasemoji) \| ``null``)[]

An array of emoji objects found in the text.

**`Example`**

```typescript
console.log(search("I ❤️ coding with emojis!")); // Output: [ { name: 'red heart', alias: ':heart:', ... }, ... ]
```

#### Defined in

[index.ts:132](https://github.com/telegramsjs/emoji/blob/372e300/src/index.ts#L132)

___

### strip

▸ **strip**(`text`, `emojiType?`): `string`

Remove emojis from a text based on the specified type.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The text from which to remove emojis. |
| `emojiType` | [`EmojiTypeSearch`](modules.md#emojitypesearch) | `"all"` | The type of emojis to remove: "unicode", "emoji", or "all". Default is "all". |

#### Returns

`string`

The text with emojis removed.

**`Example`**

```typescript
console.log(strip("I ❤️ coding with emojis!")); // Output: "I love coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "unicode")); // Output: "I love ❤️ coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "emoji")); // Output: "I ❤️ coding with emojis!"
```

#### Defined in

[index.ts:92](https://github.com/telegramsjs/emoji/blob/372e300/src/index.ts#L92)

___

### unemojify

▸ **unemojify**(`text`): `string`

Replace emoji codes with their respective Unicode characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to convert emoji codes to Unicode characters. |

#### Returns

`string`

The text with emoji codes replaced by Unicode characters.

**`Example`**

```typescript
console.log(unemojify(":heart: :smile:")); // Output: "❤️ 😊"
```

#### Defined in

[index.ts:162](https://github.com/telegramsjs/emoji/blob/372e300/src/index.ts#L162)
