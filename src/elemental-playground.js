import React from 'react';
import { render } from 'react-dom';
import Playground from 'react-playground-styled';
import * as elemental from 'elemental';
import styled from 'styled-components';

const ElementalPlayground = ({scope, ...rest}) => (
  <Playground
    defaultValue={`<Button type="primary">Click</Button>`}
    scope={{...elemental, ...scope}}
    viewerWrapper={X => styled(X)`min-width: 150px;`}
    editorWrapper={X => styled(X)`flex: 2; border: 0px solid`}
    {...rest}
    loadTheme="monokai"
    backgroundColor="#eee"
    font={'Consolas, monspace'}
    margin={20}
    playgroundWrapper={Wrapper => styled(Wrapper)`
      flex-direction: column-reverse;
      border-radius: 5px;
      overflow: hidden;
    `}
  />
);

export default ElementalPlayground;