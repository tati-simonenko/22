import React from "react";
import { Table, Button, Container, Row, Col } from 'react-bootstrap';


const TraningItem = ({item, onClickDelete, onClickEdit}) => {
    const {id, ...data} = item;

    return(
        <tr>
            {Object.entries(data).map( (obj, index) => {
                return <td key={index}>{obj[1]}</td> 
            })}
            <td>
                <Button 
                    className="material-icons" 
                    variant="light"
                    onClick={()=>{onClickEdit(id)}}
                >
                    edit
                </Button>
                <Button 
                    className="material-icons" 
                    variant="light"
                    onClick={()=>{onClickDelete(id)}}
                >
                    clear
                </Button>
            </td>
        </tr>
    )
}


const TraningList = ({training, onClickDelete, onClickEdit}) => {
    const headers = ["Дата (ДД.ММ.ГГ)", "Пройдено км", "Действия"]

    return(
        <Container>
            <Row>
                <Col xs={8}>
                    {training.length > 0
                        ?   <Table className="mt-5">
                                <thead>
                                    <tr>
                                        {headers.map( (item, i) => {
                                            return <th key={i}>{item}</th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {training.map( (item) => {
                                        return (
                                            <TraningItem 
                                                item={item} 
                                                key={item.id}
                                                onClickEdit={onClickEdit}
                                                onClickDelete={onClickDelete}
                                            />
                                        )
                                    })}
                                </tbody>
                            </Table>
                        :   <p>Записей нету</p>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default TraningList;