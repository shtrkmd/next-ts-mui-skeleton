import { Box } from '@mui/material'
import Copyright from './Copyright'

const Footer = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: 4,
                px: 4
            }}
        >
            <Copyright />
        </Box>
    )
}

export default Footer