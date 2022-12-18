import { useState } from 'react';
import Image from 'next/image';
import { TextField, Box, FormControl, Button, CircularProgress } from '@mui/material';
import { postData } from '../api/backend_requests';
import { isNull } from '../lib/helpers';

export default function DALLEImageGenerator({ styles }: Props) {
  const defaultImage = '/images/default-image.jpg';
  const [generatedImgs, setGeneratedImgs] = useState(Array(4).fill(defaultImage));
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({ prompt: false });
  const [prompt, setPrompt] = useState('');

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.imagesContainer}>
        {loading
          ? Array(4)
              .fill(CircularProgress)
              .map((Cp, i) => (
                <Box
                  key={i}
                  sx={styles.progressWrapper}>
                  <Cp />
                </Box>
              ))
          : generatedImgs.map((img, i) => (
              <Box
                key={i}
                sx={styles.imageWrapper}>
                <Image
                  src={img}
                  alt='default image'
                  style={styles.image}
                  fill
                />
              </Box>
            ))}
      </Box>
      <FormControl
        sx={styles.form}
        component='form'>
        <TextField
          multiline
          label='Enter prompt'
          sx={styles.input}
          onChange={(e) => setPrompt(e.target.value)}
          error={!errors.prompt ? false : true}
          helperText={!errors.prompt ? '' : errors.prompt}
        />
        <Button
          variant='contained'
          sx={styles.generateBtn}
          onClick={async () => {
            setLoading(true);
            if (isNull(prompt)) {
              setLoading(false);
              return setErrors({ prompt: 'Invalid prompt' });
            }
            const res = await postData('/imagegen', {
              prompt,
            });
            if (!res.result) {
              setLoading(false);
              return setErrors({
                prompt: 'Failed to generate image, try another prompt',
              });
            }
            setErrors({ prompt: false });
            setLoading(false);
            setGeneratedImgs(res.imageData.data.map(({ url }: { url: string }) => url));
          }}>
          Generate
        </Button>
      </FormControl>
    </Box>
  );
}

interface Props {
  styles: StyleProps;
}

interface StyleProps {
  mainContainer?: object;
  imagesContainer: object;
  imageWrapper?: object;
  progressWrapper: object;
  form?: object;
  input?: object;
  image?: object;
  generateBtn?: object;
}

interface Errors {
  prompt: boolean | string;
}
