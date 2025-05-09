import CardLayout from "./CardLayout";

const CardDetail = () => {
  return (
    <CardLayout
      title="Profile Details"
      description="Add your details to create a personal touch to your profile."
    >
      <div className="flex items-center space-x-6 mb-6">
        <div className="relative w-24 h-24">
          <img
            id="avatarPreview"
            src="https://i.pravatar.cc/100"
            className="w-24 h-24 rounded-lg object-cover"
          />
          <label
            htmlFor="avatarInput"
            className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center rounded-lg cursor-pointer text-sm"
          >
            Change Image
          </label>
          <input id="avatarInput" type="file" className="hidden" accept="image/*" />
        </div>
        <p className="text-xs text-gray-500">
          Image must be below 1024x1024px. Use PNG, JPG, or BMP format.
        </p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First name*</label>
          <input
            type="text"
            placeholder="Ben"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last name*</label>
          <input
            type="text"
            placeholder="Wright"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="ben@example.com"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple text-white rounded-md py-2 hover:bg-purple-700 transition"
        >
          Save
        </button>
      </form>
    </CardLayout>
  );
};

export default CardDetail;
