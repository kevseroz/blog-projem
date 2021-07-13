import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { detailsPost } from './actions/postactions';
import ScrollToTop from './scrolltotop';
import { Button, Image } from 'react-bootstrap';
import './styles/details.css'
import './styles/card.css'



function PostDetail(props) {

    const postDetails = useSelector(state => state.postDetails);
    const { post, loading, error } = postDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsPost(props.match.params.id));
        return () => {
            //
        }
    }, [])

    return(

        <div className="container" >
            <ScrollToTop />
        
            {loading? <div>Loading...</div>:
             error? <div>{error}</div>:
             (
                <div>
                <div >
                    <Image rounded thumbnail className="details-image" src={post.image} alt={post.name} />
                </div>
                <div>                   
                    <h2 className="details-header">{post.name}</h2>                   
                    <div className="details-desc">
                        {post.description}
                    </div>     
                </div>
            </div>
             )
            }
    
            <Link to="/" >
                <Button className="button type1 details-link">Geri Dön</Button>
            </Link>
            
        </div>
    )}

 export default PostDetail;