import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import Contenedor from './Contenedor'
import Menu from './Menu';



const App = () => (
  <Fragment>
    <Menu />
    <Container>
    <Contenedor/>
    </Container>
  </Fragment>
);

export default App;
