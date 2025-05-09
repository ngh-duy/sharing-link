import { useState } from "react";
import Header from "./header";
import CardMobile from "./cardMobie";
import CardContent from "./cardContent";
import CardDetail from "./cardDetail";
import CardProfile from "./cardProfile"; // ✅ import mới

const Layout = () => {
  const [activeTab, setActiveTab] = useState("links");

  // ✅ Nếu là chế độ preview, hiển thị toàn bộ CardProfile
  if (activeTab === "preview") {
    return <CardProfile onBack={() => setActiveTab("links")} />;
  }

  const renderRightComponent = () => {
    if (activeTab === "details") return <CardDetail />;
    return <CardContent />;
  };

  return (
    <div className="grid grid-cols-5 grid-rows-[auto_1fr_1fr_1fr_1fr] gap-4 min-h-screen">
      <div className="col-span-5">
        <Header onTabChange={setActiveTab} />
      </div>
      <div className="col-span-2 row-span-4 row-start-2">
        <CardMobile />
      </div>
      <div className="col-span-3 row-span-4 col-start-3 row-start-2">
        {renderRightComponent()}
      </div>
    </div>
  );
};

export default Layout;
