import Head from 'next/head';
import DALLEImageGenerator from '../components/DALLEimageGenerator';
import { Container, Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>DALL-E Image Gen</title>
        <meta
          name='description'
          content='Image Generator powered by Open AIs DALL E Api'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <Container
        component='main'
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 1 }}>
        <Box
          component='header'
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant='h2'
            component='h1'>
            DALL-E 2
          </Typography>
          <Typography
            variant='h5'
            component='h2'>
            Image Generator
          </Typography>
        </Box>
        <DALLEImageGenerator
          styles={{
            mainContainer: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '95vw',
            },
            imagesContainer: {
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              width: 1,
            },
            imageWrapper: {
              position: 'relative',
              margin: 3,
              boxShadow: 5,
              padding: 0,
              height: 300,
              width: 300,
            },
            progressWrapper: {
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 3,
              boxShadow: 0,
              padding: 0,
              height: 300,
              width: 300,
            },
            image: {},
            form: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 1,
              maxWidth: 500,
              margin: 5,
            },
            input: {
              width: 1,
            },
            generateBtn: {
              marginTop: 4,
              height: 50,
              boxShadow: 5,
              width: 300,
            },
          }}
        />
      </Container>
    </>
  );
}
