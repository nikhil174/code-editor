import Editor from "./Editior";

import { Box, styled } from '@mui/material'
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';


const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 42vh;
`


const Code = () => {

    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor
                heading="HTML"
                icon="/" color="#FF3C41"
                value={html}
                onChange={setHtml}
                mode="xml"
            />
            <Editor
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                value={css}
                onChange={setCss}
                mode="css"
            />
            <Editor
                heading="JS"
                icon="{}"
                color="#FCD000"
                value={js}
                onChange={setJs}
                mode="javascript"
            />
        </Container>
    );
}

export default Code;