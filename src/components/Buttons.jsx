import Button from "@mui/material/Button";

function PrimaryButton({ children, ...props }) {
    return(
        <Button variant="contained" color="primary" {...props} sx={{ textTransform: 'none', borderRadius: 2, fontWeight: 'var(--font-weight-value)' }}>
           {children}
        </Button>
    )
}
    
export default PrimaryButton;
    
