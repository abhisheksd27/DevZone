import { Modal, Table, Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashProjects() {
  const { currentUser } = useSelector((state) => state.user);
  const [userProjects, setUserProjects] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState('');

  useEffect(() => {
    if (!currentUser || !currentUser._id) {
      console.error('Current user is not available');
      return;
    }

    const fetchProjects = async () => {
      try {
        const res = await fetch(`/api/projects/getProjects?userId=${currentUser._id}`);
        if (!res.ok) {
          console.error('Failed to fetch projects. Status:', res.status);
          throw new Error(`Failed to fetch projects. Status: ${res.status}`);
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          setUserProjects(data);
          if (data.length < 9) {
            setShowMore(false);
          }
        } else {
          setUserProjects([]);
          setShowMore(false);
        }
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchProjects();
  }, [currentUser]);

  const handleShowMore = async () => {
    const startIndex = userProjects.length;
    try {
      const res = await fetch(
        `/api/projects/getProjects?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserProjects((prev) => [...prev, ...data]);
        if (data.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.error('Error fetching more projects:', error.message);
    }
  };

  const handleDeleteProject = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/projects/deleteProject/${projectIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.error('Error deleting project:', data.message);
      } else {
        setUserProjects((prev) => prev.filter((project) => project._id !== projectIdToDelete));
      }
    } catch (error) {
      console.error('Error deleting project:', error.message);
    }
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser?.isAdmin && userProjects.length > 0 ? (
        <>
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Project image</Table.HeadCell>
              <Table.HeadCell>Project Title</Table.HeadCell>
              <Table.HeadCell>Type</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className='divide-y'>
              {userProjects.map((project) => (
                <Table.Row key={project._id} className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date(project.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/project/${project.slug}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className='w-20 h-10 object-cover bg-gray-500'
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='font-medium text-gray-900 dark:text-white'
                      to={`/project/${project.slug}`}
                    >
                      {project.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{project.type}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setProjectIdToDelete(project._id);
                      }}
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className='text-teal-500 hover:underline'
                      to={`/update-project/${project._id}`}
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no projects yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this project?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteProject}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
