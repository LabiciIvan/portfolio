import react from 'react'
import { dataTech } from '../static/Data';

import { Container, Grid, Typography, ImageList, ImageListItem, Card, CardContent} from "@mui/material";
import { grey } from "@mui/material/colors";

const Technologies = () => {

	return (
		<Container disableGutters maxWidth={false} >
				<Grid container id='technology' justifyContent='center' marginBottom={4}>
					<Grid item xs={7}>
						<Typography variant="h4" color={'primary.main'} gutterBottom marginTop={4}>Technologies</Typography>
					</Grid>
					<Grid item xs={10}>
						<Grid container  spacing={3} justifyContent='center'>
							<Grid item xs={12} md={4}>
								<Card variant="outlined"  >
									<CardContent>
										<Typography gutterBottom variant="h5" borderBottom={2} borderColor={grey[300]}>Frontend</Typography>
										<Grid container>
											<Grid item xs={12} md={8}>
												<ImageList rowHeight={50} cols={4}>
													<ImageListItem>
														<img src={dataTech.html} style={{width: '50px', height: '50px'}}/>
													</ImageListItem>
													<ImageListItem>
														<img src={dataTech.css} style={{width: '50px', height: '50px'}} />
													</ImageListItem>
													<ImageListItem>
														<img src={dataTech.js} style={{width: '50px', height: '50px'}} />
													</ImageListItem>
													<ImageListItem>
														<img src={dataTech.react} style={{width: '50px', height: '50px'}} />
													</ImageListItem>
												</ImageList>
											</Grid>
										</Grid>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={4}>
								<Card variant="outlined">
									<CardContent>
										<Typography gutterBottom  variant="h5" borderBottom={2} borderColor={grey[300]}>Backend</Typography>
										<Grid container>
											<Grid item xs={12} md={10}>
												<ImageList rowHeight={50} cols={4}>
													<ImageListItem>
														<img src={dataTech.php} style={{width: '50px', height: '50px'}}/>
													</ImageListItem>
													<ImageListItem>
														<img src={dataTech.laravel} style={{width: '50px', height: '50px'}} />
													</ImageListItem>
													<ImageListItem>
														<img src={dataTech.mysql} style={{width: '50px', height: '50px'}} />
													</ImageListItem>
													<ImageListItem>
														<img src={dataTech.node} style={{width: '100px', height: '50px'}} />
													</ImageListItem>
												</ImageList>
											</Grid>
										</Grid>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
	)
}

export default Technologies;