import { createContext, useContext, useEffect, useState } from "react"; 
import PropTypes from "prop-types";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

// Theme Context
const ThemeContext = createContext({
    theme: 'light', 
    toggleTheme: () => {},
    language: 'EN',
    toggleLanguage: () => {},
});

// Custom Hook
export const useTheme = () => useContext(ThemeContext);

// ThemeAdminProvider
const ThemeAdminProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');
    const [language, setLanguage] = useState('EN');

    useEffect(() => {
        const storeTheme = localStorage.getItem('theme');
        if (storeTheme) {
            setThemeMode(storeTheme);
        }
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    const toggleTheme = () => {
        setThemeMode((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => {
            const newLanguage = prevLanguage === 'EN' ? 'LA' : 'EN';
            localStorage.setItem('language', newLanguage);
            return newLanguage;
        });
    };

    // Create Material-UI theme
    const theme = createTheme({
        // palette: {
        //     mode: themeMode,
        //     ...(themeMode === 'light'
        //         ? {
        //               primary: { main: '#1976d2' },
        //               background: {
        //                   default: '#f5f5f5',
        //                   paper: '#ffffff',
        //               },
        //           }
        //         : {
        //               primary: { main: '#90caf9' },
        //               background: {
        //                   default: '#303030',
        //                   paper: '#424242',
        //               },
        //           }),
        // },
    });

    return (
        <ThemeContext.Provider value={{ theme: themeMode, toggleTheme, language, toggleLanguage }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
ThemeAdminProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default ThemeAdminProvider;


                        // ມາທຳຄວາມເຂິ້າໃຈໃນສ່ວນນີ້