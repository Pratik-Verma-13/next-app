// export default function Event2({ params, searchParams }) {
//     const { title, description, location, time } = searchParams;

//     const style1 = {
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         alignItems: "center",
//         justifyContent: "center"
//     }

//     const style2 = {
//         height: "80%",
//         width: "50%",
//         backgroundColor: "black",
//         color: "white"
//     }

//     return (
//         <div className="eventfake" style={style1}>
//             <div className="eventdetails" style={style2}>
//                 <h2>{title}</h2>
//                 <p>{description}</p>
//                 <p>{location}</p>
//                 <p>{time}</p>
//             </div>
//         </div>
//     )
// }


export default function Event2(){
    return(
        <>
            <h1 style={{color: "white"}}>This is fake about</h1>
        </>
    )
}