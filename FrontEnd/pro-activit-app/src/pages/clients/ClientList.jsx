import React, { useState } from 'react'
import TitlePage from '../../components/TitlePage'
import {Button, FormControl, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const clients =[
   {
      id: 1,
      name: 'Microsoft',
      responsible: 'Otto',
      contact: 10665544,
      status: 'Active'
   },
   {
      id: 2,
      name: 'Amazon',
      responsible: 'Mia',
      contact: 55887744,
      status: 'Active'
   },
   {
      id: 3,
      name: 'Google',
      responsible: 'Rick',
      contact: 55336645,
      status: 'Active'
   },
   {
      id: 4,
      name: 'Facebook',
      responsible: 'Jack',
      contact: 66558844,
      status: 'Active'
   },
   {
      id: 5,
      name: 'Twitter',
      responsible: 'Ellon Musck',
      contact: 55336644,
      status: 'Active'
   }
]

export default function ClientList() {
   const navigate = useNavigate();
   const [termSearsh, setTermSearsh] = useState('');
   
   const handleInputChange = (e) => {
      setTermSearsh(e.target.value);
   };
   const clientFiltered = clients.filter((client) => {
      return (
          Object.values(client).join(' ').toLowerCase().includes(termSearsh.toLowerCase())
      );
   });

   const newClient = () => {
      navigate('/client/detail');
   }

   return (
      <>
         <TitlePage title='Client List'> 
            <Button variant='outline-secondary' onClick={newClient}>
               <i className='fas fa-plus me-2'></i>
               New Client
            </Button>
         </TitlePage>
         <InputGroup className='mt-3 mb-3'>
            <InputGroup.Text>Searsh:</InputGroup.Text>
            <FormControl
               onChange={handleInputChange}
               placeholder='Searsh'
            />
         </InputGroup>

         <table className="table table-striped table-hover">
            <thead className='table-dark mt-3'>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">name</th>
                  <th scope="col">responsible</th>
                  <th scope="col">contact</th>
                  <th scope="col">status</th>
                  <th scope="col">options</th>
               </tr>
            </thead>
            <tbody>
               {clientFiltered.map((client) => (
               <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.responsible}</td>
                  <td>{client.contact}</td>
                  <td>{client.status}</td>
                  <td>
                     <div>
                        <button className="btn btn-sm btn-outline-primary me-2" 
                                onClick={() => navigate(`/client/detail/${client.id}`)}>
                           <i className='fas fa-user-edit me-2'></i>
                           Edit
                        </button>
                        <button className="btn btn-sm btn-outline-danger me-2">
                           <i className='fas fa-user-times me-2'></i>
                           Desactive
                        </button>
                     </div>
                  </td>
               </tr>
               ))}
            </tbody>
         </table>
     </>   
   )
}
