import React from "react";
/**
 * Renders a form for entering player names.
 * The form includes six input fields for entering player names.
 * The component returns the entered player names when the form is submitted.
 */
const PlayersInfo = () => {
  return (
    <div className="min-w-[450px] bg-white p-8 border border-gray-300 rounded-md shadow-md">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 font text-center underline decoration-sky-500">
        Membres de l'équipe
      </h2>
      <div className="py-16">
        {/* Player 0 & 1 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            {/* Label for player 0 */}
            <label
              htmlFor="Joueur0"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom du joueur 0
            </label>
            {/* Input for player 0 */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
                id="Joueur0"
                name="name"
                placeholder="Entrez le nom"
                required
              />
            </div>
          </div>
          <div>
            {/* Label for player 1 */}
            <label
              htmlFor="Joueur1"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom du joueur 1
            </label>
            {/* Input for player 1 */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
                id="Joueur1"
                name="name"
                placeholder="Entrez le nom"
                required
              />
            </div>
          </div>
        </div>
        {/* Player 2 & 3 */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            {/* Label for player 2 */}
            <label
              htmlFor="Joueur2"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom du joueur 2
            </label>
            {/* Input for player 2 */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
                id="Joueur2"
                name="name"
                placeholder="Entrez le nom"
                required
              />
            </div>
          </div>
          <div>
            {/* Label for player 3 */}
            <label
              htmlFor="Joueur3"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom du joueur 3
            </label>
            {/* Input for player 3 */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
                id="Joueur3"
                name="name"
                placeholder="Entrez le nom"
                required
              />
            </div>
          </div>
        </div>
        {/* Player 4 & 5 */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            {/* Label for player 4 */}
            <label
              htmlFor="Joueur4"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom du joueur 4
            </label>
            {/* Input for player 4 */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
                id="Joueur4"
                name="name"
                placeholder="Entrez le nom"
                required
              />
            </div>
          </div>
          <div>
            {/* Label for player 5 */}
            <label
              htmlFor="Joueur5"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nom du joueur 5
            </label>
            {/* Input for player 5 */}
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                type="text"
                id="Joueur5"
                name="name"
                placeholder="Entrez le nom"
                required
              />
            </div>
          </div>
        </div>
        {/* Submit button */}
        <div className="py-8 flex justify-center">
          <button className="btn btn-primary px-8 py-2" type="submit">
            Soumettre
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayersInfo;
