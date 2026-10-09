import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

function MainLayout({ children }) {
    return(
        <Box sx={{minHeight:'100vh', display:'flex', flexDirection:'column', bgcolor: 'var(--color-background)'}}>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: "var(--color-surface)",
                    color: "var(--color-text)",
                    borderBottom: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-appbar)",
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        height: 72,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 28,
                            fontWeight: 'var(--font-weight-brand)',
                            letterSpacing: 0,
                            lineHeight: 1,
                        }}
                    >
                        IFS
                    </Typography>
                </Container>
            </AppBar>
            <Box sx={{ height: 72 }}/>
            <Container sx={{ mt: 4, mb: 4 }}>
                {children}
            </Container>
        </Box>
    )
}

export default MainLayout;
