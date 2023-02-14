import { readFileSync } from 'fs';
import type { Config, TransformTypes } from '@jest/types';

export type TransformedSource = {
  code: string;
};

export interface CallerTransformOptions {
  // names are copied from babel: https://babeljs.io/docs/en/options#caller
  supportsDynamicImport: boolean;
  supportsExportNamespaceFrom: boolean;
  supportsStaticESM: boolean;
  supportsTopLevelAwait: boolean;
}

export interface ReducedTransformOptions extends CallerTransformOptions {
  instrument: boolean;
}

export type StringMap = Map<string, string>;

export interface TransformOptions<TransformerConfig = unknown>
  extends ReducedTransformOptions {
  /** Cached file system which is used by `jest-runtime` to improve performance. */
  cacheFS: StringMap;
  /** Jest configuration of currently running project. */
  config: Config.ProjectConfig;
  /** Stringified version of the `config` - useful in cache busting. */
  configString: string;
  /** Transformer configuration passed through `transform` option by the user. */
  transformerConfig: TransformerConfig;
}

export function process(text: string, path: string, options: TransformOptions): TransformedSource {
  const source = readFileSync(path).toString('base64')
  return {
    code: `module.exports = ${JSON.stringify(source)}`,
  }
}
