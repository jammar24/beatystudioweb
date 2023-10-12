import 'react'
import dataTiktok from "../helpers/datatiktok";
import './styles/about.css'

const About = () => {

  function TikTokVideo({ video}) {
    return (
      <div>
         <iframe
          title="Video de TikTok"
          width="300"
          height="400"
          src={video.video} 
          frameBorder="0"
        />
        <a href={video.video} target="_blank" rel="noopener noreferrer">
   
        </a>
      </div>
    );
  }



  return (
    <article  id='about'>
        <div>
           <span></span><h3>Beauty Studio</h3>
        </div>
 
    <div  className='about__text'>
    <p>Since 2016, Beauty Studio has been at the forefront of the move towards organic and natural skincare.</p>
      <p>Specialising in emerging niche natural skin care brands, Pixel Skin Care is a safe zone for you and your skin where we have taken special care to hand pick and offer you some of the purest and safest brands from global organic specialists.</p>
      <p>From cutting edge science to luxurious natural indulgence, we have selected the best products and treatments for healing and improving your well-being.</p>
    </div>
    <div  className='about__vdo'>
    {dataTiktok.map((video, data) => (
        <TikTokVideo key={data} video={video} />
      ))}
    </div>
    

    </article>
  )
}

export default About