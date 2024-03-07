## Functions

<dl>
<dt><a href="#find">find(text)</a> ⇒</dt>
<dd><p>Find an emoji by its name or alias.</p>
</dd>
<dt><a href="#has">has(text, emojiType)</a> ⇒</dt>
<dd><p>Check if a text contains emojis of a specified type.</p>
</dd>
<dt><a href="#strip">strip(text, emojiType)</a> ⇒</dt>
<dd><p>Remove emojis from a text based on the specified type.</p>
</dd>
<dt><a href="#search">search(text)</a> ⇒</dt>
<dd><p>Search for emojis in a text and return an array of emoji objects.</p>
</dd>
<dt><a href="#unemojify">unemojify(text)</a> ⇒</dt>
<dd><p>Replace emoji codes with their respective Unicode characters.</p>
</dd>
<dt><a href="#emojify">emojify(text)</a> ⇒</dt>
<dd><p>Replace Unicode characters with their respective emoji codes.</p>
</dd>
</dl>

<a name="find"></a>

## find(text) ⇒

Find an emoji by its name or alias.

**Kind**: global function
**Returns**: The emoji object if found, otherwise null.

| Param | Description                                   |
| ----- | --------------------------------------------- |
| text  | The name or alias of the emoji to search for. |

**Example**

```typescript
const foundEmoji = find(":heart:");
console.log(foundEmoji); // Output: { name: 'red heart', alias: ':heart:', slug: '2764', ... }
```

<a name="has"></a>

## has(text, emojiType) ⇒

Check if a text contains emojis of a specified type.

**Kind**: global function
**Returns**: True if emojis of the specified type are found, otherwise false.

| Param     | Default          | Description                                                                       |
| --------- | ---------------- | --------------------------------------------------------------------------------- |
| text      |                  | The text to search for emojis.                                                    |
| emojiType | <code>all</code> | The type of emojis to search for: "unicode", "emoji", or "all". Default is "all". |

**Example**

```typescript
console.log(has("I ❤️ coding with emojis!")); // Output: true
console.log(has("I ❤️ coding with emojis!", "unicode")); // Output: true
console.log(has("I ❤️ coding with emojis!", "emoji")); // Output: true
```

<a name="strip"></a>

## strip(text, emojiType) ⇒

Remove emojis from a text based on the specified type.

**Kind**: global function
**Returns**: The text with emojis removed.

| Param     | Default          | Description                                                                   |
| --------- | ---------------- | ----------------------------------------------------------------------------- |
| text      |                  | The text from which to remove emojis.                                         |
| emojiType | <code>all</code> | The type of emojis to remove: "unicode", "emoji", or "all". Default is "all". |

**Example**

```typescript
console.log(strip("I ❤️ coding with emojis!")); // Output: "I love coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "unicode")); // Output: "I love ❤️ coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "emoji")); // Output: "I ❤️ coding with emojis!"
```

<a name="search"></a>

## search(text) ⇒

Search for emojis in a text and return an array of emoji objects.

**Kind**: global function
**Returns**: An array of emoji objects found in the text.

| Param | Description                    |
| ----- | ------------------------------ |
| text  | The text to search for emojis. |

**Example**

```typescript
console.log(search("I ❤️ coding with emojis!")); // Output: [ { name: 'red heart', alias: ':heart:', ... }, ... ]
```

<a name="unemojify"></a>

## unemojify(text) ⇒

Replace emoji codes with their respective Unicode characters.

**Kind**: global function
**Returns**: The text with emoji codes replaced by Unicode characters.

| Param | Description                                            |
| ----- | ------------------------------------------------------ |
| text  | The text to convert emoji codes to Unicode characters. |

**Example**

```typescript
console.log(unemojify(":heart: :smile:")); // Output: "❤️ 😊"
```

<a name="emojify"></a>

## emojify(text) ⇒

Replace Unicode characters with their respective emoji codes.

**Kind**: global function
**Returns**: The text with Unicode characters replaced by emoji codes.

| Param | Description                                            |
| ----- | ------------------------------------------------------ |
| text  | The text to convert Unicode characters to emoji codes. |

**Example**

```typescript
console.log(emojify("I ❤️ coding with emojis!")); // Output: "I :heart: coding with :smile:!"
```
