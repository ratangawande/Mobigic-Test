
export default function UserDetails(){
    const user=sessionStorage.getItem("uname");
    return(    
        
       
        <>
            <div className="container mt-5">
           
           
            <h3>Welcome....</h3>
            <h2>Hellow : {user} </h2>
            </div>
        </>
    )
}
