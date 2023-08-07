import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { UserExpense } from "./components/UserExpense";
import { Transactionlist } from "./components/Transactionlist";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/Globalstate";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <UserExpense/>
        <Transactionlist />
        <AddTransaction/>

      </div>
      </GlobalProvider>
  );
}

export default App;
