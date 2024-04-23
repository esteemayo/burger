'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { DropZoneProps } from '@/types';

import './DropZone.scss';

const DropZone = ({ id, label, onSelect }: DropZoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onSelect(acceptedFiles);
    },
    [onSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className='dropzone'>
      <label htmlFor={id}>{label}</label>
      <div {...getRootProps({ className: 'dropzoneWrap' })}>
        <input id={id} {...getInputProps()} />
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
