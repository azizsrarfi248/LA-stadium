/**
 * @module tournament/team-info
 * @exports TeamInfo
 * @description This is the team info component
 * @example
 * import TeamInfo from '@/components/tournament/team-info'
 * <TeamInfo />
 */
const TeamInfo = () => {
  return (
    <div className="min-w-[450px] bg-white p-8 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 font text-center underline decoration-sky-500">
        Formulaire De Tournoi
      </h2>
      <div className="py-16">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2 text-center"
            htmlFor="name"
          >
            Nom D'Equipe
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              className="w-full text-center py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              type="text"
              id="Nom D'Equipe"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Nom du capitain
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              type="text"
              id="Nom D'Equipe"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block font-semibold text-gray-700" htmlFor="phone">
            Phone Number
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
              placeholder="Enter your phone number"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm"> 8 digits </span>
            </div>
          </div>
        </div>
        <div>
          <div className="form-control mt-8">
            <label className="cursor-pointer label space-x-2">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text font-semibold">
                Vous êtes responsable de tout désordre causé par votre équipe
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
