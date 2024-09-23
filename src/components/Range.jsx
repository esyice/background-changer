import './range.css'

function Range({color , value , setValue}) {

    const handelChange = (e)=>{
        setValue(e.target.value)
    }

  return (
    <div>
        <input  type="range" min={0} max={255} onChange={handelChange} value={value} className='cursor-pointer'/>
        <br />
        <label>{color}  {value}</label>
    </div>
  )
}

export default Range
