import React from "react";
import { useForm } from "react-hook-form";

const Example = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div id="Contact" style={{borderTop: '3px solid red', marginTop:'50px', marginBottom: '40px'}}>
        <div className="pt-5">
                    <h2>
                        <bold>CONTACT US</bold>
                    </h2>
                    <p>
                        Silahkan isi form ini untuk melakukan pertanyaan dan pemesanan produk kami.
                    </p>
                </div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{width: '80%', margin:'auto'}}>
        <label>Email address</label>
      <input
      class="form-control"
      placeholder="example@test.com"
        name="email"
        ref={register({
          required: "this email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i,
            message: "invalid email address"
          }
        })}
      />
      <div style={{color: 'red', textAlign:'left'}}>
      {errors.email && errors.email.message}
      </div>
      </div>
      <br></br>
      <div style={{width: '80%', margin:'auto'}}>
      <label>Nama Lengkap</label>
      <input
      type="text" class="form-control"
        name="Nama"
        placeholder="Nama Lengkap"
        ref={register({
          required: "this field is required",
        })}
      />
      <div style={{color: 'red', textAlign:'left'}}>
      {errors.Nama && errors.Nama.message}
      </div>
      <br></br>
      </div>
      <div style={{width: '80%', margin:'auto'}}>
      <label>Nomor Telephone</label>
      <input
      type="text" class="form-control"
        name="Phone"
        placeholder="081-xxx-xxx-xxx"
        ref={register({
          required: "this field is required",
          pattern: {
            value: /^[0-9]{10,13}$/i,
            message: "invalid phone number"
          }
        })}
      />
      <div style={{color: 'red', textAlign:'left'}}>
      {errors.Phone && errors.Phone.message}
      </div>
      <br></br>
      </div>
      <div style={{width: '80%', margin:'auto', marginBottom: '30px'}} class="form-group">
        <label for="exampleFormControlTextarea1">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
      </div>
      

      <button type="submit" class="btn btn-outline-primary" style={{width:'80%'}}>Contact us</button>
    </form>
    </div>
    
  );
};
export default Example