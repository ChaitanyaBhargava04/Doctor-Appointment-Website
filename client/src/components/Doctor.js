import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <img class="card-img-top" src={`/Image/${doctor.photo}.jpg`} alt="Doctor Image"/><br/>

      <h1 className="card-title" style={{textAlign:"center",textTransform:"uppercase"}}>
        {doctor.firstName} {doctor.lastName}
      </h1>
      <p>
        <b>PHONE NUMBER : </b>
        {doctor.phoneNumber}
      </p>
      <p style={{textDecoration:"underlined",textDecorationStyle:"solid",textTransform:"uppercase"}}>
        <b>Address : </b>
        {doctor.address}
      </p>
      <p>
        <b>FEE: </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>TIMINGS : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
