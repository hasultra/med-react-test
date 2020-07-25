import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions/allActions';


const ActionComponent = () => {
    const dispatch = useDispatch()
    const pullAsyncDataFunc = () => {
        dispatch(allActions.getAsyncData())
    }

    return <div>
        <div style={{
            "display": "flex",
            "flexDirection": "row",
            "align-items": "left",
            "justify-content": "left",
            "font-size": "30px", "fontWeight": "bold"
        }} ><span >Cliquez sur le bouton pour charger le nom et le prenom du docteur afin tester l'API:</span> <button onClick={pullAsyncDataFunc} style={{
            "padding": "10px 16px",
            "font-size": "18px",
            "line-height": "1.33",
            "border-radius": "6px",
            "background": "#19aa96",
            "color":" #ffffff"
          }}>Charger</button></div>
    </div>
}

export default ActionComponent;