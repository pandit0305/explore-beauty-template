import React, { ChangeEvent, useEffect } from 'react'
import { Box, Button, CircularProgress, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import { styles } from '../../styles/explore.styles';
import image from '../../../../public/images/home/facial01.png';
import axios from 'axios';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { animateScroll as scroll } from "react-scroll";
import SocialMedia from '../socialMedia/SocialMedia';

const buttons = [
  {
    id: 'followMe',
    name: 'Follow Me'
  }, {
    id: 'uploadFile',
    name: 'Upload Your Photo'
  }
];
function HomeSection() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [progress, setProgress] = React.useState<boolean>(false);
  const [photo, setPhoto] = React.useState<string>('');

  const uploadFile = (btn: { id: string, name: string }) => {
    if (btn?.id === "uploadFile") {
      setLoading(true);
      setTimeout(() => {
        const file = document.getElementById('file');
        file?.click();
        setLoading(false);
      }, 2000);
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProgress(true);
    const file: any = (e.target as HTMLInputElement).files;
    const file1 = file[0];
    axios({
      baseURL: "https://getform.io/f",
      url: '/ce9a921f-b3f7-4da0-aceb-5271caf1fa66',
      method: 'POST',
      data: file1
    })
      .then((res: any) => {
        setProgress(false);
      })
      .catch((error: any) => {
        console.log(error);
        setProgress(false);
      })
  }

  const scrollToTop = () => {
    scroll.scrollToBottom();
  };
  useEffect(() => {
  }, [])
  const uploadPhoto = (file: any) => {
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let imgValue = reader.result as string;
      console.log(imgValue)
      setPhoto(imgValue)
    }
  }

  return (
    <Box>
      <Box sx={styles.homeContainer}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Box>
              <Image src={image} alt="Image" style={styles.homeImage} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={styles.mt50}>
              <Typography
                sx={styles.x}
                variant="h2"
              >
                Lorem ipsum dolor
              </Typography>
              <Typography
                sx={styles.x}
                variant="h4"
              >
                Lorem ipsum dolor  sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum.
              </Typography>
              <Box sx={styles.homeButtonBox}>
                {buttons.map((button) => (
                  <Button
                    onClick={() => uploadFile(button)}
                    key={button?.id}
                    sx={styles.homeBtn}
                  >
                    {button?.name}
                  </Button>
                ))}
                <input id="file" type="file" onChange={handleChange} style={{ display: 'none' }} />
                {
                  loading && (<IconButton>
                    <CircularProgress color="inherit" thickness={2} />
                  </IconButton>)
                }
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={styles.social}>
            <SocialMedia />
        </Box>
        <ArrowDownwardOutlinedIcon sx={styles.arrow} fontSize='large' onClick={scrollToTop} />
      </Box>
    </Box>
  )
}

export default HomeSection
