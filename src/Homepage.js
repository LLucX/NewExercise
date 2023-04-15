import React from 'react';

const Homepage = () => {
  const images = [
    {
      id: 1,
      title: 'Image 1',
      description: 'Description for image 1',
      imageUrl: 'https://example.com/image1.jpg',
    },
    {
      id: 2,
      title: 'Image 2',
      description: 'Description for image 2',
      imageUrl: 'https://example.com/image2.jpg',
    },
    {
      id: 3,
      title: 'Image 3',
      description: 'Description for image 3',
      imageUrl: 'https://example.com/image3.jpg',
    },
    {
      id: 4,
      title: 'Image 4',
      description: 'Description for image 4',
      imageUrl: 'https://example.com/image4.jpg',
    },
    {
      id: 5,
      title: 'Image 5',
      description: 'Description for image 5',
      imageUrl: 'https://example.com/image5.jpg',
    },
    {
      id: 6,
      title: 'Image 6',
      description: 'Description for image 6',
      imageUrl: 'https://example.com/image6.jpg',
    },
  ];

  return (
    <div>
      {/* Header */}
      <header>
        <div>
          <img src="https://example.com/cover-photo.jpg" alt="Cover photo" />
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
        <section className="imageSection">
          {images.map((image) => (
            <div key={`image${image.id}`} className={`image${image.id}`}>
              <img src={image.imageUrl} alt={image.title} />
              <div>
                <h4>{image.title}</h4>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </section>
        <aside className="sideSection">
          <div>
            <h4>Random links</h4>
            <div>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
              <a href="#">Link 6</a>
              <a href="#">Link 7</a>
              <a href="#">Link 8</a>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer>
        <div>
          <h4>About</h4>
          <p>Information about the website.</p>
        </div>
        <div>
          <h4>Contact us</h4>
          <p>Contact information.</p>
        </div>
        </footer>
    </div>
  )}

  export default Homepage;