import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const selectDoctors = (state) => state.doctors;

function Edit() {
  const doctors = useSelector(selectDoctors);
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [spec, setSpec] = useState("");
  const [telephone, setTelephone] = useState("");
  const { id } = useParams();

  const onFullNameChanged = (e) => setFullName(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAddressChanged = (e) => setAddress(e.target.value);
  const onSpecChanged = (e) => setSpec(e.target.value);
  const onTelephoneChanged = (e) => setTelephone(e.target.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = doctors.find((doctor) => doctor.id === parseInt(id));
    if (!data) return;
    const { fullName, title, address, spec, telephone } = data;
    setFullName(fullName);
    setTitle(title);
    setAddress(address);
    setSpec(spec);
    setTelephone(telephone);
  }, []);

  const onSaveDoctorClicked = () => {
    dispatch({
      type: "doctors/edit",
      payload: { fullName, title, address, spec, telephone, id: parseInt(id) }
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
        <button type="button" onClick={onSaveDoctorClicked}>
          Save Doctor
        </button>
      </form>
    </div>
  );
}

export default Edit;
