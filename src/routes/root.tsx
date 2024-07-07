import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";

export const Root = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <LogoutButton />
          <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        </>
      ) : (
        <>
          <LoginButton />
          <p>Not Authenticated</p>
        </>
      )}
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/page1`}>Page 1</a>
            </li>
            <li>
              <a href={`/page2`}>Page 2</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};
