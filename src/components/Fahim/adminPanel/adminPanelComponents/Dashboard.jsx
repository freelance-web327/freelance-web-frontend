const Dashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#d9d9d9] p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-3xl">236,005</p>
        </div>
        <div className="bg-[#d9d9d9] p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Total Complaints</h3>
          <p className="text-3xl">100</p>
        </div>
        <div className="bg-[#d9d9d9] p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Payments Pending</h3>
          <p className="text-3xl">65</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
