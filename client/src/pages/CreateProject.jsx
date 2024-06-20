import React from 'react';
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import app from "../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
  const [file, setFile] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [formData, setFormData] = useState({});
  const [createError, setCreateError] = useState(null);
  const navigate = useNavigate();

  const handleUploadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/projects/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setCreateError(data.message);
        return;
      }

      if (res.ok) {
        setCreateError(null);
        navigate('/projects');
      }
    } catch (error) {
      setCreateError('Something went wrong');
    }
    // console.log(res)
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>
        Create a Project
      </h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Project Title'
          required
          id='title'
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />
        <Select
          id='type'
          required
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
        >
          <option value=''>Select Project Type</option>
          <option value='Practice Project'>Practice Project</option>
          <option value='React Project'>React Project</option>
          <option value='Flask Project'>Flask Project</option>
          <option value='Django Project'>Django Project</option>
          <option value='Machine Learning Project'>Machine Learning Project</option>
          <option value='MERN Stack Project'>MERN Stack Project</option>
        </Select>
        <TextInput
          type='text'
          placeholder='Tech Stack (e.g., React, Node.js)'
          required
          id='techStack'
          onChange={(e) =>
            setFormData({ ...formData, techStack: e.target.value.split(',') })
          }
        />
        <TextInput
          type='text'
          placeholder='About Project'
          required
          id='about'
          onChange={(e) =>
            setFormData({ ...formData, about: e.target.value })
          }
        />
        <TextInput
          type='url'
          placeholder='Live Link'
          
          id='liveLink'
          onChange={(e) =>
            setFormData({ ...formData, liveLink: e.target.value })
          }
        />
        <TextInput
          type='url'
          placeholder='GitHub Link'
          required
          id='githubLink'
          onChange={(e) =>
            setFormData({ ...formData, githubLink: e.target.value })
          }
        />
        <TextInput
          type='text'
          placeholder='Learnings'
          required
          id='learnings'
          onChange={(e) =>
            setFormData({ ...formData, learnings: e.target.value })
          }
        />
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            onClick={handleUploadImage}
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {formData.image && (
          <img
            src={formData.image}
            alt='upload'
            className='w-full h-100 object-cover'
          />
        )}
        <Button type='submit' gradientDuoTone='purpleToPink' outline>
          Create Project
        </Button>
        {createError && (
          <Alert className='mt-5' color='failure'>
            {createError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default CreateProject;