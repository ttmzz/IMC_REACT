import { useState } from 'react'
import './App.css'

function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const pesoNum = parseFloat(peso)
  const alturaNum = parseFloat(altura)

  let imc = 0

  if (pesoNum > 0 && alturaNum > 0) {
    imc = pesoNum / (alturaNum * alturaNum)
  }

  return (
    <>
      <main className='container mt-5 p-5 text-center d-flex flex-column align-items-center'>
        
        <form style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="mb-4 fw-bold fst-italic">Cálculo de IMC</h2>
          
          <div className='mb-4 d-flex flex-column align-items-center'>
            <label className='form-label fw-bold'>Peso (kg)</label>
            <input 
              className='form-control text-center input-borda-inferior' 
              type="number" name="peso" placeholder='Ex: 75'
              value={peso} onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <div className='mb-4 d-flex flex-column align-items-center'>
            <label className='form-label fw-bold'>Altura (m)</label>
            <input 
              className='form-control text-center input-borda-inferior' 
              type="number" name="altura" placeholder='Ex: 1.75' 
              value={altura} onChange={(e) => setAltura(e.target.value)}
            />
          </div>
        </form>

        {/* Mostra o resultado na tela apenas se o cálculo for válido */}
        {imc > 0 && (
          <div className="alert alert-primary mt-4 w-100" style={{ maxWidth: '400px' }}>
            <h4>Seu IMC é: <strong>{imc.toFixed(2)}</strong></h4>
          </div>
        )}
         
       </main>
    </>
  )
}

export default App
