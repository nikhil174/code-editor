import '../App.css';

import { Box, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";

import { useState } from 'react';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`


const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #aaaabc;
    justify-content: space-between;
    font-weight: 700;
`

const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Editor = ({ heading, icon, color, value, onChange, mode }) => {

    const [open, setOpen] = useState(true);
    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <Container
         style={ open ? null : { flex: 0 }}
         >
            <Header>
                <Heading>
                    <Box component="span"
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: '#000'
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreen
                    fontSize='small'
                    style={{ 
                        alignSelf: 'center',
                        cursor : 'pointer'
                    }}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode,
                    lineNumbers: true,
                    theme: 'material',
                    
                }}  
            />
        </Container>
    );
}

export default Editor;