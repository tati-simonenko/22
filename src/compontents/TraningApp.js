import React, { useState } from "react";
import { nanoid } from 'nanoid'
import TraningForm from "./TraningForm"
import TraningList from "./TraningList"


const TraningApp = () => {
    const [training, setTraining] = useState([])
    const [editObj, setEditObj] = useState()

    const getObjFromId = id => {
        return training.filter(item => id == item.id)[0]
    }

    const getObjFromDate = date => {
        const array = training.filter(item => date == item.date)
        if (array)
            return array[0]
        return;
    }

    const EditObj = obj => {
        setTraining(prevTraining => prevTraining.map( item => {
            if (item.id == obj.id)
                return {...prevTraining, date:obj.date, passed:obj.passed}
            return item
        }))
    }

    const onDelete = id => {
        setTraining(prevTraning => prevTraning.filter(item => item.id !== id))
    }

    const onClickEdit = id => {
        const obj = getObjFromId(id)
        setEditObj(obj)
    }

    const onAdd = data => {
        const obj = getObjFromDate(data.date)
        if (obj){
            obj['passed'] = obj['passed'] + data['passed']
            setTraining(prevTraining => prevTraining.map( item => {
                if (item.id == obj.id){
                    return {...obj}
                }
                return item
            }))
        }
        else{
            data["id"] = nanoid()
            setTraining(prevTraining => ([...prevTraining, data]))
        }
    }

    return(
        <>
            <TraningForm 
                obj={editObj}
                onAdd={onAdd}
                onEdit={EditObj}
            />
            <TraningList 
                training={training}
                onClickDelete={onDelete}
                onClickEdit={onClickEdit}
            />
        </>
    )
}

export default TraningApp;