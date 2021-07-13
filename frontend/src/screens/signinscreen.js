import React , {useEffect, useState } from 'react'
import {Link, Route, withRouter, Redirect} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import  Button  from '@material-ui/core/Button'
import { setCurrentUser, signin } from '../actions/useractions';



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

function SigninScreen(props) {

    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo} = userSignin;
    
    const dispatch = useDispatch();
    
    const auth = useSelector(state => state.userSignin);
    const { isAuthenticated } = auth;
    console.log(isAuthenticated);
    useEffect(() => {
        if (userInfo) {
            //buraya admin route u eklenecek
            //props.history.push(redirect);
            //dispatch(setCurrentUser(userInfo));
            let jsonToken = localStorage.getItem('jwtToken')
            dispatch(setCurrentUser(userInfo));
            props.history.push("/");
        }
        return () => {
            
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password)).then(() => {
            props.history.push("/");
          })
          .catch(() => {
            return;
          });
    }

    return <div className={classes.form}>
        <form onSubmit={submitHandler}>
            <ul className={classes.formContainer}>
                <li>
                    <h3>
                        Giriş Yap
                    </h3>
                </li>
                
                <li>
                    <label 
                    htmlFor="email">
                        Email
                        </label>
                    <input
                    className={classes.inputBox}
                     type="email" 
                     name="email" 
                     id="email" 
                     onChange={(e) => setEmail(e.target.value)}
                      />
                </li>
                <li>
                    <label 
                    htmlFor  = "password">
                        Şifre
                        </label>
                    <input
                    className={classes.inputBox}
                     type = "password" 
                     name = "password" 
                     id = "password" 
                     onChange = {(e) => setPassword(e.target.value)} />
                </li>
                <li>
                    <Button 
                    variant="contained"
                    color="primary"
                    type="submit" 
                    className="button">
                        Giriş Yap
                        </Button>
                </li>
            </ul>
        </form>
    </div>
}

export default withRouter(SigninScreen)