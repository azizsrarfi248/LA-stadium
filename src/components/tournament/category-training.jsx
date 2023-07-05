const CategoryTraining = ({ category, age, time, tarif }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-md py-10 space-y-8 ">
      <h2 className=" text-center text-3xl font-bold">{category}</h2>
      <div className="flex flex-col px-8 gap-4">
        <p className="border border-amber-500 rounded-md px-4 py-2 ">
          <span className="font-semibold">age : </span> {age}
        </p>
        <p className="border border-amber-500 rounded-md px-4 py-2">
          <span className="font-semibold">durée : </span>
          {time}
        </p>
        <p className=" border-amber-500 rounded-md border px-4 py-2">
          <span className="font-semibold">tarif : </span> {tarif}
        </p>
      </div>
    </div>
  );
};

export default CategoryTraining;
