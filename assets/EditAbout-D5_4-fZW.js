import{r as o,j as e,L as l}from"./index-DrANzNtF.js";import{a as r}from"./axiosConfig-C9cZZwrT.js";const u=()=>{const[a,s]=o.useState("");o.useEffect(()=>{r.get("login-api/getProfileData").then(t=>{s(t.data[0].about)})},[]);const n=async()=>{if(a.trim()===""){alert("Please enter something about yourself.");return}console.log("About Text Saved:",a);try{const t=await r.post("login-api/updateAbout",{about:a});console.log("Response from Django:",t.data)}catch(t){console.error("Error sending data to Django:",t)}};return e.jsxs("div",{className:"d-flex flex-column justify-content-between p-4 bg-light",style:{borderRadius:"20px",boxShadow:"0px 0px 30px rgba(0, 0, 0, 0.25)",minWidth:"500px",minHeight:"450px"},children:[e.jsx("h1",{className:"text-center my-4",children:"Edit About"}),e.jsxs("div",{children:[e.jsx("textarea",{className:"form-control mb-3",rows:5,placeholder:"Write Whatever...",value:a,onChange:t=>{t.target.value.length<=500&&s(t.target.value)}}),e.jsxs("small",{className:"text-muted",children:[a==null?void 0:a.length,"/",500," characters"]})]}),e.jsxs("div",{children:[e.jsx("button",{className:"custom-btn mb-3",onClick:n,children:"Save Changes"}),e.jsx(l,{to:"/profile",children:e.jsx("button",{className:"custom-btn",children:" Back to Profile "})})]})]})};export{u as default};
