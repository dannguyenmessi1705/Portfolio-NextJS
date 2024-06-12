export default function Biography({ biography }: { biography: any }) {
  return (
    <div className="mb-10 flex flex-col gap-[30px]">
      <h3 className="text-4xl font-bold">{biography.title}</h3>
      <p className="mx-auto max-w-[600px] text-primary-300 xl:mx-0">
        {biography.description}
      </p>
      <ul className="mx-auto grid max-w-[650px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
        {biography.info.map((bio: any, index: number) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center gap-4 xl:justify-start"
            >
              <span className="text-primary-300">{bio.fieldName}:</span>
              <span className="font-semibold text-primary-50">
                {bio.fieldDescription}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
