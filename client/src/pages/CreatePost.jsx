import React from 'react'
import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibol   d'>
            Create a post
        </h1>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
            // onChange={(e) =>
            //   setFormData({ ...formData, title: e.target.value })
            // }
          />
          <Select
            // onChange={(e) =>
            //   setFormData({ ...formData, category: e.target.value })
            // }
          >
            <option value='uncategorized'>Select a category</option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>React.js</option>
            <option value='nextjs'>Next.js</option>
          </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput
            type='file'
            accept='image/*'
            // onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
            // onClick={handleUpdloadImage}
            // disabled={imageUploadProgress}
          >
            {/* {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )} */}
            Upload Image
          </Button>
        </div>

        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
        //   onChange={(value) => {
        //     setFormData({ ...formData, content: value });
        //   }}
        />

        <Button type='submit' gradientDuoTone='purpleToPink' outline>
          Publish
        </Button>
        {/* {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )} */}
        
        
        </form>
      
    </div>
  )
}

export default CreatePost
