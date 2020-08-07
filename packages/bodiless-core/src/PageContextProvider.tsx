/**
 * Copyright © 2019 Johnson & Johnson
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

import React, {
  FC, ComponentType, useEffect, useLayoutEffect, useRef,
} from 'react';
import PageEditContext from './PageEditContext';
import { useEditContext, useUUID } from './hooks';
import { PageContextProviderProps, Options } from './Types/PageContextProviderTypes';

/**
 * @private
 *
 *  Hook to create the values needed to define a new context from the supplied props.
 *
 * @param props The props defining the `PageEditContext`
 * @return Values suitable for passing to the `PageEditContext` constructor.
 */
const useNewContextValues = ({ getMenuOptions, name, id }: PageContextProviderProps) => {
  const id$ = id || useUUID();
  return {
    getMenuOptions,
    id: id$,
    name: name || id$,
  };
};

/**
 * Hook which registers additional menu options for the current context.
 *
 * @param props Props which define the menu options to add.
 */
export const useRegisterMenuOptions = (props: PageContextProviderProps) => {
  const values = useNewContextValues(props);
  const context = useEditContext();
  const peerContext = new PageEditContext(values, context.parent);
  context.registerPeer(peerContext);

  // Handle unregistering from the current context if a component is removed through a
  // conditional render. We use a layout effect bc it and its cleanup both
  // execute before normal effects.  This allows us to unregister on unmount and re-register
  // on mount without updating menu options.  By the time we get to the normal effect
  // (which actually updates the menu options), if the component remounted, there will
  // appear to be no change, and menu options will not update.  But if the component
  // did not remount (was removed), then we go ahead and remove its options.
  const updateOnUnmount = useRef(false);
  useLayoutEffect(() => {
    // We re-register the peer when the component mounts.  We have to do it both here and in
    // render (above), bc we want the order of peers to be render order, not effect order.
    context.registerPeer(peerContext);
    updateOnUnmount.current = false;
    return () => {
      context.unregisterPeer(peerContext);
      updateOnUnmount.current = true;
    };
  });
  // In the normal effect, we update the menu options if the context is active.
  useEffect(() => {
    // When the component mounts,
    if (context.isActive) {
      context.updateMenuOptions();
    }
    return (() => {
      if (updateOnUnmount.current) {
        // If we get here, it means the component was unmounted and not remounted. In this case
        // we remove this peer from the current context.
        if (context.isActive) {
          context.updateMenuOptions();
        }
      }
    });
  });
};

/**
 * Component which provides its children with a new `PageEditContext` using the specified
 * menu options.
 *
 * @param props
 */
const PageContextProvider: FC<PageContextProviderProps> = ({ children, ...rest }) => {
  const values = useNewContextValues(rest);
  const context = useEditContext();
  // eslint-disable-next-line react/destructuring-assignment
  const newValue = context.spawn(values);
  useEffect(() => {
    if (newValue.isActive) newValue.updateMenuOptions();
  });
  return (
    <PageEditContext.Provider value={newValue}>
      {children}
    </PageEditContext.Provider>
  );
};

PageContextProvider.defaultProps = {
  getMenuOptions: () => [],
};

/**
 * Using supplied options, returns an HOC which adds one or more menu options (buttons).
 * This simplly wraps the supplied component with a `PageContextProvider`.
 *
 * Note that, unlike `PageContexProvider` itself, this function takes a custom hook
 * (`useGetMenuOptions`), which is invoked to create the 'getMenuOptions' prop
 * for `PageContextProvider`.  This allows you to use props and context at render
 * time to create your `getMenuOptions` callback.
 *
 * Based on the value of the `peer` option, this will associate the menu options either
 * with a new local context (`peer === false`, the default), or with the existing one.
 *
 * @param options The values used to define the menu options.
 *
 * @return An HOC which will cause the component it enhances to contribute the specified
 *         menu options when placed.
 */
export const withMenuOptions = <P extends object>({
  useGetMenuOptions,
  peer,
  ...rest
}:Options<P>) => (Component: ComponentType<P> | string) => {
    const WithMenuOptions = (props: P) => {
      const getMenuOptions = useGetMenuOptions
        ? useGetMenuOptions(props, useEditContext())
        : undefined;
      if (peer) {
        useRegisterMenuOptions({ getMenuOptions, ...rest });
        return <Component {...props} />;
      }
      return (
        <PageContextProvider getMenuOptions={getMenuOptions} {...rest}>
          <Component {...props} />
        </PageContextProvider>
      );
    };
    return WithMenuOptions;
  };

export default PageContextProvider;
