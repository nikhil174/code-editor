import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
    background: #060606;
    height: 5vh;
    justify-content: center;
`

const Header = () => {
    return ( 
        <Container position="static">
            <Toolbar>
                <h2>Code Editor</h2>
            </Toolbar>
        </Container>
     );
}
 
export default Header;