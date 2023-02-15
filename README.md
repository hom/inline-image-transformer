# file-transformer

Jest file transform to inline source

## Usage

Install `file-transformer`

```bash
npm install file-transformer
```

In `jest.config.ts` or `jest.config.js`, add `file-transformer` to `transform`, such as:

```js
export default {
  transform: {
    '\\.(jpg|jpeg|png|gif)$':
      'file-transformer',
  }
}
```
