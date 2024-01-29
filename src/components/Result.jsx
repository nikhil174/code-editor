import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(Box)`
    height: 52.5vh;
`;

const Result = () => {
    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    const srcCode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Output</title>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>
    `;
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 1000);

        return () => clearTimeout(timeout);

    }, [srcCode]);

    return (
        <Container>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                style={{
                    border: "none",
                    overflow: "hidden"
                }}
            />
        </Container>
    );
}

export default Result;