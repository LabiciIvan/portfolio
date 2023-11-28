import React from 'react';

import { Toolbar, AppBar, Box, Grid, BottomNavigation, BottomNavigationAction} from '@mui/material';
import { grey } from '@mui/material/colors';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import ViewListIcon from '@mui/icons-material/ViewList';
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {
	
	return (
		<Box maxWidth='false'>
			<AppBar color='transparent' position='static'>
				<Toolbar >
					<Grid container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} >
						<Grid item xs={2} md={6}>
						<BottomNavigation showLabels>
								<BottomNavigationAction href='#home'sx={{color:'black', '&:hover' : {color: grey[600]}}} label='Home' icon={<HomeIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />}/>
							</BottomNavigation>
						</Grid>
						<Grid item xs={10} md={6}>
							<BottomNavigation showLabels>
								<BottomNavigationAction href='#projects' sx={{color: 'black', '&:hover' : {color: grey[600]}}} label='Projects' icon={<ViewListIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />}/>
								<BottomNavigationAction href='#technology' sx={{color:'black', '&:hover' : {color: grey[600]}}} label='Technologies' icon={<TerminalIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />}/>
								<BottomNavigationAction href='#contact' sx={{color:'black', '&:hover' : {color: grey[600]}}} label='Contact' icon={<ContactPageIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />}/>
							</BottomNavigation>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navigation;