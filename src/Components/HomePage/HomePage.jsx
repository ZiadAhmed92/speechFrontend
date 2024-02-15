
import "./HomePage.css"
import { useTranslation } from 'react-i18next';//1
import { speechContext } from '../Context/Store.jsx';
import { Link, Outlet } from 'react-router-dom';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MuiAppBar from '@mui/material/AppBar';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function Homepage() {
    const { t, i18n } = useTranslation();//2

    let { userData, logOut, photo } = React.useContext(speechContext);
    const [mood, setMood] = React.useState("light")
    // const [mood, setMood] = useState(localStorage.getItem("mode"))
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (mood === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }, [mood])
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const Array1 = [
        { text: t('New record'), icon: { icon: <i className="fa-solid fa-microphone"></i> }, path: "" },
        { text: t("Account"), icon: { icon: <i className="fa-regular fa-circle-user"></i> }, path: "account" },
        { text: t("History"), icon: { icon: <i className="fa-solid fa-clock-rotate-left"></i> }, path: "history" },
        { text: t("Suggestion"), icon: { icon: <i className="fa-solid fa-pen-nib"></i> }, path: "suggestion" },
        { text: t("Change Password"), icon: { icon: <i className="fa-solid fa-unlock"></i> }, path: "/forgetpasswordsecond" },
        { text: t("Change Language"), icon: { icon: <i className="fa-solid fa-language"></i> }, path: "language" },
        { text: t("About Us"), icon: { icon: <i className="fa-solid fa-people-group"></i> }, path: "aboutus" },

    ];


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{ color: "var(--textHeader)" }} className='name_project'>
                        {t('Speech')}
                    </Typography>
                    <div className='ms-auto' >
                        <label className="theme-switch">
                            <input
                                type="checkbox"
                                onClick={() => {
                                    localStorage.setItem("mode", mood === "dark" ? "light" : "dark");
                                    setMood(localStorage.getItem("mode"))

                                }}
                                className="theme-switch__checkbox"
                            />
                            <div className="theme-switch__container">
                                <div className="theme-switch__clouds" />
                                <div className="theme-switch__stars-container">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 144 55"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                                <div className="theme-switch__circle-container">
                                    <div className="theme-switch__sun-moon-container">
                                        <div className="theme-switch__moon">
                                            <div className="theme-switch__spot" />
                                            <div className="theme-switch__spot" />
                                            <div className="theme-switch__spot" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {Array1.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                            <Link className="Link" to={`${item.path}`}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,

                                    }}
                                >
                                    <div className='icon-slider mx-1'>{item.icon.icon}</div>
                                    <ListItemText
                                        onClick={() => { setOpen(false) }}
                                        className='sidebar '
                                        primary={item.text}
                                        sx={{ opacity: open ? 1 : 0 }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List className='logout'>

                    <ListItem disablePadding sx={{ display: "block" }}>
                        <Link className="Link" to={`/login`}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? "initial" : "center",
                                    px: 2.5,

                                }}
                            >
                                <div className='icon-slider mx-1'><i className="fa-solid fa-right-from-bracket"></i></div>
                                <ListItemText
                                    onClick={() => { setOpen(false); logOut() }}
                                    className='sidebar '
                                    primary={t("Log Out")}

                                    sx={{ opacity: open ? 1 : 0 }}
                                />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Outlet />

            </Main>
        </Box>
    );
}