import DashboardMain from "./components/DashboardMain/DashboardMain";
import DashboardPayment from "./components/DashboardPayment/DashboardPayment";
import MainCategory from "./components/MainCategory";

export default function Home() {
  return (
    <main className="flex">
      <MainCategory />
      <DashboardMain />
      <DashboardPayment />
    </main>
  );
}
