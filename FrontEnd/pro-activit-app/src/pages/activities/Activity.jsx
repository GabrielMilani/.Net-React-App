import { useState, useEffect } from 'react';
import {Button, Modal} from 'react-bootstrap';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';
import api from '../../api/activity';
import TitlePage from '../../components/TitlePage';

export default function Activity() {
    const [showActivityModal, setShowActivityModal] = useState(false);
    const [smShowConfirmModal, setSmShowConfirmModal] = useState(false);

    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState({ id: 0 });

    const handleActivityModal = () => setShowActivityModal(!showActivityModal);

    const handleConfirmModal = (id) => {
        if (id !== 0 && id !== undefined) {
            const activity = activities.filter(
                (activity) => activity.id === id
            );
            setActivity(activity[0]);
        } else {
            setActivity({ id: 0 });
        }
        setSmShowConfirmModal(!smShowConfirmModal);
    };

    const getAllActivities = async () => {
        const response = await api.get('activities');
        return response.data;
    };

    const newActivity = () => {
        setActivity({ id: 0 });
        handleActivityModal();
    };

    useEffect(() => {
        const getActivities = async () => {
            const allActivities = await getAllActivities();
            if (allActivities) setActivities(allActivities);
        };
        getActivities();
    }, []);

    const addActivity = async (activ) => {
        handleActivityModal();
        const response = await api.post('activities', activ);
        console.log(response.data);
        setActivities([...activities, response.data]);
    };

    const cancelActivity = () => {
        setActivity({ id: 0 });
        handleActivityModal();
    };

    const updateActivity = async (activ) => {
        handleActivityModal();
        const response = await api.put(`activities/${activ.id}`, activ);
        const { id } = response.data;
        setActivities(
            activities.map((item) => (item.id === id ? response.data : item))
        );
        setActivity({ id: 0 });
    };

    const deletarActivity = async (id) => {
        handleConfirmModal(0);
        if (await api.delete(`activities/${id}`)) {
            const activitiesFiltered = activities.filter(
                (activity) => activity.id !== id
            );
            setActivities([...activitiesFiltered]);
        }
    };

    const getActivity = (id) => {
        const activity = activities.filter((activity) => activity.id === id);
        setActivity(activity[0]);
        handleActivityModal();
    };

    return (
        <>
            <TitlePage title={'Activity ' + (activity.id !== 0 ? activity.id : '')} >
                <Button variant='outline-secondary' onClick={newActivity}>
                    <i className='fas fa-plus'></i>
                </Button>
            </TitlePage>

            <ActivityList
                activities={activities}
                getActivity={getActivity}
                handleConfirmModal={handleConfirmModal}
            />

            <Modal show={showActivityModal} onHide={handleActivityModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Activity {activity.id !== 0 ? activity.id : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ActivityForm
                        addActivity={addActivity}
                        cancelActivity={cancelActivity}
                        updateActivity={updateActivity}
                        activitySelected={activity}
                        activities={activities}
                    />
                </Modal.Body>
            </Modal>

            <Modal
                size='sm'
                show={smShowConfirmModal}
                onHide={handleConfirmModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Excluindo Activity{' '}
                        {activity.id !== 0 ? activity.id : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja Excluir a Activity {activity.id}
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <button
                        className='btn btn-outline-success me-2'
                        onClick={() => deletarActivity(activity.id)}
                    >
                        <i className='fas fa-check me-2'></i>
                        Sim
                    </button>
                    <button
                        className='btn btn-danger me-2'
                        onClick={() => handleConfirmModal(0)}
                    >
                        <i className='fas fa-times me-2'></i>
                        Não
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}