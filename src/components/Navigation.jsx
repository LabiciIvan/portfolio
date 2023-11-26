import React from 'react';

import { Toolbar, AppBar, Box, Grid, BottomNavigation, BottomNavigationAction} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blueGrey } from '@mui/material/colors';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import ViewListIcon from '@mui/icons-material/ViewList';
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {

	const theme = createTheme({
		palette: {
			primary: {
				main: grey[700]
			},
			secondary: {
				main: blueGrey[500]
			}
		}
	})
	
	return (
		<ThemeProvider theme={theme}>
		<Box maxWidth='false'>
			<AppBar color='transparent' position='static'>
				<Toolbar >
					<Grid container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} >
						<Grid item xs={6}>
						<BottomNavigation showLabels>
								<BottomNavigationAction href='#home'sx={{color:'primary.main', '&:hover' : {color: 'secondary.main'}}} label='Home' icon={<HomeIcon/>}/>
							</BottomNavigation>
						</Grid>
						<Grid item xs={6}>
							<BottomNavigation showLabels>
								<BottomNavigationAction href='#projects' sx={{color: 'primary.main', '&:hover' : {color: 'secondary.main'}}} label='Projects' icon={<ViewListIcon/>}/>
								<BottomNavigationAction href='#technology' sx={{color:'primary.main', '&:hover' : {color: 'secondary.main'}}} label='Technologies' icon={<TerminalIcon />}/>
								<BottomNavigationAction href='#contact' sx={{color:'primary.main', '&:hover' : {color: 'secondary.main'}}} label='Contact' icon={<ContactPageIcon />}/>
							</BottomNavigation>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
		</ThemeProvider>
	)
}

export default Navigation;