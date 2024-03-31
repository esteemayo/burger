'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import './DropZone.scss';

const DropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  return (
    <div className='dropzone'>
      <div {...getRootProps({ className: 'dropzoneWrap' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag {'n'} drop your file here, or click to select file</p>
        )}
      </div>
    </div>
  );
};

export default DropZone;
