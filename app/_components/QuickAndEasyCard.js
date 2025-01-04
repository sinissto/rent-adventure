function QuickAndEasyCard({ icon, title, text }) {
  return (
    <div className="max-w-80 bg-primary-50 px-8 py-12 flex-1 shadow-2xl rounded-md flex flex-col items-center">
      <div className={"bg-white p-4 rounded-full mb-8"}>{icon}</div>
      <h3 className={"text-3xl font-semibold text-center mb-4"}>{title}</h3>
      <p className={"text-xl text-center"}>{text}</p>
    </div>
  );
}

export default QuickAndEasyCard;
