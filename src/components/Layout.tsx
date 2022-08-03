import { Box } from '@mui/material'
import { ReactNode } from 'react'
import theme from '../lib/theme'
import Footer from './Footer'
import Header from './Header'

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme.palette.grey[100],
            }}
        >
            <Header />
            { children }
            <Footer />
        </Box>
    )
}

export default Layout