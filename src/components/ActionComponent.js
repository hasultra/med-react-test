import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../actions/allActions';


const ActionComponent = () => {
    const dispatch = useDispatch()
    const pullAsyncDataFunc = ()=>{
        dispatch(allActions.getAsyncData())
    }
   
    return <div>
       <div><span>Cliquez sur le bouton pour charger le nom et le prenom du docteur afin tester l'API:</span> <button onClick={pullAsyncDataFunc}>Charger</button></div> 
    </div>
}

export default ActionComponent;