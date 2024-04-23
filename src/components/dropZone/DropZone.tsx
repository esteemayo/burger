'use client';

import { useDropzone } from 'react-dropzone';
import { useCallback, useMemo } from 'react';

import { DropZoneProps } from '@/types';

import './DropZone.scss';

const DropZone = ({ id, label, small, onSelect }: DropZoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onSelect(acceptedFiles);
    },
    [onSelect]
  );

  const dropzoneClasses = useMemo(() => {
    return small?.toString() === 'true' ? 'dropzone small' : 'dropzone';
  }, [small]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={dropzoneClasses}>
      <label htmlFor={id}>{label}</label>
      <div className='dropzoneBox'>
        <div {...getRootProps({ className: 'dropzoneWrap' })}>
          <input id={id} {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the file here ...</p>
          ) : (
            <p>Drag {'n'} drop your file here, or click to select file</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZone;
