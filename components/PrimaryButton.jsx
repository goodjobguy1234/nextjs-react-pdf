import {Button} from 'react-bootstrap'
import {useEffect, useState} from "react";

function PrimaryButton({text, icon, buttonClassName = "normalButton", onMyButtonClick, disable = false, mRef = null}) {
    const [isDisable, setIsDisable] = useState(disable);
    useEffect(() => {
        setIsDisable(disable)
    }, [disable])

    return (<>
        <Button className={buttonClassName}
                disabled={isDisable}
                ref={mRef}
                onClick={() => {onMyButtonClick() }}>
            <img src={icon} style={{height: "0.6rem"}}/>
            {text}
        </Button>
    </>)
}

export default PrimaryButton;