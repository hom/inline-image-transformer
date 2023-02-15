# inline-image-transformer

Jest file transform to inline source

## Usage

Install `inline-image-transformer`

```bash
npm install inline-image-transformer
```

In `jest.config.ts` or `jest.config.js`, add `inline-image-transformer` to `transform`, such as:

```js
export default {
  transform: {
    '\\.(jpg|jpeg|png|gif)$':
      'inline-image-transformer',
  }
}
```
