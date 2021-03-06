import React from 'react';

import {styled} from 'fusion-plugin-styletron-react';
import {Helmet} from 'fusion-plugin-react-helmet-async';

import Header from '../components/Header';
import TodoList from '../components/TodoList';

const Center = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
});

const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#FFFFFF',
});

const VerticalPage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '90%'
});

const Index = () => {
  return (
    <FullHeightDiv>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Shadows+Into+Light|Lobster" rel="stylesheet" />
      </Helmet>
      <style>
        {`
          html,body,#root{height:100%;}
          html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
          body{margin:0;}
          button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
          input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
          `}
      </style>

      <Center>
        <VerticalPage>
          <Header />
          <TodoList />
        </VerticalPage>
      </Center>
    </FullHeightDiv>
  )
}

export default Index;
