import { uploadImage } from '@/services/uploadService';

export const upload = async (file: File | undefined) => {
  const data = new FormData();

  data.append('file', file!);
  data.append('upload_preset', 'burger');

  try {
    const res = await uploadImage(file);

    const { url } = res.data;
    return url;
  } catch (err: unknown) {
    console.log(err);
  }
};
