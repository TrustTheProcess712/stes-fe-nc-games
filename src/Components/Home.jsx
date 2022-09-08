import Profile from "./Profile";

const Home = () => {
  return (
    <section>
      <h2 className="home">Welcome</h2>
      <Profile />
      <h5 className="welcomemessage">
        Feel free to browse our game reviews, you can select review categories,
        sort the reviews, up vote and down vote them or comment on previous
        reviews youself. Have Fun!
      </h5>
    </section>
  );
};

export default Home;
