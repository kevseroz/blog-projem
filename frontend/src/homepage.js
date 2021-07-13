import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from './actions/postactions';
import {Card, Button, CardGroup, Row, Col, Container } from 'react-bootstrap'
import './styles/card.css'



function Posts() { 


    const postList = useSelector((state) => state.postList);
    const { posts, loading, error } = postList;
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listPosts());

        return () => {
        }
    }, [])
    return( loading ? <div>Loading...</div>:
           error ? <div>{error}</div>:
        <Container  >
            <Row>
                <Col>
                  {
                 posts.map(post => 
                    <div className="">
                             <Card className=" mb-5 card-item" key={post._id}>
                                
                                      <Link   to ={`/post/${post._id}`} >
                                        <Card.Img variant="top"  src = {post.image} alt = {post.name} className="image-size " />
                                      </Link>
                                      <Card.ImgOverlay>
                                         <Card.Title className="title-size" >
                                             <Link   to ={`/post/${post._id}`} className = "" >{post.name}</Link>
                                         </Card.Title>
                                         <Card.Text className="text-size">
                                            {post.description.substring(0, 100)}
                                         </Card.Text>
                                         <Link   to ={`/post/${post._id}`} >
                                             <Button className="btn btn-one" >Daha Fazla</Button>
                                         </Link>
                                      </Card.ImgOverlay>                                          
                              </Card>
                              </div>
                  )}
                </Col>
            </Row>
        </Container>
    )
}
    


export default Posts;