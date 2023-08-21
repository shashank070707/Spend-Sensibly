import React, {useEffect} from "react";
import { Form, Input, message,Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Spinner from "../components/Spinner";
const Register = () => {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  //from submit
  const submitHandler = async (values) => {
    try {
      // setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registeration Successfull");
      // setLoading(false);
      navigate("/login");
    } catch (error) {
      // setLoading(false);
      message.error("something went wrong");
    }
  };

  // prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
  
    <div className="register-page ">
      
      <div className="register-div">

          <h1 >
            Register
          </h1>
         
          <Form layout="vertical" onFinish={submitHandler}>
            <Form.Item label="Name"  name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email" >
              <Input />
            </Form.Item>

            <Form.Item label="Password" name="password" >
              <Input type="password" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block >
              Register
            </Button>

    
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
        
          </Form>

      </div>
      <div className='register-div1'>
       
          <h1>SpendSensibly</h1>
          <span>
            One place to track all your business records
          </span>
      
      </div>
    </div>

      
      
  )
}

export default Register