import "./globals.css";
import '@mantine/core/styles.css';
import {ColorSchemeScript, createTheme, MantineProvider} from "@mantine/core";
import ClientAppShell from "@/app/components/ClientAppShell";

const theme = createTheme({
    primaryColor: 'red'
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>My awesome app</title>

            <ColorSchemeScript />
        </head>
        <body>
        <MantineProvider theme={theme}>
            <ClientAppShell>
                {children}
            </ClientAppShell>
        </MantineProvider>
        </body>
        </html>
    );
}
