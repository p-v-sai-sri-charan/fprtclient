import React,{useState,useEffect} from 'react'
import "./Profile.css"
import axios from "axios";
const id = localStorage.getItem('id')
function Profile() {
  const [pic, setPic] = useState("");
  const [data,setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [password, setPassword] = useState("");
  const [message,setMessage]=useState("")
  const clikProfile = () => {
    document.getElementById("profile-input").click();
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleUpdate = (e)=>{
    e.preventDefault()
    axios.post(`http://localhost:5000/api/auth/updatepassword/${id}`, 
          JSON.stringify({ password: password }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }).then((result)=>{setMessage("Success")})
          .catch((err)=>{console.log(err)})
          setPassword("")
  }
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/auth/getdatabyid/${id}`,{
      headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  }).then((result)=>{
    setData(result.data.user)}).catch((err)=>{
    console.log(err)
  })
  },[counter])
  console.log(data)
  useEffect(() => {
    if (pic) {
      const image = new FormData();
      image.append("file", pic);
      image.append("upload_preset", "saisricharanpicpreset");
      image.append("cloud_name", "saisricharan");
      image.append("api_key", "266946824166371");

      axios
        .post(
          "https://api.cloudinary.com/v1_1/saisricharan/image/upload",
          image,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
          )
        .then((resul) => {
          axios.post(`http://localhost:5000/api/auth/updateprofilepic/${id}`, 
          JSON.stringify({ pic: resul.data.url }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
            .then((result) => {

              localStorage.setItem(
                "user",
                JSON.stringify({ ...data, pic: result.pic })
              );
              setCounter(counter + 1);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pic]);

  const updatePic = (file) => {
    setPic(file);
  };
  return (
    <div>
      <div className="card">
      <div
        className="profilePicture"
        style={{
        backgroundImage: `url(${data ? data.pic : ""})`,
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        cursor: "pointer",
        }}
        onClick={clikProfile}
        type="file"
        value={pic}
        onChange={(e) => updatePic(e.target.files[0])}
      >
      <input
        id="profile-input"
        type="file"
        style={{ visibility: "hidden" }}
      />
      </div>
      <h1>{data ? data.email : ""}</h1>
  <input type="password" 
  style={{width:"90%"}} 
  placeholder="New Password" 
  value={password}
  onChange={onChangePassword}></input>
  <p>{message?message:""}</p>
  
  <p><button onClick={handleUpdate}>Update</button></p>
</div>
    </div>
  )
}

export default Profile
