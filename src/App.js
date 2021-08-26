import './App.css';
import { useState, useEffect } from 'react';
import OpenApiList from "./OpenApiList"
import theme from './themeConfig';
import { Box, Grommet } from 'grommet';

function App() {
  const [ openApiList, setOpenApiList ] = useState({});
  const getApiList = async ()=>{
    const listResponse = await fetch(`https://api.publicapis.org/entries`);
    const listData = await listResponse.json();
    setOpenApiList(listData)
  }
  useEffect(()=>{
   getApiList()
  },[])
  return (
    <Grommet theme={theme}>
      <Box className="App">
        <OpenApiList openApiList={ openApiList }/>
      </Box>
    </Grommet>
  );
}

export default App;
