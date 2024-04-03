import { useState } from "react";
import TextField from "./TextField";
import Dailog from "./Dailog";

const LoanForm = () => {
  const [forms, setForms] = useState({
    name: "",
    PhoneNumber: "",
    age: "",
    cheked: false,
    salary: "",
  });

  console.log();

  const [open, setOpen] = useState(false);
  const [errorMassigin,setErrorMassigin] = useState({error:"",color:""})
  const handelSubmit = (even) => {
      even.preventDefault()

      if(forms.PhoneNumber.length < 9 || forms.PhoneNumber.length > 12){
        setErrorMassigin({error:"phone Number Format Is Incorrect ",color:"rgb(153 27 27 / 1)"})
      }
      else if(forms.age < 18 || forms.age > 100){
        setErrorMassigin({error:" the age is not allowed",color:"rgb(153 27 27 / 1)"})
      }
      else
      {
        setErrorMassigin({error:'the Form Has Been subnitted Successfully',color:"rgb(21 128 61 /1)"})
      }

      setOpen(true)
  };


  const  Disableds = forms.name == "" || forms.age == "" || forms.PhoneNumber == ""
  
  return (
    <>
    <section className=" w-[750px] h-screen  md:h-auto  bg-[#f9fafe] px-10 py-6 rounded-lg ">
      <form action=""  className="">
        <div className=" flex flex-col gap-5 ">
          <h1 className="text-center font-medium text-3xl text-color text-[#666e75]">
            Requesting a loan
          </h1>

          <TextField
            name="name"
            type="text"
            value={forms.name}
            labelName="Name"
            placeholder="Name"
            handleChange={(e) => {
              setForms({ ...forms, name: e.target.value });
            }}
            required={true}
          />

          <TextField
            name="phoneNumber"
            type="text"
            value={forms.PhoneNumber}
            labelName="PhoneNumber"
            placeholder="phoneNumber"
            handleChange={(e) => {
              setForms({ ...forms, PhoneNumber: e.target.value });
            }}
            required={true}
          />


          <TextField
            name="age"
            type="text"
            value={forms.age}
            labelName="age :"
            placeholder="age"
            handleChange={(e) => {
              setForms({ ...forms, age: e.target.value });
            }}
            required={true}
          />


          <TextField
            name="checkd"
            type="checkbox"
            checked={forms.cheked}
            labelName="Are you an employee"
            handleChange={(e) => {
              setForms({ ...forms, cheked: e.target.checked });
            }}
            coustmStyle='w-5 h-5'
            coustmStylabel='text-center'
            required={false}
          />


          <div>
            <label className="text-center text-sm font-medium text-gray-900 block">
              Salary
            </label>
            <select
              onChange={(e) => {
                setForms({ ...forms, salary: e.target.value });
              }}
              name="Salary"
              id=""
              className="bg-gray-50 border-gray-300 border-2 text-gray-900 text-sm rounded-lg
             focus:ring-[#4649ff] focus:border-[#4649ff] outline-none w-full p-3"
            >
              <option value={"500"}>less than 500$</option>
              <option value={"1250"}>between 500$ and 2000$</option>
              <option value={"2000"}>above 2000$</option>
            </select>
          </div>

          <div className=" text-center">
            <button
              onClick={handelSubmit}
              type="submit"
              className={`${Disableds? `bg-slate-600`: `bg-green-700`} w-full sm:w-auto font-medium text-sm text-white py-3 px-5 rounded-md`}
              disabled={Disableds}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
    <Dailog open={open} setOpen={setOpen} ERROR={errorMassigin}/>
    </>
  );
};

export default LoanForm;
