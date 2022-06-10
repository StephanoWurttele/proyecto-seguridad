import React, {useRef, Fragment, useState} from 'react'

export function PasswordInfo({password}) {
    const passDiv = useRef(0)
    const showButton = useRef(0)
    const [show, setShow]    = useState(true)
    const showPass = () => {
        if(show){
            const MP = prompt('Enter Master Password')
            if(password.password === MP){ // JOHAN Acá hacer la verificación correcta de las contraseñas
                passDiv.current.innerHTML += `<p>${password.password}</p`
                showButton.current.innerHTML = 'Hide password'
            }
            else{
                alert("Wrong Master Password")
            }
        }
        else{
            passDiv.current.innerHTML = ''
            showButton.current.innerHTML = 'Show password'
        }
        setShow(!show)
    }

    return (
        <Fragment>
            <div className="singlePass">
                <div className="passName">
                    <div>{password.passName}</div>
                </div>
                <div className="passInfo">
                    <div>{password.userName}</div>
                    <div ref={passDiv}>
                    </div>
                <button ref={showButton} onClick={showPass}>Show password</button>
                </div>
            </div>
        </Fragment>
    )
}