import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

const selectDoctors = (state) => state.doctors;

function Add() {

  const doctors = useSelector(selectDoctors);
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [specialization, setSpec] = useState("");
  const [tel, setTelephone] = useState("");

  const onEmailChanged = (e) => setEmail(e.target.value);
  const onTitleChanged = (e) => setFirst_name(e.target.value);
  const onAddressChanged = (e) => setLast_name(e.target.value);
  const onSpecChanged = (e) => setSpec(e.target.value);
  const onTelephoneChanged = (e) => setTelephone(e.target.value);

  const dispatch = useDispatch();

  const generateId = () => {
    let id = 0;
    doctors.forEach((doctor) => {
      if (doctor.id > id) { id = doctor.id }
    });
    id = id + 1;
    console.log('generated id: ', id);
    return id;
  }


  const onSaveDoctorClicked = () => {
    dispatch({
      type: "doctors/added",
      payload: { email, first_name, last_name, specialization, tel, id: generateId() }
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
        <label>Email: </label>

        <input
          type="text"
          id="email"
          name="email"
          placeholder=""
          value={email}
          onChange={onEmailChanged}
        />
        <br />
        <label>Imię: </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          placeholder=""
          value={first_name}
          onChange={onTitleChanged}
        />

        <br />
        <label>Nazwisko: </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          placeholder=""
          value={last_name}
          onChange={onAddressChanged}
        />

        <br />
        <label>Specjalizacja: </label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          placeholder=""
          value={specialization}
          onChange={onSpecChanged}
        />

        <br />
        <label>Telefon: </label>
        <input
          type="text"
          id="tel"
          name="tel"
          placeholder=""
          value={tel}
          onChange={onTelephoneChanged}
        />

        <br />
        <br />

        <Button variant="contained" onClick={onSaveDoctorClicked}>Save Doctor</Button>

      </form>
    </div>
  );
}

export default Add;
