import trainningPreSignRequestSchema from "@/validation/trainningPreSignRequest";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";

const PreSubscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(trainningPreSignRequestSchema),
  });

  const onPreSignTrainning = async (data) => {
    const res = await axios.post("/api/presign-trainning", data);
    if (res.status === 201) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onPreSignTrainning)}
      className="py-8 flex flex-col items-center"
    >
      <div className="text-3xl font-bold mb-6 font text-center underline decoration-lime-500">
        Pre-inscrire
      </div>
      <div className=" px-4 py-2 form-control w-full max-w-lg flex item-center  ">
        <label className="label">
          <span className="label-text font-semibold">
            Nom du parent{" "}
            <span className="label-text-alt text-red-800 text-lg">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="Entrer votre nom du parent ici..."
          className="input input-bordered input-primary w-full max-w-lg "
          {...register("parentLastName")}
        />
        <p className="text-sm text-red-500 pl-2">
          {errors.parentLastName?.message}
        </p>
      </div>
      <div className=" px-4 py-2 form-control w-full max-w-lg flex item-center  ">
        <label className="label">
          <span className="label-text font-semibold">
            Prenom du parent{" "}
            <span className="label-text-alt text-red-800 text-lg">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="Entrer votre prenom du parent ici..."
          className="input input-bordered input-primary w-full max-w-lg"
          {...register("parentFirstName")}
        />
        <p className="text-sm text-red-500 pl-2">
          {errors.parentFirstName?.message}
        </p>
      </div>
      <div className=" px-4 py-2 form-control w-full max-w-lg flex item-center">
        <label className="label">
          <span className="label-text font-semibold">
            Numéro du téléphone{" "}
            <span className="label-text-alt text-red-800 text-lg">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="Entrer votre numéro du téléphone ici..."
          className="input input-bordered input-primary w-full max-w-lg "
          {...register("phone")}
        />
        <p className="text-sm text-red-500 pl-2">{errors.phone?.message}</p>
      </div>
      <div className=" px-4 py-2 form-control w-full max-w-lg flex item-center">
        <label className="label">
          <span className="label-text font-semibold">
            Catégorie{" "}
            <span className="label-text-alt text-red-800 text-lg">*</span>
          </span>
        </label>
        <select
          className="select select-primary w-full max-w-lg"
          {...register("category")}
        >
          <option disabled selected>
            Selectionner votre catégorie
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <p className="text-sm text-red-500 pl-2">{errors.category?.message}</p>
      </div>
      <div className=" px-4 py-2 form-control w-full max-w-lg flex item-center  ">
        <label className="label">
          <span className="label-text font-semibold">
            Nom du joueur{" "}
            <span className="label-text-alt text-red-800 text-lg">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="Entrer votre nom du joueur ici..."
          className="input input-bordered input-primary w-full max-w-lg "
          {...register("playerLastName")}
        />
        <p className="text-sm text-red-500 pl-2">
          {errors.playerLastName?.message}
        </p>
      </div>
      <div className=" px-4 py-2 form-control w-full max-w-lg flex item-center  ">
        <label className="label">
          <span className="label-text font-semibold">
            Prenom du joueur{" "}
            <span className="label-text-alt text-red-800 text-lg">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="Entrer votre prenom du joueur ici..."
          className="input input-bordered input-primary w-full max-w-lg"
          {...register("playerFirstName")}
        />
        <p className="text-sm text-red-500 pl-2">
          {errors.playerFirstName?.message}
        </p>
      </div>
      <div className="py-4">
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default PreSubscribe;
