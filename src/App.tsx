import React from 'react';
import GlobalStyles, { Container } from './styles';
import Sidebar from './containers/Sidebar';
import About from './containers/About';
import Projects from './containers/Projects';

function App() {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Sidebar />
                <main>
                    <About />
                    <Projects />
                </main>
            </Container>
        </>
    );
}

export default App;
