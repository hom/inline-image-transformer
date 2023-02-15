# inline-file-transformer

Jest file transform to inline source

## Usage

Install `inline-file-transformer`

```bash
npm install inline-file-transformer
```

In `jest.config.ts` or `jest.config.js`, add `inline-file-transformer` to `transform`, such as:

```js
export default {
  transform: {
    '\\.(jpg|jpeg|png|gif)$':
      'inline-file-transformer',
  }
}
```
