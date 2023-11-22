import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-2xl">
        Hi Welcome {user ? user?.displayName : "Back"}
      </h1>
    </div>
  );
};

export default UserHome;
