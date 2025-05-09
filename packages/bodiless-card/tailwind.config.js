/* eslint-disable import/no-dynamic-require, global-require */
/**
 * Copyright © 2021 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getPackageTailwindConfig } from '@bodiless/fclasses';

const resolver = (pkgName) => require.resolve(pkgName);

const twConfig = {
  purge: [
    './lib/**/!(*.d).{ts,js,jsx,tsx}',
  ],
  theme: {
    aspectRatio: { // defaults to {}
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {
      minWidth: {
        full: '100%',
      },
    },
  },
  variants: {
    overflow: ['responsive', 'hover', 'focus'],
    position: ['responsive', 'hover', 'focus'],
  },
  plugins: [
    // eslint-disable-next-line
    require('tailwindcss-aspect-ratio'),
  ],
};

module.exports = getPackageTailwindConfig({
  twConfig,
  resolver,
});
