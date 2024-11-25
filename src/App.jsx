import UserDetail from "./propSample/UserDetail";

function App() {

  let address = {
    street:"Vişnezade mah.",
    region:"Beşiktaş",
    no:11,
    city:"İstanbul"
  }


  const hello = () => {
    alert("Hi")
  }

  return <>
    <UserDetail name="Çağatay" surname="Yıldız" age={18} address={address} hello={hello} />
  </>
}

export default App;
