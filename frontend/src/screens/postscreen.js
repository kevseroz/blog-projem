import React , {useEffect, useState } from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import  Button  from '@material-ui/core/Button'
import { listPosts, savePost, deletePost } from '../actions/postactions';



const useStyles = makeStyles({
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        width: "32rem",
        padding: "2rem",
        border: ".1rem #f0f0f0 solid",
        borderRadius: ".5rem",
        listStyleType: "none",
        "& li": {
            display:"flex",
            flexDirection: "column",
            marginBottom: "1rem",
        },
    },
    inputBox: {
        padding: "1rem",
        border: ".1rem #c0c0c0 solid",
    }
  });

function PostScreen(post) {

    const classes = useStyles();

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState([]);
    const [description, setDescription] = useState('');

    const postList = useSelector(state => state.postList);
    const {loading, posts, error} = postList;

    const postSave = useSelector(state => state.postSave);
    const { loading: loadingSave, success: successSave, 
        error: errorSave } = postSave;
        
    const postDelete = useSelector(state => state.postDelete);
    const {loading: loadingDelete, success: successDelete,
         error: errorDelete} = postDelete;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave) {
            setModalVisible(false);
        }
        dispatch(listPosts());
        return () => {

        };
        //bu array içindeki işlemlerden herhangi biri gerçekleşirse sayfa yenileniyor.
    }, [successSave, successDelete]);

    //formu açıp kapayacak bir fonksiyon oluşturuyoruz
    const openModal = (post) => {
        setModalVisible(true)
        setId(post._id);
        setName(post.name);
        setImage(post.image);
        setDescription(post.description);
    }

    const submitHandler = (e) => {
        e.preventDefault();

       
        dispatch(savePost({ _id: id, name, image, description}));
        console.log(id)
    }

    const deleteHandler = (post) => {
        dispatch(deletePost(post._id))
    }

    return <div className={classes.content, classes.contentMargined}>

        <div className={classes.postHeader}>
            <h3>Ürün Listesi</h3>
             
            <Button 
            variant= "contained"
             color="primary"
             //burada boş obje vererek ürün oluştururken formun boş gelmesini sağlarız.
             onClick={() => openModal({})}
             >Ürün Oluştur</Button>
        </div>
        {modalVisible && 
         <div className={classes.form}>
         <form encType="multipart/form-data" onSubmit={submitHandler} >
             <ul className={classes.formContainer}>
                 <li>
                     <h3>
                         Ürün Oluştur
                     </h3>
                 </li>
                 <li>
                     {loadingSave && <div>Yükleniyor...</div>}
                     {errorSave && <div>{errorSave}</div>}
                 </li>
                 <li>
                     <label 
                     htmlFor="name">
                         Ürün Adı
                         </label>
                     <input
                     className={classes.inputBox}
                      type="text" 
                      name="name" 
                     // value={name}
                      id="name" 
                      onChange={(e) => setName(e.target.value)}
                       />
                 </li>
                 <li>
                     <label 
                     htmlFor  = "image">
                         Ürün Resmi
                         </label>
                     <input
                     className={classes.inputBox}
                      type = "file"
                      name = "image" 
                      id = "image" 
                      onChange = {e => setImage(e.target.files[0])} />
                 </li>
                 <li>
                     <label 
                     htmlFor  = "description">
                         Ürün Açıklaması
                         </label>
                     <textarea
                     className={classes.inputBox} 
                      name = "description" 
                      value = {description}
                      id = "description" 
                      onChange = {(e) => setDescription(e.target.value)} />
                 </li>
                 <li>
                     <Button 
                     variant="contained"
                     color="primary"
                     type="submit" 
                     className="button">
                         {id ? "Güncelle" :"Ürün Oluştur"}
                        
                         </Button>
                 </li>
                 <li>
                     <Button 
                     variant="contained"
                     color="primary"
                     type="submit" 
                     className="button"
                     onClick={() => setModalVisible(false)} >
                        Gizle
                         </Button>
                 </li>
             </ul>
         </form>
     </div>}
       

        <div className={classes.postList}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ürün İsmi</th>
                        <th>Ürün Resmi</th>
                        <th>Ürün Açıklaması</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post =>(
                         <tr key={post._id}>
                             <td>{post._id}</td>
                             <td>{post.name}</td>
                             <td>{post.image}</td>
                             <td>{post.description}</td>
                             <td>
                                 <Button 
                                 variant= "contained" 
                                 color="primary"
                                 //burada fonksiyon editleyeceğimiz ürün formu içi dolu olarak gelir.
                                 onClick={() => openModal(post)}
                                 >Güncelle</Button>
                                 
                                 <Button 
                                 variant= "contained" 
                                 color="primary"
                                 onClick={() => deleteHandler(post)}
                                 >Sil</Button>
                             </td>
                        </tr>
                    ))}
                  
                </tbody>
            </table>
        </div>
   
    
    
   
    </div>
}

export default withRouter(PostScreen)