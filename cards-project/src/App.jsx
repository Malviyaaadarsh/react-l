import React from 'react'
import './App.css'
import Card from './components/Card.jsx'
import User from './components/User.jsx'
const App = () => {

  // const arr=[{},{},{},{}];   // array of objects
  const jobPostings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "AI/ML",
    tag2: "Full-Time",
    pay: "₹25–40 LPA",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag1: "Data Science",
    tag2: "Remote",
    pay: "₹20–35 LPA",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    post: "Software Development Engineer",
    tag1: "Backend",
    tag2: "Full-Time",
    pay: "₹18–30 LPA",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Research Intern",
    tag1: "Internship",
    tag2: "Deep Learning",
    pay: "₹80K–1.2L/month",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/janestreet.com",  // change the logo link id not working 
    companyName: "Jane Street",
    datePosted: "2 weeks ago",
    post: "Quantitative Researcher",
    tag1: "Quant",
    tag2: "Hybrid",
    pay: "₹40–60 LPA",
    location: "Mumbai, India"
  }
];

// export default jobPostings;

  return (
    <div className='parent'>
    {jobPostings.map(function(elem,index){
      return <div key={index}><Card company={elem.companyName} post={elem.post} location={elem.location} 
      tag1={elem.tag1} tag2={elem.tag2} date={elem.datePosted} pays={elem.pay} img={elem.brandLogo}/></div>
    })}
    </div>
  )
}
export default App
