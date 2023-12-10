import React from 'react'
import Analytics from '../components/Analytics'

const Home = () => {
  return (
   <>
   <main>
    <section className='section-hero'>
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <p>We are a IT service Company</p>
          <h1>Welcome to TechVortex</h1>

          <p>Are you ready  to take your business to the next level with cutting-edge IT solutions?
            Look no further! At TechVortex, we specialize in providing innovative IT service and solutions
            tailored to meet your unique needs.
          </p>
          <div className="btn btn-group">
            <a href="/contact"><button className='btn'>Connect Now</button></a>
            <a href="/services"><button className='btn secondary-btn'>Learn More</button></a>
          </div>
        </div>

        {/* Hero Images */}
        <div className="hero-images">
          <img src="/images/home.png" alt="" width={500}
                  height={500}
                />
        </div>
      </div>
    </section>
   </main>

   {/* 2nd section */}
    <Analytics />

   {/* 3rd section */}
    
   <section className='section-hero'>
      <div className="container grid grid-two-cols">
         {/* Hero Images */}
         <div className="hero-images">
          <img src="/images/design.png" alt="" width={500}
                  height={500}
                />
        </div>
          {/* section */}
        <div className="hero-content">
          <p>We are here to help you.</p>
          <h1>Get Started Today.</h1>

          <p>Ready to take the first step towards a more efficient and secure IT
            infrastructure? Contact us today for a free consultation and let's
            discuss how TechVortex can help your business to thrive in the digital era.
          </p>
          <div className="btn btn-group">
            <a href="/contact"><button className='btn'>Connect Now</button></a>
            <a href="/services"><button className='btn secondary-btn'>Learn More</button></a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home