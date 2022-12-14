import React from "react";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name:string;
  email:string;
  subject:string;
  message:string;
}

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:jackienjorogedev@gmail.com?subject=${formData.subject}&body=Hello. <br> My name is ${formData.name}. ${formData.message}
    (${formData.email})`;
  };
  return (
    <div
      className="relative flex h-[800px] flex-col justify-evenly items-center
    md:text-left md:flex-row max-w-6xl  "
    >
      <h3
        className="uppercase top-20 text-gray-500 absolute
       text-sm  xl:text-2xl
        md:text-2xl xl:tracking-[20px] md:tracking-[20px]"
      >
        contact
      </h3>

      <div className="mt-[-30px]">
        <h4 className="text-3xl font-semibold text-center space-y-5">
          I have got the skill set.
          <span
            className="underline
             decoration-[#F7AB]/10"
          >
            {" "}
            Let's Talk
          </span>
        </h4>

        <div className="space-y-3  mt-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB] " />
            <p className="text-2xl">+254789334823</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 text-[#F7AB] animate-pulse" />
            <p className="text-2xl">jackienjorogedev@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="h-7 w-7 text-[#F7AB] animate-pulse" />
            <p className="text-2xl">5th St Kasarani</p>
          </div>
        </div>
        {/*form*/}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto mt-5">
          <div className="space-x-2">
            <input {...register('name')} placeholder="Name" type="text" className="contactInput"/>
            <input {...register('email')} placeholder="Email" type="email" className="contactInput"/>
          </div>
          <input {...register('subject')}  placeholder="Subject" type="text"   className="contactInput"/>
          <textarea {...register('message')} placeholder="Message"  className="contactInput"/>
          <button type="submit" className="rounded-md bg-[#F7AB] py-5 font-bold text-lg">Submit</button>
        </form>


      </div>
    </div>
  );
}
