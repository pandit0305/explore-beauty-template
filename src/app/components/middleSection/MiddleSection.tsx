import React from 'react';
import { Box, Typography, Stack, Paper, Grid, Divider } from '@mui/material';
import { styles } from '@/app/styles/explore.styles';

function MiddleSection() {
    return (
        <>
            <Divider sx={{ marginTop: "30px" }} id="services"/>
            <Typography
                sx={styles.heading}
                variant="h4"
            >Services</Typography>
            <Box sx={styles.homeContainer}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>

                        <Paper sx={styles.paper} variant="elevation">
                            <Typography
                                sx={styles.homeTitle}
                                variant="h5"
                            >Title 1</Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut non cumque illo tenetur, quibusdam perferendis labore, sed tempora earum dicta cupiditate numquam maxime qui at fuga voluptatibus deserunt ab excepturi! Ad itaque consequatur, reiciendis dolorem sed animi quam nesciunt ratione sit quibusdam, ipsum quidem veniam illum neque. Ipsa, impedit!</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper sx={styles.paper} variant="elevation">
                            <Typography
                                sx={styles.homeTitle}
                                variant="h5"
                            >Title 2</Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut non cumque illo tenetur, quibusdam perferendis labore, sed tempora earum dicta cupiditate numquam maxime qui at fuga voluptatibus deserunt ab excepturi! Ad itaque consequatur, reiciendis dolorem sed animi quam nesciunt ratione sit quibusdam, ipsum quidem veniam illum neque. Ipsa, impedit!</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper sx={styles.paper} variant="elevation">
                            <Typography
                                sx={styles.homeTitle}
                                variant="h5"
                            >Title 3</Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut non cumque illo tenetur, quibusdam perferendis labore, sed tempora earum dicta cupiditate numquam maxime qui at fuga voluptatibus deserunt ab excepturi! Ad itaque consequatur, reiciendis dolorem sed animi quam nesciunt ratione sit quibusdam, ipsum quidem veniam illum neque. Ipsa, impedit!</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper sx={styles.paper} variant="elevation">
                            <Typography
                                sx={styles.homeTitle}
                                variant="h5"
                            >Title 4</Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut non cumque illo tenetur, quibusdam perferendis labore, sed tempora earum dicta cupiditate numquam maxime qui at fuga voluptatibus deserunt ab excepturi! Ad itaque consequatur, reiciendis dolorem sed animi quam nesciunt ratione sit quibusdam, ipsum quidem veniam illum neque. Ipsa, impedit!</Paper>
                    </Grid>
                </Grid>

            </Box>
           
        </>
    )
}

export default MiddleSection