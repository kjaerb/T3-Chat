import Login from "../Login/login";

function Header() {
  return (
    <div className='flex bg-slate-700 w-full p-2 justify-between items-center'>
      <h1 className='text-white'>t3-chat</h1>
      <Login />
    </div>
  );
}

export default Header;
