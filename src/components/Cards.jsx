import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function PrimaryCard({ children }) {
    return(
        <Card
            variant="outlined"
            sx={{
                borderColor: "var(--color-border)",
                borderRadius: 3,
                boxShadow: "var(--shadow-card-outlined)",
            }}
        >
            {children}
        </Card>
    )
}

export function StatCard({ label, value }) {
    return(
        <Card
            elevation={0}
            sx={{
                height: "100%",
                border: "1px solid",
                borderColor: "var(--color-border)",
                borderRadius: 3,
                background: "var(--color-surface)",
                boxShadow: "var(--shadow-card)",
                transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                "&:hover": {
                    transform: "translateY(-3px)",
                    borderColor: "var(--color-border-hover)",
                    boxShadow: "var(--shadow-card-hover)",
                },
            }}
        >
            <CardContent
                sx={{
                    p: 3,
                    "&:last-child": {
                        pb: 3,
                    },
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        mb: 1.25,
                        color: "var(--color-text-muted)",
                        fontSize: 13,
                        fontWeight: 'var(--font-weight-label)',
                        letterSpacing: 0.4,
                        textTransform: "uppercase",
                    }}
                >
                    {label}
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        color: "var(--color-text)",
                        fontWeight: 'var(--font-weight-value)',
                        lineHeight: 1,
                    }}
                >
                    {value}
                </Typography>
            </CardContent>
        </Card>
    )
}

