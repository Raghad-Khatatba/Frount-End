
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json"
import emailAnimation from "../../../public/animation/Email.json"
export default function Contact() {
  const [state, handleSubmit] = useForm("moqooyjg");

  return (
    <section className="countactUs">
      <h1 className='title'>
        <span><i className="fa-solid fa-envelope"></i></span>
        Countact us
      </h1>
      <p className="suptitle">Write me a message and I will respond as soon as possible.</p>
      <div className="flex" style={{justifyContent:"space-between"}}>
        <form action="" onSubmit={handleSubmit}>
          <div  className='flex'>
          <label htmlFor="email">Email Address :</label>
          <input type="email" name='email' id='email'  />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>
          <div className='flex' style={{marginTop:"24px"}}>
          <label htmlFor="message">Your message :</label>
          <textarea name="message" id="message" style={{height:100}}></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>
          <button type="submit" className='submet' disabled={state.submitting} >{state.submitting ? "Submitting..." :"submet"}</button>
          {
          state.succeeded &&(
            <p className='flex' style={{color:"var(--title)",fontSize:"16px",marginTop:"1.7rem"}}>
              <Lottie loop={false} style={{height:37}} animationData={doneAnimation} />
              Your message has been sent successfully, thank you for contacting me.</p>
  )
        }
        </form>

        <div className="animation">
        <Lottie className='contactAnimation' style={{height:355}} animationData={emailAnimation} />
        </div>
      </div>
    </section>
  )
}
