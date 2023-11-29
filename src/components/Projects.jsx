import react, {useState} from 'react';
import {dataProjects} from '../static/Data.jsx';

import { Container, Grid, Typography, Box, Paper, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { grey } from '@mui/material/colors';

const Projects = () => {

	const [indexCollection, setIndexCollection] = useState(0);

	const setIndex = (direction) => {
		// The image to be displayed next after clicking the arrows.
		let indexNew = (direction === 'right' ? 
						(indexCollection + 1 === dataProjects.length ? 0 : indexCollection + 1) :
						(indexCollection - 1 === -1 ? dataProjects.length - 1 : indexCollection - 1));
		setIndexCollection(indexNew);
	}

	const setIndicator = (id) => {
		return (id === indexCollection ? 'primary.main': grey[700]);
	}

	return (
	<Container id='projects' disableGutters maxWidth='false' sx={{bgcolor: grey[200]}}>
		<Grid container spacing={3} justifyContent='center'>
			<Grid item xs={4} md={7}>
				<Typography variant='h4' color='primary.main'>
					Projects
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={1} md={2} sx={{display: 'flex', justifyContent: 'center'}}>
						<ArrowBackIcon onClick={() => setIndex('left')} sx={{':hover': {color: 'primary.main', cursor: 'pointer'}, fontSize: '3rem', ml: 3}}/>
					</Grid>
					<Grid item xs={10} md={8} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
						{
							dataProjects.map((item => { return <Paper color='red' key={item.id} sx={{display: 'flex', width: {xs: '17%', md: '20%'}, height: {xs: '7px', md: '10px'}, bgcolor: setIndicator(item.id)}}/>}))
						}
					</Grid>
					<Grid item xs={1} md={2} sx={{display: 'flex', justifyContent: 'center'}}>
						<ArrowForwardIcon  onClick={() => setIndex('right')} sx={{':hover': {color: 'primary.main', cursor: 'pointer'}, fontSize: '3rem', mr: 3}}/>
					</Grid>
				</Grid>
			</Grid>
			<Grid container justifyContent='center' pb={2} spacing={2}>
				<Grid item xs={12} md={5} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'end'}}}>
					<img id='project-image' src={dataProjects[indexCollection]['src']} />
				</Grid>
				<Grid item xs={12} md={5}  >
					<Typography textAlign={{xs: 'center', md: 'start'}}>{dataProjects[indexCollection]['title']}</Typography>
					<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: {xs: 'center', md: 'start'}}}>{dataProjects[indexCollection]['tech'].map((tech) => {return <Chip variant='outlined' color='primary' label={tech} sx={{margin: 1}} key={tech}/>})}</Box>
					<Paper>
						{
							dataProjects[indexCollection]['descriptions'].map((description) => {return <Typography variant='subtitle1' textAlign={{xs: 'center', md: 'start'}} p={{xs: 3, md: 2}} key={description}>{description}</Typography>})
						}
					</Paper>
					<Box m={2} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'start'}}}>
						<Chip sx={{marginRight: 1}} variant='outlined' label='GIT' clickable color='primary' component='a' href={dataProjects[indexCollection]['git']} icon={<GitHubIcon />}/>
						<Chip variant='outlined' label='Try now' clickable color='primary' component='a' href={dataProjects[indexCollection]['try']} icon={<PlayCircleFilledWhiteIcon />}/>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	</Container>
	)
}

export default Projects;