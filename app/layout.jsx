import Local from 'next/font/local';
import {Roboto, Cinzel} from 'next/font/google';
import Theme from './components/theme';
import Header from './components/header';
import Footer from './components/footer';
import './assets/styles/global.scss';

const material_icons = Local({
    variable: "--material-icons",
    src: [
        {
            path: './assets/icons//MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './assets/icons/MaterialSymbolsRounded[FILL,GRAD,opsz,wght].woff2',
            weight: '400',
            style: 'italic'
        },
    ]
});

const urban_icons = Local({
    variable: "--urban-icons",
    src: [{
        path: './assets/icons/UrbanIcons.woff',
        weight: '400',
        style: 'normal'
    }]
});

const roboto = Roboto({
    weight: ["400", "700"],
    subsets: ['latin']
});

const cinzel = Cinzel({
    variable: "--cinzel",
    subsets: ['latin']
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${roboto.className} ${cinzel.variable} ${material_icons.variable} ${urban_icons.variable}`}>
            <body>
                <Theme>
                    <Header />
                    {children}
                    <Footer />
                </Theme>
            </body>
        </html>
    )
}

// Using this to patch out a warning that gets spammed
// because the JSS team hasn't fixed a 4 year old bug
if (typeof window === "undefined") {
    const originalWarn = console.warn;
    console.warn = (...args) => {
        if (args[0] !== 'Warning: [JSS] Rule is not linked. Missing sheet option "link: true".') {
            originalWarn(...args);
        }
    };
}