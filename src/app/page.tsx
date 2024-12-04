import { signOut } from "./login/actions";

export default function Home() {
  return (
    <>
      <div>main</div>
      <button onClick={signOut}>signout</button>
    </>
  );
}
