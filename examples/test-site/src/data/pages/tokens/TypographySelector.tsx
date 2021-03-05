import { WithNodeKeyProps } from '@bodiless/core';
import { addProps } from '@bodiless/fclasses';
import { flow } from 'lodash';
import React, { ComponentType } from 'react';
import {
  withCategory, withTokenPanelPane, useTokenLibrary, withTokensFromProps,
} from '@bodiless/tokens';
import type { TokenSelectorProps } from '@bodiless/tokens';
import {
  asBold,
  asItalic,
  asUnderline,
  asLink,
  asStrikeThrough,
  asHeader1,
  asHeader2,
  asHeader3,
  asCta,
  asPrimaryColorBackground,
  asSuperScript,
  asTextColorPrimary,
} from '../../../components/Elements.token';

const availableTokens = {
  asBold: withCategory('Style')(asBold),
  asItalic: withCategory('Style')(asItalic),
  asUnderline: withCategory('Style')(asUnderline),
  asLink: withCategory('Style')(asLink),
  asStrikeThrough: withCategory('Style')(asStrikeThrough),
  asHeader1: withCategory('Headers')(asHeader1),
  asHeader2: withCategory('Headers')(asHeader2),
  asHeader3: withCategory('Headers')(asHeader3),
  asCta: withCategory('Style')(asCta),
  asPrimaryColorBackground: withCategory('Color')(asPrimaryColorBackground),
  asSuperScript: withCategory('Style')(asSuperScript),
  asTextColorPrimary: withCategory('Color')(asTextColorPrimary),
  // asTextWhite: asToken('Clor')(addClasses('text-white')),
};

const withDataTokens = (target: string) => <P extends object>(
  Component: ComponentType<P & TokenSelectorProps>,
) => {
  const WithDataTokens = (props: P & TokenSelectorProps) => {
    const dataTokens = useTokenLibrary(target);
    const { availableTokens: propTokens, ...rest } = props;
    return (
      <Component
        {...rest as P}
        availableTokens={{ ...propTokens, ...dataTokens }}
      />
    );
  };
  return WithDataTokens;
};

// const withTypographySelector = (
//   nodeKey: WithNodeKeyProps,
//   defaultData?: any,
//   useOverrides?: UseBodilessOverrides<any, any>,
// ) => flow(
//   withTokensFromProps,
//   withTokenSelector(nodeKey, defaultData, useOverrides),
//   withDataTokens('typography'),
//   addProps({ availableTokens }),
// );

// eslint-disable-next-line import/prefer-default-export
export const withTypographyTokenPanel = (
  nodeKey: WithNodeKeyProps,
  defaultData?: any,
) => flow(
  withTokensFromProps,
  withTokenPanelPane(nodeKey, defaultData),
  withDataTokens('typography'),
  addProps({ availableTokens }),
);

// export default withTypographySelector;
