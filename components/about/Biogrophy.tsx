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

const biogrophy: Bio = {
  title: "My Biogrophy",
  description:
    "Aspiring and enthusiastic software engineer developer \
    studies Software Engineering, specializing in FullStack \
    Development. Developed \
    web and mobile applications as both a back-end \
    engineer and a front-end engineer.\
    I truly desire to \
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

export default function Biogrophy() {
  return (
    <div className="flex flex-col gap-[30px] mb-10">
      <h3 className="text-4xl font-bold">{biogrophy.title}</h3>
      <p className="max-w-[600px] text-primary-300 mx-auto xl:mx-0">
        {biogrophy.description}
      </p>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[650px] mx-auto xl:mx-0">
        {biogrophy.info.map((bio, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center xl:justify-start gap-4"
            >
              <span className="text-primary-300">{bio.fieldName}:</span>
              <span className="text-primary-50 font-semibold">{bio.fieldDescription}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
