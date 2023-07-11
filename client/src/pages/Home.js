import React from 'react';

const Home = () => {
  


  return (
    <div className="d-flex justify-content-center rounded">
        {<div class="d-flex card w-50">
          <img class="rounded pb-1" alt="image of tattoo" src="https://www.itattoodesigns.com/images/articles/rat_tattoo_designs.jpg"></img>
            <div class="card-body">
              <h5 class="card-title">Need to link post title, and iterate through posts, check comments on Home.js</h5>
              <p class="card-text">Example caption... NOTE image is hard coded at current</p>
              <a href="#" class="btn  btn-primary">Link to comment entry</a>
            </div>
          </div> 
        }
      </div>
  );
};

export default Home;


   /* <PostStuff
            imageURL={post.imageURL}
            postText={`${post.postText}`}
            showTitle={false}
            showUsername={false}
          /> */
