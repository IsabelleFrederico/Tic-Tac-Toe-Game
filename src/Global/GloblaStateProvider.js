import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import GlobalStateContext from "../Global/GlobalStateContext";
import { listaStudant } from '../Constants/inputs'

const GlobalStateProvider = (props) => {
    const history = useHistory()
    const [partnerChoised, setPartnerChoised] = useState({})
    const [courseData, setCourseData] = useState({})
    const [partnerSelect, setPartnerSelect] = useState(false)
    const [courseChoised, setCourseChoised] = useState('')
    const [requirements, setRequirements] = useState('')
    const [unit, setUnit] = useState('')
    const [checkbox, setCheckbox] = useState([])
    const [dataStudant, setDataStudant] = useState(listaStudant)
    const [currentStudant, setCurrentStudant] = useState({})
    const [step, setStep] = useState(0)
    const [checkRequisits, setCheckRequisits] = useState(false)
    const [checkDeclaration, setCheckDeclaration] = useState(false)
    const [alert, setAlert] = useState(true)



    useEffect(() => {
        checkPartner()
    }, [partnerChoised, courseData, courseChoised, partnerSelect, history, unit, checkbox, alert])

    const checkPartner = () => {
        if (partnerChoised.length > 0) {
            return (partnerChoised, history, unit, checkbox)
        }

    }

    const states = { alert, currentStudant, checkDeclaration, checkRequisits, step, dataStudant, requirements, history, unit, partnerChoised, courseData, courseChoised, partnerSelect, checkbox };
    const setters = { setAlert, setCurrentStudant, setCheckDeclaration, setCheckRequisits, setStep, setDataStudant, setRequirements, setPartnerChoised, setUnit, setCourseData, setCourseChoised, setPartnerSelect, setCheckbox };
    const requests = { };

    const data = { states, setters, requests };

    return (
        <div>
            <GlobalStateContext.Provider value={data}>
                {props.children}
            </GlobalStateContext.Provider>
        </div>
    );
};

export default GlobalStateProvider;