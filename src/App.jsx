import { useState } from "react";

function App() {
  const [stockOeufs, setStockOeufs] = useState(100);
  const [stockPoulets, setStockPoulets] = useState(50);

  return (
    <div style={{
      fontFamily:"Arial",
      background:"#f4f4f4",
      minHeight:"100vh"
    }}>

      <header style={{
        background:"linear-gradient(to right, green, red)",
        color:"white",
        padding:"20px",
        textAlign:"center"
      }}>
        <h1 style={{fontSize:"40px"}}>🐔 SMA AVICOLE</h1>
        <p>Qualité • Croissance • Confiance</p>
      </header>

      <main style={{padding:"20px"}}>

        <section style={{
          background:"white",
          padding:"20px",
          borderRadius:"15px",
          textAlign:"center",
          marginBottom:"20px"
        }}>
          <h2>Commander Facilement</h2>

          <a href="https://wa.me/221773776179?text=Bonjour je veux commander des oeufs">
            <button style={{
              background:"red",
              color:"white",
              padding:"15px",
              margin:"10px",
              border:"none",
              borderRadius:"10px",
              fontSize:"18px"
            }}>
              🥚 Œufs - 2500 FCFA
            </button>
          </a>

          <a href="https://wa.me/221773776179?text=Bonjour je veux commander des poulets">
            <button style={{
              background:"green",
              color:"white",
              padding:"15px",
              margin:"10px",
              border:"none",
              borderRadius:"10px",
              fontSize:"18px"
            }}>
              🍗 Poulets - 2500 FCFA
            </button>
          </a>

          <p>🚚 Livraison disponible</p>
        </section>

        <section style={{
          background:"white",
          padding:"20px",
          borderRadius:"15px"
        }}>
          <h2>Espace Admin</h2>

          <p>Stock Œufs : {stockOeufs}</p>
          <button onClick={() => setStockOeufs(stockOeufs + 10)}>+10 Œufs</button>

          <p style={{marginTop:"15px"}}>Stock Poulets : {stockPoulets}</p>
          <button onClick={() => setStockPoulets(stockPoulets + 5)}>+5 Poulets</button>
        </section>

      </main>

    </div>
  );
}

export default App;