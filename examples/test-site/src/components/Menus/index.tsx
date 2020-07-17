/**
 * Copyright © 2020 Johnson & Johnson
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

import React, { FC, ComponentType } from 'react';
import { flow } from 'lodash';
import { withPageDimensionsContext, ifViewportIs, ifViewportIsNot } from '@bodiless/components';
import { MenuProps } from '@bodiless/organisms';
import {
  withDesign,
  designable,
  Div,
} from '@bodiless/fclasses';

import MainMenu from './MainMenu';
import BurgerMenu from './BurgerMenu';
import { breakpoints } from '../Page';

type MenuComponents = {
  Menu: ComponentType<any>,
};

type MenuType = (Menu: ComponentType<any>) => ComponentType<any>;

const menuComponentsStart:MenuComponents = {
  Menu: Div,
};

const MenuClean: FC<MenuProps> = ({ siteLogo, components, ...rest }) => {
  const { Menu } = components;

  return <Menu siteLogo={siteLogo} {...rest} />;
};

const ResponsiveMenuClean = designable(menuComponentsStart)(MenuClean);

const withMenu = (Menu: MenuType) => withDesign<MenuComponents>({ Menu });

const ResponsiveMenu = flow(
  ifViewportIs(['lg', 'xl', 'xxl'])(withMenu(() => MainMenu)),
  ifViewportIsNot(['lg', 'xl', 'xxl'])(withMenu(() => BurgerMenu)),
  withPageDimensionsContext({ breakpoints }),
)(ResponsiveMenuClean);

export default ResponsiveMenu;
