import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

export default function ClientForm() {
  let navigate = useNavigate();
  let {id} = useParams();

  return (
    <>
    <TitlePage title={'Client Detail ' + (id !== undefined ? id : '')}>
      <Button variant='outline-secondary' onClick={() => navigate(`/client/List`)}>
        <i className='fas fa-angle-left me-2'></i>
        Back
      </Button>
    </TitlePage>
    <div></div>
 </>  
  )
}
