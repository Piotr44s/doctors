import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'





function Edit() {
  const [fullName, setFullName] = useState("");

  const onFullNameChanged = (e) => setFullName(e.target.value);

  const dispatch = useDispatch()

  const onSaveDoctorClicked = () => {
    dispatch({ type: "doctors/added", payload: fullName });
    setFullName("");


  };





  return (
    <div>

      <h3> Tytuł naukowy: dr. n. med</h3>
      <h3> Adres: ul. Ogrodowa 32, 20-215 Lublin</h3>
      <h3> Specjalizacja: ortopedia</h3>
      <h3> Telefon: 666 777 888</h3>

      <form>
        <label >Imię i nazwisko:</label>

        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Jacek Karski"
          value={fullName}
          onChange={onFullNameChanged}
        />



        <button type="button" onClick={onSaveDoctorClicked} >
          Save Doctor
        </button>
      </form>



    </div>
  );
}

export default Edit