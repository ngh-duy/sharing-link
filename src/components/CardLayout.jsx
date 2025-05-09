const CardLayout = ({ title, description, children }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-500 text-sm mb-6">{description}</p>
      {children}
    </div>
  );
};

export default CardLayout;
