const videos = [
    {
      src: './assets/video-playlist/home_banner.mp4',
      title: 'Home Banner',
      client: 'WINS',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum adipisci impedit itaque quibusdam?'
    },
    {
      src: './assets/video-playlist/test1.mp4',
      title: 'Product Launch',
      client: 'Tech Co.',
      details: 'An exciting new product that revolutionizes the tech industry with cutting-edge features.'
    },
    
  ];
  
  let currentIndex = 0;
  const videoElement = document.getElementById('slideshow-video');
  const videoSource = document.getElementById('video-source');
  const videoTitle = document.getElementById('video-title');
  const videoClient = document.getElementById('video-client');
  const videoDetails = document.getElementById('video-details');
  const nextButton = document.getElementById('next-btn');
  const prevButton = document.getElementById('prev-btn');
  
  // Function to reset animations
  function resetAnimation(element) {
    element.style.animation = 'none';  // Remove animation
    element.offsetHeight;              // Trigger a reflow, flushing the CSS changes
    element.style.animation = '';      // Reapply the animation
  }
  
  // Function to update the video and its information
  function updateVideo(index) {
    // Hide the information and reset the animation
    videoTitle.classList.add('hidden');
    videoClient.classList.add('hidden');
    videoDetails.classList.add('hidden');
  
    setTimeout(() => {
      videoSource.src = videos[index].src;
      videoElement.load();  // Load the new video
      videoElement.play();
  
      // Update the video information
      videoTitle.textContent = videos[index].title;
      videoClient.textContent = videos[index].client;
      videoDetails.textContent = videos[index].details;
  
      // Reset the animations for each element
      resetAnimation(videoTitle);
      resetAnimation(videoClient);
      resetAnimation(videoDetails);
  
      // Remove 'hidden' class to trigger animation
      videoTitle.classList.remove('hidden');
      videoClient.classList.remove('hidden');
      videoDetails.classList.remove('hidden');
    }, 500);  // Delay for half a second before changing content
  }
  
  // Event listener for the "Next" button
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videos.length;  // Move to the next video
    updateVideo(currentIndex);
  });
  
  // Event listener for the "Previous" button
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;  // Move to the previous video
    updateVideo(currentIndex);
  });