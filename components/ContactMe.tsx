import React from "react";
import { PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
type Inputs = {
  name:string;
  email:string;
  subject:string;
  message:string;
}

type Props = {
  pageInfo:PageInfo;
};

export default function ContactMe({pageInfo}: Props) {
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit:SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:jackienjorogedev@gmail.com?subject=${formData.subject}&body=Hello. <br> My name is ${formData.name}. ${formData.message}
    (${formData.email})`;
  };
  return (
    <div
      className="relative flex xl:h-[800px] h-[1000px] md:h-[1400px] flex-col justify-evenly items-center
    md:text-left md:flex-row max-w-6xl  "
    >
      <h3
        className="uppercase xl:top-[12%] top-[10%] text-gray-500 absolute
       text-sm  xl:text-2xl
        md:text-2xl xl:tracking-[20px] md:tracking-[20px]"
      >
        contact
      </h3>

      <div className="xl:mt-[-30px] mt-[-200px] md:mt-[-400px]">
        <h4 className="xl:text-[30px] md:text-[30px] text-[16px] font-semibold text-center space-y-5">
          I have got the skill set.
          <span
            className="underline
             decoration-[#F7AB]/10"
          >
            {" "}
            Lets Talk
          </span>
        </h4>

        <div className="space-y-3  mt-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB] " />
            <p className="xl:text-2xl md:text-2xl text-[14px]">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 text-[#F7AB] animate-pulse" />
            <p className="xl:text-2xl md:text-2xl text-[14px]">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapIcon className="h-7 w-7 text-[#F7AB] animate-pulse" />
            <p className="xl:text-2xl md:text-2xl text-[14px]">{pageInfo?.address}</p>
          </div>
        </div>
        {/*form*/}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-fit mx-auto mt-5 space-y-2 xl:space-y-2 md:space-y-4 ">
          <div className="xl:space-x-2 xl:space-y-2 space-y-2 md:space-y-4">
            <input {...register('name')} placeholder="Name" type="text" className="contactInput
             xl:w-[49.2%] w-[80%] mx-7 xl:mx-0 md:ml-[10%] "/>
            <input {...register('email')} placeholder="Email" type="email" className="contactInput
             xl:w-[49.2%] w-[80%] mx-7 xl:mx-0 md:ml-[10%]"/>
          </div>
          <input {...register('subject')}  placeholder="Subject" type="text"   className="contactInput 
          xl:w-[100%] w-[80%] mx-7 xl:mx-0 md:ml-[10%]"/>
          <textarea {...register('message')} placeholder="Message"  className="contactInput 
          xl:w-[100%] w-[80%] mx-7 xl:mx-0 md:ml-[10%]"/>
          <button type="submit" className="rounded-md bg-[#F7AB] py-5 font-bold text-lg
           xl:w-[100%] w-[80%] mx-7 xl:mx-0 md:ml-[10%]">Submit</button>
        </form>


      </div>
    </div>
  );
}
