import Axios from 'axios';

export const uploadImage = (data: File | undefined) =>
  Axios.post(
    'https://api.cloudinary.com/v1_1/learnhowtocode/image/upload',
    data
  );
