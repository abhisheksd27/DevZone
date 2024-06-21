import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import myPhoto from '../assets/logo2.png'; // Ensure the image file is in the same folder as Home.js

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <div className='flex items-center gap-4'>
          <img
            src={myPhoto}
            alt='Abhishek Shankar'
            className='w-40 h-40 rounded-full border-2 border-red shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 hover:ring-4 ring-purple-400 ring-opacity-100'
          />

          <div>
            <h1 className='text-3xl font-bold lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 '>
              Abhishek Shankar
            </h1>
            <p className='text-gray-500 text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-sm hover:shadow-md transition-transform transform hover:scale-105 '>
              Full Stack Developer from Bangalore
            </p>
          </div>
        </div>
        <hr className="h-0 invisible" />
        <h2 className='text-3xl font-bold lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500 transition-transform transform hover:scale-105 py-2 '>
          Welcome to my Blog
        </h2>
        <p className='text-gray-500 text-sm sm:text-base bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-transform transform hover:scale-105 py-1 '>
          Here you'll find a variety of articles and tutorials on topics such as web development, software engineering, and programming languages.
        </p>

        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 items-center'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6 items-center'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4 justify-center'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
