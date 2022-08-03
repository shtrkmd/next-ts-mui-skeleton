import { Link as MuiLink, Typography } from '@mui/material'
import { SERVICE_NAME } from '../lib/constants/primary'

const Copyright = () => {
    return (
        <Typography>
            { 'Copyright © ' }
            <MuiLink color="inherit" href="/">
                { SERVICE_NAME }
            </MuiLink>{ ' ' }
            { new Date().getFullYear() }
        </Typography>
    )
}

export default Copyright