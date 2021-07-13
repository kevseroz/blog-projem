import React from 'react'
import './styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




function Footer() {
    return(
        <div className='container-fluid pb-0 mb-0 justify-content-center text-light' >
            <footer>
            <div className=" row my-5 justify-content-center py-2">
            <div className="col-11">
                <div className="row ">
                    <div className="col-xl-4 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                      
                        <h3 className="text-muted mb-md-0 mb-5 ">Kevser Özkan</h3>
                    </div>

               
                  
                    <div className="col-xl-8 col-md-4 col-sm-4 col-12">
                        <p className="mb-3"><b className="mb-3 mb-lg-3 text-muted bold-text mt-sm-0 mt-5">ADRES :</b> Küçük Sanayi Sitesi 13/4 Kilis Merkez</p>
                        <p className="mb-3"><b className="mb-3 mb-lg-3 text-muted bold-text mt-sm-0 mt-5">TELEFON :</b> <a href='tel:+903488139006'> 0 (348) 813 90 06</a></p>
                        <span className="mx-2"><FontAwesomeIcon icon={faEnvelope} size='lg' className='mb-4'></FontAwesomeIcon></span>
                              <span className="mx-4"><FontAwesomeIcon icon={faFacebookF} size='lg' className='mb-4'></FontAwesomeIcon></span> 
                              <span className="mx-2 "><FontAwesomeIcon icon={faInstagram} size='lg' className='mb-4'></FontAwesomeIcon></span>
                        
                        <p className='mt-5 mb-0'><small className="rights" ><span>&#174;</span> Designed By KevserOzkan.</small></p>
                              
                        
                    </div>
                </div>

            </div>
        </div>
            </footer>
        </div>
    )
}

export default Footer;

/*     <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                        <h6 className="mt-55 mt-2 text-muted bold-text"><b>ANIRUDH SINGLA</b></h6><small>
                             <span><i className="fa fa-envelope" aria-hidden="true"></i>
                             </span> anirudh@gmail.com</small>
                    </div>
                    <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                        <h6 className="text-muted bold-text"><b>RISHABH SHEKHAR</b></h6><small>
                            <span><i className="fa fa-envelope" aria-hidden="true"></i></span> rishab@gmail.com</small>
                    </div>
                    
                      <div className = "col-xl-4 col-md-4 col-sm-4 col-12">
                    <h6  className = "mb-3 mb-lg-4 bold-text "><b></b></h6>
                    <ul  className = "list-unstyled">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    
                     <div className="col-xl-6 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                        <p className="social text-muted mb-0 pb-0 bold-text"> 
                             <span className="mx-2"><FontAwesomeIcon icon={faGoogle} size='lg' className='mb-4'></FontAwesomeIcon></span>
                              <span className="mx-2"><FontAwesomeIcon icon={faFacebookF} size='lg' className='mb-4'></FontAwesomeIcon></span> 
                              <span className="mx-2"><FontAwesomeIcon icon={faInstagram} size='lg' className='mb-4'></FontAwesomeIcon></span>
                               </p>*/