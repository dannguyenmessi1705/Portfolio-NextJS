"use client";
type Info = {
  fieldName: string;
  fieldDescription: string;
};
type Bio = {
  title: string;
  description: string;
  info: Info[];
};

const biology: Bio = {
  title: "My Biology",
  description:
    "Aspiring and enthusiastic software engineer developer \
    studies Software Engineering, specializing in Web \
    Development and Software Development. Developed \
    web and mobile applications as both a back-end \
    engineer and a front-end engineer. Strong skills in \
    Javascript, Java, C++, HTML, CSS, and Node JS. \
    I also want to find a suitable opportunity for my passion: \
    Software Developer. Moreover, I truly desire to \
    experience and learn from real-world challenges to \
    grow myself more and to become a senior in this field.",
  info: [
    {
      fieldName: "Name",
      fieldDescription: "Di Dan Nguyen",
    },
    {
      fieldName: "Phone",
      fieldDescription: "(+84) 345 221 946",
    },
    {
      fieldName: "Nationality",
      fieldDescription: "Vietnamese",
    },
    {
      fieldName: "Address",
      fieldDescription: "Ha Dong, Hanoi, Vietnam",
    },
    {
      fieldName: "Date of Birth",
      fieldDescription: "17th May 2002",
    },
    {
      fieldName: "Languages",
      fieldDescription: "Vietnamese, English",
    },
  ],
};


export default function Biology() {
  return (
    <div>Biology</div>
  )
}
