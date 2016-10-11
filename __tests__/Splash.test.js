/*
 * React Splash Test Suite
 *
 * Copyright © Roman Nosov 2016
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { mount } from 'enzyme';
import Splash from '../src/Splash';


describe('Splash', () => {
  it('renders a initial view', () => {
    const content = mount(
      <Splash />
    );
    expect(content.html()).toMatchSnapshot();
  });
});
