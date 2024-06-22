import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="" style={{height:"600px",backgroundColor:"lightblue",display:"flex", justifyContent:"center",alignItems:"center"}}>
      <div className="authentication-form card p-3" style={{marginTop:"20px",marginLeft:"50px",width:"500px",height:"500px"}}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email" style={{width:"400px",fontWeight:"bolder",paddingLeft:"50px"}}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password" style={{width:"400px",fontWeight:"bolder", paddingLeft:"50px"}}>
            <Input placeholder="Password" type="password" />
          </Form.Item>
         <br/> <Button className="full-width-button" htmlType="submit" style={{backgroundColor: "steelblue",color:"white",fontWeight:"bolder",border:"none"}}>
            Login
          </Button><br/><br/>
          
<hr/>
          <Link to="/register" className="anchor mt-2">
            Register
          </Link>
         
        </Form>
      </div>
    </div>
  );
}

export default Login;
