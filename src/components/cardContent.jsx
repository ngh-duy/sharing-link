import CardLayout from "./CardLayout";

const CardContent = () => {
  return (
    <CardLayout
      title="Customize your links"
      description="Add/edit/remove links below and then share all your profiles with the world!"
    >
      <button className="w-full border border-dashed border-purple-500 text-purple-600 font-medium py-2 rounded mb-6 hover:bg-purple-50">
        + Add new link
      </button>

      {[1, 2].map((index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 relative">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-700 font-medium">Link #{index}</span>
            <button className="text-red-500 hover:underline">Remove</button>
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
          <select className="w-full border rounded px-3 py-2 mb-4">
            <option>GitHub</option>
            <option selected={index === 2}>YouTube</option>
            <option>Instagram</option>
            <option>LinkedIn</option>
          </select>
          <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
          <input
            type="url"
            className="w-full border rounded px-3 py-2"
            value={index === 1 ? "https://www.github.com/benwright" : "https://www.youtube.com/benwright"}
          />
        </div>
      ))}

      <div className="text-right">
        <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-purple-700">Save</button>
      </div>
    </CardLayout>
  );
};

export default CardContent;
