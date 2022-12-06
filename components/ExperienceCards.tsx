import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCards({}: Props) {
  return (
    <article
      className="flex flex-col  rounded-lg space-y-7 flex-shrink-0
  snap-center p-10 bg-[#292929]  cursor-pointer transition:opacity duration-200
  overflow-hidden w-[420px] mt-40 xl:w-[560px] md:w-[792px]  "
    >
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"
        className="h-28 w-28 rounded-full object-cover xl:w-[140px] xl:h-[140px] object-center mx-28
        md:mx-[300px] xl:mx-[50px]"
      />

      <div className=" md:mx-[50px] md:flex-wrap xl:flex-wrap ml-10  flex-wrap">
        {/*Company name i worked for*/}
        <h4 className=" md:text-2xl xl:text-2xl text-sm  ">LinkedIn</h4>
        <p className="text-[#F7AB]">Product designer</p>
        {/**Start and end dates of working for that company */}
        <p className="uppercase py-3 text-sm text-gray-300">
          Started on.... ended on...
        </p>
        {/**Tech used in that company i worked for */}
        <div className="flex space-x-2 my-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PD2yAr4Tt4TG62BatFqSltJmYLO1_DFUqA&usqp=CAU"
            className="h-10 w-10 rounded-full object-cover"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PD2yAr4Tt4TG62BatFqSltJmYLO1_DFUqA&usqp=CAU"
            className="h-10 w-10 rounded-full object-cover"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2PD2yAr4Tt4TG62BatFqSltJmYLO1_DFUqA&usqp=CAU"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        <ul className="list-disc space-y-4 ml-5 xl:text-lg md:text:lg text-sm flex-wrap">
          <li>Summary points</li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
          <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
        </ul>
      </div>
    </article>
  );
}
