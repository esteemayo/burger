import Axios from 'axios';

export const uploadImage = (file: File | undefined) =>
  Axios.post(
    'https://api.cloudinary.com/v1_1/learnhowtocode/image/upload',
    file
  );
