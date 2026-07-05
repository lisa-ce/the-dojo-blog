import React from 'react'

const Home = () => {


// let name = 'Mario';
// const [name, setName] = React.useState('Mario');
// const [age, setAge] = React.useState(25);

//   const handleClick = () => {
// setName('Luigi');
// setAge(30);
//   } 


const [blogs, setBlogs] = React.useState([
  { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }
]);
  return ( 

    <div className="home">
    {blogs.map((blog)=>(
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </div>
    ))}
     </div>



   );
}
 
export default Home;