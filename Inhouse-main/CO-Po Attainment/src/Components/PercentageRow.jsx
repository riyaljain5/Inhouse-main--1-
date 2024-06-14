// PsoRow.js
import React from "react";



function PercentageRow({ co, po, pso }) {
 

  return (
    <div className="row border" style={{ display: "flex" }}>
      <div className="col-1 ps-4 py-2 fs-5 pe-1" style={{ marginLeft: "" }}>{co}
      </div>
      <div className="col-9 px-4 pe-1 fs-5">
        <div className="row p-2 ">
           { po.map((item, index) => (
              <div className="col" key={index}>
                {item.toFixed(1)}
              </div>
            ))}
        </div>
      </div>
      <div className="col-2 py-2 ps-5 px-1  fs-5">
        <div className="row">
            {pso.map((item, index) => (
              <div className="col" key={index}>
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PercentageRow;




// // PsoRow.js
// import React, { useState } from "react";

// function PsoRow({ co, po, pso, onSave }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedCo, setEditedCo] = useState(co);
//   const [editedPo, setEditedPo] = useState(po);
//   const [editedPso, setEditedPso] = useState(pso);

//   const handleSave = () => {
//     onSave(editedCo, editedPo, editedPso);
//     setIsEditing(false);
//   };

//   return (
//     <div className="row border" style={{display:"flex"}}>
//       <div className="col-1 ps-4  py-2 fs-5 pe-1" style={{marginLeft:""}}>
//         {isEditing ? (
//           <input
//             type="text"
//             value={editedCo}
//             onChange={(e) => setEditedCo(e.target.value)}
//           />
//         ) : (
//           co
//         )}
//       <div className="col-1 px-2" style={{padding:"2px", borderStyle:"none", marginLeft:"10px",marginBottom:"4px", maxWidth:"5px"}}>
//         {isEditing ? (
//           <button className= "btn btn-primary"  onClick={handleSave}>Save</button>
//         ) : (
//           <button className= "btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
//         )}
//       </div>
//       </div>
//       <div className="col-9 px-4 pe-1 fs-5">
//         <div className="row p-2 ">
//           {isEditing ? (
//             editedPo.map((item, index) => (
//               <div className="col" key={index}>
//                 <input
//                   type="number"
//                   value={item}
//                   onChange={(e) => {
//                     const newPo = [...editedPo];
//                     newPo[index] = e.target.value;
//                     setEditedPo(newPo);
//                   }}
//                   style={{ width: "50px" }}
//                 />
//               </div>
//             ))
//           ) : (
//             po.map((item, index) => (
//               <div className="col" key={index}>
//                 {item}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <div className="col-2 py-2 pe-1 fs-5">
//         <div className="row">
//           {isEditing ? (
//             editedPso.map((item, index) => (
//               <div className="col" key={index}>
//                 <input
//                   type="number"
//                   value={item}
//                   onChange={(e) => {
//                     const newPso = [...editedPso];
//                     newPso[index] = e.target.value;
//                     setEditedPso(newPso);
//                   }}
//                   style={{ width: "50px" }}
//                 />
//               </div>
//             ))
//           ) : (
//             pso.map((item, index) => (
//               <div className="col" key={index}>
//                 {item}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       {/* <div className="col-1 px-2" style={{padding:"2px", borderStyle:"none", marginLeft:"10px",marginBottom:"4px", maxWidth:"5px"}}>
//         {isEditing ? (
//           <button className= "btn btn-primary"  onClick={handleSave}>Save</button>
//         ) : (
//           <button className= "btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
//         )}
//       </div> */}
//     </div>
//   );
// }

// export default PsoRow;