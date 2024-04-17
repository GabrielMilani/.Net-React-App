import React from 'react'
import TitlePage from '../../components/TitlePage'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ClientForm() {
  let history = useHistory();
  let {id} = useParams();

  return (
    <>
    <TitlePage title={'Client Detail ' + (id !== undefined ? id : '')}>
      <Button variant='outline-secondary' onClick={() => history.push(`/client/List`)}>
        <i className='fas fa-angle-left me-2'></i>
        Back
      </Button>
    </TitlePage>
    <div></div>
 </>  
  )
}
