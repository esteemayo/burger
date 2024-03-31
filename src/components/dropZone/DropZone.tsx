'use client';

import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import './DropZone.scss';

const DropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  useEffect(() => {
    console.log(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <div className='dropzone'>
      <div {...getRootProps({ className: 'dropzoneWrap' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag {'n'} drop some file here, or click to select file</p>
        )}
      </div>
    </div>
  );
};

export default DropZone;
