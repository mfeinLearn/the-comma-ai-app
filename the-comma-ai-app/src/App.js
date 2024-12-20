import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

          <>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/NmBfgOanCyk?si=WkkphgQnRWYKtTxK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </>
          
            <button style={{
                display: 'block',
                margin: 'auto',
                marginTop: '200px',
                backgroundColor: '#04AA6D',
                color: 'white',
                fontFamily: 'Source Sans Pro, sans-serif',
                fontSize: '18px',
                padding: '6px 25px',
                marginTop: '4px',
                borderRadius: '5px',
                wordSpacing: '10px'
            }}>
                Run
            </button>
    </div>
  );
}

export default App;
