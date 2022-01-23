import React from 'react';
import type { HocDesign, DesignableComponents, TokenMeta, HOC } from './types';
import { asToken } from './Tokens';
import { intersection } from 'lodash';

/**
 * Creates an HOC which applies a specified design to the wrapped component.
 *
 * A design is a keyed set of HOC's which should be applied to constituent elements
 * of the wrapped component. The wrapped component itself should accept a components
 * prop, and be wrapped in the `designable` HOC to define a set of base components
 * to which the HOC's should apply.
 *
 * @param design
 * The design to apply
 *
 * @param ...meta
 * Metadata which should be applied to the returned token.
 *
 *
 * @return
 * Token which applies the design to the wrapped component.
 *
 */
export const withHocDesign = <C extends DesignableComponents = any>(
  design: HocDesign<C>,
  ...meta: TokenMeta[]
): HOC => asToken(
    Component => {
      const WithDesign = (props: any) => {
        const { design: designFromProps } = props;
        let finalDesign = design;
        if (designFromProps) {
          const keysToWrap = intersection(Object.keys(designFromProps), Object.keys(design));
          const wrappedDesign = keysToWrap.reduce(
            (acc, key) => ({
              ...acc,
              [key]: asToken(
                design[key]!,
                designFromProps[key]!,
              ),
            }),
            {} as HocDesign<C>,
          );
          finalDesign = { ...design, ...designFromProps, ...wrappedDesign } as HocDesign<C>;
        }
        return <Component {...props} design={finalDesign} />;
      };
      return WithDesign;
    },
    ...meta,
  );
