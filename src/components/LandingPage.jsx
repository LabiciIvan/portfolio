import React, { useState } from "react";
import {user} from '../static/Data.jsx'

import { Container, Box, Grid, Typography, Avatar, useThemeProps} from "@mui/material";
import { grey } from "@mui/material/colors";

const LandingPage = () => {

	return (
		<Container disableGutters >
			<Grid container id='home' spacing={2} sx={{ height: {xs: '75vh', md: '80vh'}}}>
				<Grid item xs={12} md={6} container justifyContent={'center'} alignItems={'center'} >
					<Box>
						<Typography sx={{ typography: {xs: 'h5', md: 'h2'}}} align="center">{user['greetings']}</Typography>
						<Typography sx={{ typography: {xs: 'h5', md: 'h2'}}} variant="h3" align="center">{user['name']}</Typography>
						<Typography sx={{ typography: {xs: 'subtitle2', md: 'body1'}}} align="center" mt={2}>{user['description'][0]}</Typography>
						<Typography sx={{ typography: {xs: 'subtitle2', md: 'body1'}}} align="center" mt={2}>{user['description'][1]}</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} container justifyContent='center' alignItems={{xs: 'top', md: 'center'}}>
					<Box >
						<Avatar sx={{height: {xs: '150px', sm: '200px', md: '300px'}, width: {xs: '150px', sm: '200px', md: '300px'}, boxShadow: `1px 5px 20px ${grey[300]}`}} src={user['picture']}/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default LandingPage;