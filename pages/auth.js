import {auth} from "../firebase/firebase";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";


function SignInScreen(){
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onHandleSubmit = ({email, password}) =>{
        signInWithEmailAndPassword(auth, email, password)
           .then(user => {
               console.log(user);
           }).catch(error => console.log(error));
    }

    return(
        <div>
            <h3>U site</h3>
            <p>Please Sign in:</p>
            <form action=""></form>
            {/*<div uiConfig={uiConfig} firebaseAuth={firebase.auth()} />*/}
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="email" placeholder="Enter your email" {...register("email", {required:true})}/>
                <input type="password" placeholder="Enter your password" {...register("password", {required: true})}/>
                <input type="submit"/>
            </form>
        </div>
    )
};


export default SignInScreen;