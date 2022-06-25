import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

const selectDoctors = (state) => state.doctors;

function Read() {
  const doctors = useSelector(selectDoctors);
  const navigate = useNavigate();
  const renderedListDoctors = doctors.map((item) => {
    return (
      <div key={item.id}>
        <h1>{item.fullName}</h1>
        <p>
          Title: {item.title} <br />
          Address: {item.address}<br />
          Spec: {item.spec}<br />
          Tel: {item.telephone}
        </p>
        <Button variant="contained" onClick={() => navigate(`/edit/${item.id}`)}>
          Link
        </Button>
      </div>

    );
  });

  return <ul>{renderedListDoctors}</ul>;
}


export default Read;