import React from 'react';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { Toolbar, AppBar, Box, Grid, BottomNavigation, BottomNavigationAction} from '@mui/material';
import { grey } from '@mui/material/colors';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import ViewListIcon from '@mui/icons-material/ViewList';
import TerminalIcon from '@mui/icons-material/Terminal';
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {

	gsap.registerPlugin(ScrollToPlugin);

	const smoothScrollToId = (towards) => {
		gsap.to(window, { duration: 1, scrollTo: towards});
	}
	
	return (
		<Box maxWidth='false'>
			<AppBar sx={{bgcolor: 'white'}} position='fixed' >
				<Toolbar >
					<Grid container spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'} >
						<Grid item xs={2} md={6}>
						<BottomNavigation showLabels>
								<BottomNavigationAction sx={{color:'black', '&:hover' : {color: grey[600]}}} label='Home' icon={<HomeIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />} onClick={() => smoothScrollToId('#home')}/>
							</BottomNavigation>
						</Grid>
						<Grid item xs={10} md={6}>
							<BottomNavigation showLabels>
								<BottomNavigationAction sx={{color: 'black', '&:hover' : {color: grey[600]}}} label='Projects' icon={<ViewListIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />} onClick={() => smoothScrollToId('#projects')}/>
								<BottomNavigationAction sx={{color:'black', '&:hover' : {color: grey[600]}}} label='Technologies' icon={<TerminalIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />} onClick={() => smoothScrollToId('#technology')}/>
								<BottomNavigationAction sx={{color:'black', '&:hover' : {color: grey[600]}}} label='Contact' icon={<ContactPageIcon sx={{fontSize: {xs: '1.7rem', md: '2rem'}}} />} onClick={() => smoothScrollToId('#contact')}/>
							</BottomNavigation>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navigation;