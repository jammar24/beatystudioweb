import  'react'

const Footer = () => {
  return (

    
<section>
    <div>
        <div>
            <h5>Add More Beauty To Your Email</h5>
            <form action="">
                <input type="email" id="email" name="email" placeholder="Your email" />
            </form>

            <button>Submit</button>
        </div>
    </div>

    
    

    <div className="contact-wrapper">
      <h4>Stay In Touch With PIXEL</h4>
      <div className="wrapper">        
        <ul className="social-menu">
          <li><a href="#"><i className="fa fa-pinterest" ></i></a></li>
          <li><a href="#"><i className="fa fa-instagram" ></i></a></li>
          <li><a href="#"><i className="fa fa-twitter" ></i></a></li>
          <li><a href="#"><i className="fa fa-youtube-play" ></i></a></li>
        </ul>
        <a className="contact-footer contact-tel" href="#"><i className="fa fa-phone" ></i>001-283-4892</a>
        <a className="contact-footer contact-email" href="#"><i className="fa fa-envelope-o" ></i>Send an email</a>
      </div>
      </div>
      </section>

  
    
  )
}

export default Footer