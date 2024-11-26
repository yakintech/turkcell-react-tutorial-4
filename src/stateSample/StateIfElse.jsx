import React, { useState } from 'react'

function StateIfElse() {

    const [toggle, settoggle] = useState(true)

  return <>
        <button onClick={() => settoggle(!toggle)}>Show-Hide</button>
        <hr />
        {
            toggle == true ? <div style={{width:400, height:400, borderStyle:'solid', backgroundColor:'tomato'}}></div> : <></>
        }
  </>
}

export default StateIfElse