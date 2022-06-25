import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

const selectDoctors = (state) => state.doctors;

function Add() {

  const doctors = useSelector(selectDoctors);
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [spec, setSpec] = useState("");
  const [telephone, setTelephone] = useState("");

  const onFullNameChanged = (e) => setFullName(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
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
      payload: { fullName, title, address, spec, telephone, id: generateId() }
    });
    setFullName("");
    setTitle("");
    setAddress("");
    setSpec("");
    setTelephone("");
  };

  return (
    <div>
      <form>
        <br />
        <br />
        <label>Imię i nazwisko: </label>

        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder=""
          value={fullName}
          onChange={onFullNameChanged}
        />
        <br />
        <label>Tytuł naukowy: </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder=""
          value={title}
          onChange={onTitleChanged}
        />

        <br />
        <label>Adres: </label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder=""
          value={address}
          onChange={onAddressChanged}
        />

        <br />
        <label>Specjalizacja: </label>
        <input
          type="text"
          id="spec"
          name="spec"
          placeholder=""
          value={spec}
          onChange={onSpecChanged}
        />

        <br />
        <label>Telefon: </label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          placeholder=""
          value={telephone}
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
