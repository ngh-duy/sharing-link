const CardMobile = () => {
    return (
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
  <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800 ">
    <div className="flex flex-col items-center mt-20 mb-4">
      <img
        src="https://i.pravatar.cc/100" 
        alt="Avatar"
        className="w-20 h-20 rounded-full border-4 border-white shadow-md"
      />
      <h2 className="mt-3 text-lg font-semibold text-gray-800 dark:text-white">Nguyễn Hoàng Duy</h2>
    </div>

    <div className="space-y-3 w-60 mx-auto mt-20">
      <a href="#" className="flex items-center justify-between bg-black text-white px-4 py-3 rounded-lg hover:opacity-90">
        <div className="flex items-center space-x-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5" />
          <span>GitHub</span>
        </div>
        <span>➜</span>
      </a>
      <a href="#" className="flex items-center justify-between bg-red-600 text-white px-4 py-3 rounded-lg hover:opacity-90">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6zm12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
          <span>YouTube</span>
        </div>
        <span>➜</span>
      </a>
    </div>
  </div>
</div>

    );
};

export default CardMobile;
