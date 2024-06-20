import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import app from '../firebase';
import { useEffect, useState } from 'react'; 
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UpdateProject() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({
    techStack: [],
    title: '',
    type: '',
    about: '',
    liveLink: '',
    githubLink: '',
    learnings: '',
    image: '',
  });
  const [updateError, setUpdateError] = useState(null);
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/getProjects?projectId=${projectId}`);
        const data = await res.json();
        if (!res.ok) {
          setUpdateError(data.message);
        } else if (data.projects && data.projects.length > 0) {
          setFormData(data.projects[0]);
        }
      } catch (error) {
        setUpdateError('Failed to fetch project data');
      }
    };

    fetchProject();
  }, [projectId]);

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
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/projects/updateProject/${projectId}/${currentUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      if (!res.ok) {
        setUpdateError(data.message);
        return;
      }
      navigate(`/projects`);
    } catch (error) {
      setUpdateError('Something went wrong');
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Update Project</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Project Title'
          required
          id='title'
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
        />
        <Select
          id='type'
          required
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          value={formData.type}
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
          onChange={(e) => setFormData({ ...formData, techStack: e.target.value.split(',').map((item) => item.trim()) })}
          value={formData.techStack.join(', ')}
        />
        <TextInput
          type='text'
          placeholder='About Project'
          required
          id='about'
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
          value={formData.about}
        />
        <TextInput
          type='url'
          placeholder='Live Link'
          required
          id='liveLink'
          onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
          value={formData.liveLink}
        />
        <TextInput
          type='url'
          placeholder='GitHub Link'
          required
          id='githubLink'
          onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
          value={formData.githubLink}
        />
        <TextInput
          type='text'
          placeholder='Learnings'
          required
          id='learnings'
          onChange={(e) => setFormData({ ...formData, learnings: e.target.value })}
          value={formData.learnings}
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
            disabled={!!imageUploadProgress}
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
            className='w-full h-72 object-cover'
          />
        )}
        <Button type='submit' gradientDuoTone='purpleToPink'>Update Project</Button>
        {updateError && <Alert className='mt-5' color='failure'>{updateError}</Alert>}
      </form>
    </div>
  );
}
