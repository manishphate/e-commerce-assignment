import React from "react";
import Style from "../css/signUp.module.css";
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

const SignUp = () => {

    let { register, handleSubmit, formState:{errors},watch } = useForm();
    let navigate = useNavigate();

    const password = watch("password");

    const onSubmit=(data)=>{

        let lsData = localStorage.getItem("users");
        console.log("users",lsData);

        let users = lsData ? JSON.parse(lsData) : [];
        users.push(data);

        localStorage.setItem("users",JSON.stringify(users));

        navigate("/home");

    }

    return (
        <>
            <div className={Style.body_div}>

                <div className={Style.container}>

                    <div className={Style.card3}>
                        <button onClick={()=>navigate("/login")}>Login</button>
                    </div>

                    <div className={Style.card1}>
                        <h1>Sign up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className={Style.form}>
                            <div className={Style.input_div}>
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    {...register("name",{required:true})}
                                />

                                <div className={Style.card_icon}>
                                    <FaUser />
                                </div>
                            </div>
                            {errors.name && <span>this filed required</span>}

                            <div className={Style.input_div}>
                                <input 
                                    type="text" 
                                    placeholder="Enter your email..." 
                                    {...register("email",{required:true})}
                                />
                
                                <div className={Style.card_icon}>
                                    <MdEmail />
                                </div>
                            </div>
                            {errors.email && <span>this filed required</span>}

                            <div className={Style.input_div}>
                                <input 
                                    type="text" 
                                    placeholder="Enter password..." 
                                    {...register("password",{required:true})}
                                />
                                
                                <div className={Style.card_icon}>
                                    <RiLockPasswordLine />
                                </div>
                            </div>
                            {errors.password && <span>this filed required</span>}

                            <div className={Style.input_div}>
                                <input 
                                    type="text" 
                                    placeholder="Confirm password..." 
                                    {...register("confirmPassword",{required:true,
                                        validate: value =>
                                            value === password || "Password not match"
                                    })}
                                />

                                <div className={Style.card_icon}>
                                    <RiLockPasswordFill />
                                </div>
                            </div>
                            {errors.confirmPassword && <span>{errors.confirmPassword.message || "this filed required"}</span>}

                            <div className={Style.signUP_btn}>
                                <button type="submit">Sign up<FaArrowRight className={Style.arrow} /></button>
                            </div>

                        </form>

                        <div className={Style.create_acc}>
                            <h4>or</h4>
                            <div className={Style.create_acc_container}>
                                <AiFillGoogleSquare />
                                <BsGithub />
                                <FaLinkedin />
                                <FaFacebookSquare />
                            </div>

                        </div>

                    </div>


                    <div className={Style.card2}>
                        <h1 className={Style.title}>PROJECT</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SignUp;