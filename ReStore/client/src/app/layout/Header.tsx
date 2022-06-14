import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Toolbar, Typography , Switch, List, ListItem, IconButton, Badge, Box} from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props{
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    {title: 'catalog' , path: '/catalog'},
    {title: 'about' , path: '/about'},
    {title: 'contact' , path: '/contact'}
]

const rightLinks = [
    {title: 'login' , path: '/login'},
    {title: 'register' , path: '/register'}
]

const navStyles = {color: 'inherit' , typography: 'h6' , '&:hover': {
    color: 'grey.500'
},"&.active":{
    color: 'text.secondary'
}, textDecoration: 'none'}

export default function Header({darkMode, handleThemeChange} : Props){
    
    return(
        <AppBar sx={{ mb: 4 }} position="static">
            <Toolbar sx={{display: 'flex' , justifyContent: 'space-between' , alignItems:"center"}}>
                <Box>
                <Typography variant="h6" component={NavLink} to="/" sx={navStyles} exact>RE-STORE</Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <IconButton size="large" sx={{color: 'inherit' }}>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
                </Box>
                <Box display='flex' alignItems='center'>
                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}


