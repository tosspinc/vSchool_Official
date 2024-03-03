import React from 'react'
import Header from './components/Header'
import BlogPost from './components/BlogPost'
import OlderBlogs from './components/OlderBlogs'
import Footer from './components/Footer'
import BlogPostData from './components/BlogPostData'
import './App.css'

export default function App() {
  const blogPostElements = BlogPostData.map(bdata => {
    return (
      <BlogPost
      key={bdata.id}
      {...bdata}
      />  
    )
  })
  return (
    <>
      <div>
        <Header />
        {blogPostElements}
        <OlderBlogs />
        <Footer />
      </div>
    </>
  )
}