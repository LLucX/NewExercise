import React from 'react';
import "./Home.css";



const Homepage = () => {
  const images = [
    {
      id: 1,
      title: 'Image 1',
      description: 'Description for image 1',
      imageUrl: "./image/fileOne.jpg"
    },
    {
      id: 2,
      title: 'Image 2',
      description: 'Description for image 2',
      imageUrl: './image/fileTwo.jpg',
    },
    {
      id: 3,
      title: 'Image 3',
      description: 'Description for image 3',
      imageUrl: './image/fileThree.jpg',
    },
    {
      id: 4,
      title: 'Image 4',
      description: 'Description for image 4',
      imageUrl: './image/fileFour.jpg',
    },
    {
      id: 5,
      title: 'Image 5',
      description: 'Description for image 5',
      imageUrl: './image/fileFive.jpg',
    },
    {
      id: 6,
      title: 'Image 6',
      description: 'Description for image 6',
      imageUrl: './image/fileSix.jpg',
    },
    {
      id: 7,
      title: 'Image 6',
      description: 'Description for image 6',
      imageUrl: './image/fileThree.jpg',
    },
    {
      id: 8,
      title: 'Image 6',
      description: 'Description for image 6',
      imageUrl: './image/cover.jpg',
    },
  ];

  return (
    <body>
      {/* Header */}
      <header>
        <div>
          <h1>The Journal</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Lifestyle</a></li>
          </ul>
          <div>
            <input type="text" placeholder="Search" />
          </div>
        </nav>
      </header>

      {/* Main section */}
      <main>
        <div className="mainTitle">
          <h2>Latest news</h2>
          <h3>Don't miss a thing!</h3>
        </div>
        <div className='container'>
        <section className="imageSection">
          {images.map((image) => (
            <div key={`image${image.id}`} className={`image ${image.id}`}>
              <h4>{image.title}</h4>
              <img src={image.imageUrl} alt={image.title} />
              <div>
                <p>{image.description}</p>
              </div>
            </div>
            
          ))}
          
        </section>
          <div className="sideSection">
            <h4>Random links</h4>
            <div>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
              <a href="https //www.microsoft.com/link">https //www.microsoft.com/link</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div>
          <h4>About</h4>
          <p>Information about the website.</p>
        </div>
        <div>
          <h4>Jobs</h4>
          <p>work with us.</p>
        </div>
        <div>
          <h4>Contact us</h4>
          <p>Contact information.</p>
        </div>
        </footer>
    </body>
  )}

  export default Homepage;