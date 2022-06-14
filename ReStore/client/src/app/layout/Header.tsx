import { AppBar, Toolbar, Typography , Switch} from "@mui/material";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange} : Props){
    
    return(
        <AppBar sx={{ mb: 4 }} position="static">
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
            </Toolbar>
        </AppBar>
    )
}

