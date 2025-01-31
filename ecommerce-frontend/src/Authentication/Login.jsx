import React from 'react'
import LoginStyle from "../css/login.module.css"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { AiFillGoogleSquare } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {


    let { register, handleSubmit, formState: { errors }, watch } = useForm();
    let navigate = useNavigate();

    const password = watch("password");

    const onSubmit = (data) => {

        let lsData = localStorage.getItem("users");
        // console.log("users", lsData);

        let Data = JSON.parse(lsData);

        console.log(Data)
        let finalData = Data.find((m)=>{
            if(data.email == m.email)
            {
                // console.log(m.email)
                return m;
            }
        })
        console.log(finalData)

        if(finalData)
        {
            navigate('/home')
        }

    }

    return (
        <>
            <div className={LoginStyle.body_div}>

                <div className={LoginStyle.container}>


                    <div className={LoginStyle.card2}>
                        <h1 className={LoginStyle.title}>PROJECT</h1>
                    </div>

                    <div className={LoginStyle.card1}>
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className={LoginStyle.form}>

                            <div className={LoginStyle.input_div}>
                                <input
                                    type="text"
                                    placeholder="Enter your email..."
                                    {...register("email", { required: true })}
                                />

                                <div className={LoginStyle.card_icon}>
                                    <MdEmail />
                                </div>
                            </div>
                            {errors.email && <span>this filed required</span>}

                            <div className={LoginStyle.input_div}>
                                <input
                                    type="text"
                                    placeholder="Enter password..."
                                    {...register("password", { required: true })}
                                />

                                <div className={LoginStyle.card_icon}>
                                    <RiLockPasswordLine />
                                </div>
                            </div>
                            {errors.password && <span>this filed required</span>}

                            <div className={LoginStyle.signUP_btn}>
                                <button type="submit">Login<FaArrowRight className={LoginStyle.arrow} /></button>
                            </div>

                        </form>

                        <div className={LoginStyle.create_acc}>
                            <h4>or</h4>
                            <div className={LoginStyle.create_acc_container}>
                                <AiFillGoogleSquare />
                                <BsGithub />
                                <FaLinkedin />
                                <FaFacebookSquare />
                            </div>

                        </div>

                    </div>

                    <div className={LoginStyle.card3}>
                        <button onClick={() => navigate("/")}>Sign up</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Login