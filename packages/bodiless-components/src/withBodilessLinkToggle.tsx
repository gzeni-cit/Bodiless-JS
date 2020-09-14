import React, { Fragment } from 'react';
import {
  withSidecarNodes,
  ifReadOnly, ifEditable, withOnlyProps,
} from '@bodiless/core';
import { flowRight } from 'lodash';
import { replaceWith, withoutProps, withDesign } from '@bodiless/fclasses';
import type { HOC } from '@bodiless/fclasses';
import { withChamelionComponentFormControls, applyChamelion, withChamelionContext } from './Chamelion';

const SafeFragment = withOnlyProps('key', 'children')(Fragment);
const Span = withoutProps('')('span');

// type HOC<P = any, Q = any> = (Component: ComponentType<P>|string) => ComponentType<Q>;

const withBodilessLinkToggle = (asEditableLink: HOC) => flowRight(
  withDesign({
    _default: flowRight(
      ifEditable(replaceWith(Span)),
      ifReadOnly(replaceWith(SafeFragment)),
    ),
    // @TODO: Make withTitle available in bodiless-components, or move this somewhere?
    // On: withTitle('Link'),
    On: (C: any) => {
      const C$ = (props: any) => <C {...props} />;
      C$.title = 'Link';
      return C$;
    },
  }),
  withChamelionContext('toggle'),
  withChamelionComponentFormControls,
  withSidecarNodes(
    asEditableLink,
  ),
  applyChamelion,
);

export default withBodilessLinkToggle;
