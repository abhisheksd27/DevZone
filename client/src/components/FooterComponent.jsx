import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook ,BsInstagram ,BsTwitter,BsGithub,BsDiscord} from 'react-icons/bs'

const FooterComponent = () => {
  return (
   
      <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'> 
                    <div className='mt-5'>
                    <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white animate-pulse'
      >
         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ' >Abhishek</span>
         shankar
      </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://linktr.ee/AbhiBytes' target='_blank' rel='noopener noreferrer'>
                                Practice projects
                            </Footer.Link>
                        </Footer.LinkGroup>
                        
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://abhisheksd27.github.io/AbhiBytes/' target='_blank' rel='noopener noreferrer'>
                                AbhiBytes
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://github.com/abhisheksd27' target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </Footer.Link>
                        </Footer.LinkGroup>
                        
                        <Footer.LinkGroup col>
                            <Footer.Link href='https://discordapp.com/users/abhisheksd' target='_blank' rel='noopener noreferrer'>
                                Discord
                            </Footer.Link>
                        </Footer.LinkGroup>

                    </div>
                    <div>
                    <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                Privacy policy
                            </Footer.Link>
                        </Footer.LinkGroup>
                        
                        <Footer.LinkGroup col>
                            <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                Terms and condition
                            </Footer.Link>
                        </Footer.LinkGroup>

                    </div>
                        

                    </div>
                </div>
                <Footer.Divider/>
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by="Abhishek Shankar" year={new Date().getFullYear()} />
                    <div className='flex  gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        
                        <Footer.Icon href='https://www.instagram.com/abhishek_.shankar/' icon={BsInstagram}/>
                        <Footer.Icon href='https://x.com/AbhishekSDevad6' icon={BsTwitter}/>
                        <Footer.Icon href='https://github.com/abhisheksd27' icon={BsGithub}/>
                        <Footer.Icon href='https://discordapp.com/users/abhisheksd' icon={BsDiscord}/>
                        
                    </div>
                </div>
            </div>
      </Footer>
   
  )
}

export default FooterComponent
