import react from 'react';

import { Grid, Typography, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer () {

	const dataConnect = [
		{
			id: 1,
			name: 'LinkedIn',
			icon: LinkedInIcon,
			href: 'https://www.linkedin.com/in/ioan-labici-78074822b/'
		},
		{
			id: 2,
			name: 'Git Hub',
			icon: GitHubIcon,
			href: 'https://github.com/LabiciIvan',
		},
		{
			id: 3,
			name: 'Gmail',
			icon: MailIcon,
			href: 'mailto:ioanlabici@gmail.com'
		},
	];
	
	return (
		<Grid container sx={{height: '400px', bgcolor: grey[900]}} color='white' >
			<Grid item xs={5} sx={{display: 'flex', height: '70%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<Typography variant='h5' p={2}>Ways to connect</Typography>
				{dataConnect.map((item) => {
					return	<Link href={item.href} underline='none' sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ':hover': {color: grey[700]}}} color='white' key={item.id}>
								<item.icon fontSize='large' />
								<Typography sx={{width: '100px', textAlign: 'end'}}>{item.name}</Typography>
							</Link>
				})}
			</Grid>
			<Grid item xs={7} sx={{ height: '70%'}}>
			</Grid>
			<Grid item xs={12} borderTop={2} borderColor={grey[800]} sx={{height: '30%'}}>
				<Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end', height: '100%'}}>
					<Typography pb={2}>© All Rights Reserved 2023</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}