

const doctor1 = {
  id: 1,
  fullName: "Mariusz Zarajczyk",
  title: "doktor medycyny",
  address: "Warszawa",
  spec: "ortopeda",
  telephone: "111 111 111"
}

const doctor2 = {
  id: 2,
  fullName: "Jarek Sawiniec",
  title: "lekarz",
  address: "Lublin",
  spec: "onkolog",
  telephone: "222 222 222"
}


const initialState = [doctor1, doctor2]

function editDoctor(state, doctor) {
  console.log('doctor: ', doctor, typeof doctor.id);
  const doctors = [...state].filter((d) => d.id !== doctor.id);
  console.log('newDoctors: ', JSON.parse(JSON.stringify(doctors)));
  doctors.push(doctor);
  return doctors;
}

export default function doctorsReducer(state = initialState, action) {
  switch (action.type) {
    case 'doctors/added':
      console.log('add doctor');
      return [...state, action.payload]
    case 'doctors/edit':
      console.log('edit doctor');
      return editDoctor(state, action.payload);


    default:
      return state
  }
}



