import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { TextField } from '@mui/material';

const selectDoctors = (state) => state.doctors;

function Edit() {
  const doctors = useSelector(selectDoctors);
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [specialization, setSpec] = useState("");
  const [tel, setTelephone] = useState("");
  const { id } = useParams();

  const onEmailChanged = (e) => setEmail(e.target.value);
  const onFirst_nameChanged = (e) => setFirst_name(e.target.value);
  const onLast_nameChagned = (e) => setLast_name(e.target.value);
  const onSpecChanged = (e) => setSpec(e.target.value);
  const onTelephoneChanged = (e) => setTelephone(e.target.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = doctors.find((doctor) => doctor.id === parseInt(id));
    if (!data) return;
    const { email, first_name, last_name, specialization, tel } = data;
    setEmail(email);
    setFirst_name(first_name);
    setLast_name(last_name);
    setSpec(specialization);
    setTelephone(tel);
  }, []);

  const onSaveDoctorClicked = () => {
    dispatch({
      type: "doctors/edit",
      payload: { email, first_name, last_name, specialization, tel, id: parseInt(id) }
    });
    setEmail("");
    setFirst_name("");
    setLast_name("");
    setSpec("");
    setTelephone("");
  };

  return (
    <div>
      <form>
        <br />
        <br />
        <TextField label="Email" variant="outlined"
          value={email}
          onChange={onEmailChanged}
          size="small"
        />

        <br />

        <TextField label="Imię" variant="outlined"
          value={first_name}
          onChange={onFirst_nameChanged}
          size="small"
        />

        <br />
        <TextField label="Nazwisko" variant="outlined"
          value={last_name}
          onChange={onLast_nameChagned}
          size="small"
        />


        <br />
        <TextField label="Specjalizacja" variant="outlined"
          value={specialization}
          onChange={onSpecChanged}
          size="small"
        />

        <br />
        <TextField label="Telefon" variant="outlined"
          value={tel}
          onChange={onTelephoneChanged}
          size="small"
        />


        <br />
        <br />

        <Button variant="contained" onClick={onSaveDoctorClicked}>Save Doctor</Button>

      </form>
    </div>
  );
}

export default Edit;
