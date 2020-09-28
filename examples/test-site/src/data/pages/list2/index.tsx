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

import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import Layout from '../../../components/Layout';
// import { OuterList, OuterLinkList } from './OldListDemo';
import DemoList from './ChamelionListDemo';

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <h1 className="text-3xl font-bold">Editable List Demo V2</h1>
      <p className="pt-4">
        The following are editable lists. Click on each item to display
        a menu with available operations. The list allows up to 3 levels
        of sublists.
        The innermost list has reduced padding. The list on the left contains editable
        items with red text.  The one on the right contains editable links.
      </p>
      <div className="flex pt-4">
        <DemoList nodeKey="list3" />
        {/*
        <OuterList nodeKey="list1" className="w-1/2" data-list-element="outerlist" />
        <OuterLinkList nodeKey="list2" className="w-1/2" data-list-element="outerlinklist" />
        */}
      </div>
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
  }
`;