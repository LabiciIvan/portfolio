import react from 'react';

import { Container, Box, Typography , Grid, TextField, Button} from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

	return (
		<Container maxWidth='false' sx={{ bgcolor: grey[200], height: {xs: '800px', md: '350px'}}}>
			<Grid container justifyContent='center' spacing={2}>
				<Grid item id='contact' xs={12} md={6}>
					<Grid container justifyContent='center'>
						<Grid item xs={0} md={4}>
						</Grid>
						<Grid item xs={12} md={6.5}>
							<Typography variant='h4' color={'primary.main'} textAlign={{xs: 'center', md: 'start'}} mt={2} p={1}>Contact</Typography>
						</Grid>
						<Grid item xs={10} >
							<Typography borderTop={2} borderColor={grey[400]} variant='h6' p={2} textAlign='center'>Feel free to reach out and let's create something special together.</Typography>
							<Typography  variant='h6' p={2} textAlign='center'>Your ideas are the spark for our collaboration.</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item id='contact' xs={12} md={6}>
					<Grid container >
						<Grid item xs={12} md={8} m={2} sx={{position: {xs: 'static', md: 'relative'}}} >
							<Grid container justifyContent='center' spacing={2} border={3} borderRadius={5} sx={{ borderColor: blue[100], bgcolor: 'white', height: '500px', position: {xs: 'static', md: 'absolute'} }}>
								<Grid item xs={7} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} mt={{xs: 0, md: 2}}>
									<TextField id="standard-basic" label="Email" variant="outlined" sx={{bgcolor: 'white'}} m={{xs: 0, md: 2}} fullWidth/>
								</Grid>
								<Grid item xs={7} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									<TextField id="standard-basic" label="Name" variant="outlined" sx={{bgcolor: 'white'}} m={{xs: 0, md: 2}} fullWidth/>
								</Grid>
								<Grid item xs={7} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
									<TextField id="standard-basic" label="Message" variant="outlined" sx={{bgcolor: 'white'}} m={{xs: 0, md: 2}} fullWidth multiline={true} minRows={3}/>
								</Grid>
								<Grid item xs={7} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} mb={2}>
									<Button variant='contained' endIcon={<SendIcon />}>Submit</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Contact;