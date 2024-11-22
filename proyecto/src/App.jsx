import { useState } from 'react'


function App() {


  const [tesoro, setTesoro] = useState(Math.floor(Math.random()*25));
  const [value, setValue] = useState(Array(25).fill(null));
  const election = (key) => {
    let array2 = [...value]
    if(tesoro-1==key){
      array2[key]="𝔛"
      {
        Swal.fire({
          title: "¡Encontraste el tesoro! Felicidades",
          text: "GG",
          imageUrl: "https://i.pinimg.com/originals/cf/df/f7/cfdff7af939d9bfd57806456bc7e2297.jpg",
          imageWidth: 400,
          imageHeight: 200,
        });
          }
    }
    else{
      array2[key]="𝔒"
    }
    setValue(array2);
    console.log(array2);
    console.log(tesoro);
}

  return (
    <>
      <h1 className='peace'>▀▄▀▄▀▄𝔅ú𝔰𝔮𝔲𝔢𝔡𝔞 𝔡𝔢𝔩 𝔗𝔢𝔰𝔬𝔯𝔬▄▀▄▀▄▀</h1>
      <h6 className='diamond'>𝔒 significa que no encontraste nada</h6>
      <div className='container'>
        <div key={0} onClick={() => election(0)} className='fila'>{value[0]}</div>
        <div key={1} onClick={() => election(1)} className='fila'>{value[1]}</div>
        <div key={2} onClick={() => election(2)} className='fila'>{value[2]}</div>
        <div key={3} onClick={() => election(3)} className='fila'>{value[3]}</div>
        <div key={4} onClick={() => election(4)} className='fila'>{value[4]}</div>
        <div key={5} onClick={() => election(5)} className='fila'>{value[5]}</div>
        <div key={6} onClick={() => election(6)} className='fila'>{value[6]}</div>
        <div key={7} onClick={() => election(7)} className='fila'>{value[7]}</div>
        <div key={8} onClick={() => election(8)} className='fila'>{value[8]}</div>
        <div key={9} onClick={() => election(9)} className='fila'>{value[9]}</div>
        <div key={10} onClick={() => election(10)} className='fila'>{value[10]}</div>
        <div key={11} onClick={() => election(11)} className='fila'>{value[11]}</div>
        <div key={12} onClick={() => election(12)} className='fila'>{value[12]}</div>
        <div key={13} onClick={() => election(13)} className='fila'>{value[13]}</div>
        <div key={14} onClick={() => election(14)} className='fila'>{value[14]}</div>
        <div key={15} onClick={() => election(15)} className='fila'>{value[15]}</div>
        <div key={16} onClick={() => election(16)} className='fila'>{value[16]}</div>
        <div key={17} onClick={() => election(17)} className='fila'>{value[17]}</div>
        <div key={18} onClick={() => election(18)} className='fila'>{value[18]}</div>
        <div key={19} onClick={() => election(19)} className='fila'>{value[19]}</div>
        <div key={20} onClick={() => election(20)} className='fila'>{value[20]}</div>
        <div key={21} onClick={() => election(21)} className='fila'>{value[21]}</div>
        <div key={22} onClick={() => election(22)} className='fila'>{value[22]}</div>
        <div key={23} onClick={() => election(23)} className='fila'>{value[23]}</div>
        <div key={24} onClick={() => election(24)} className='fila'>{value[24]}</div>
      </div>
      <button className='reset'>Reiniciar</button>
    </>
  )
}

export default App