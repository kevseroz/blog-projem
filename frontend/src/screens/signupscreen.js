
import React , {useEffect, useState } from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import  Button  from '@material-ui/core/Button'
import { signup} from '../actions/useractions';


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

function SignupScreen(props) {

    const classes = useStyles();

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [rePassword, setRePassword] = useState('');
    const userSignup = useSelector(state => state.userSignup);
    const {userInfo} = userSignup;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            //buraya admin route u eklenecek
            props.history.push("/");
        }
        return () => {

        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signup(username, email, password));
      }

    return <div className={classes.form}>
        <form onSubmit={submitHandler}>
            <ul className={classes.formContainer}>
                <li>
                    <h3>
                        Kayıt Ol
                    </h3>
                </li>
                
                <li>
                    <label 
                    htmlFor="username">
                        Name
                        </label>
                    <input
                    className={classes.inputBox}
                     type="username" 
                     name="username" 
                     id="username" 
                     onChange={(e) => setName(e.target.value)}
                      />
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
                        Kayıt Ol
                        </Button>
                </li>
            </ul>
        </form>
    </div>
}

export default withRouter(SignupScreen)