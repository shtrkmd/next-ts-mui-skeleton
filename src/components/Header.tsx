import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { SERVICE_NAME } from '../lib/constants/primary'

const Header = () => {
    return (
        <AppBar color="inherit" elevation={1} position="sticky">
            <Toolbar>
                <Link href="/">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                        >
                            { SERVICE_NAME }
                        </Typography>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header