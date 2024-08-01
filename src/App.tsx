import React, { useState } from 'react';
import GlobalStyles, { Container } from './styles';
import Sidebar from './containers/Sidebar';
import About from './containers/About';
import Projects from './containers/Projects';
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';

function App() {

    const [isLightTheme, setIsLightTheme] = useState(true);

    function changeTheme() {
        setIsLightTheme(!isLightTheme);
    }

    return (
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Container>
                <Sidebar changeTheme={changeTheme} />
                <main>
                    <About />
                    <Projects />
                </main>
            </Container>
        </ThemeProvider>
    );
}

export default App;
