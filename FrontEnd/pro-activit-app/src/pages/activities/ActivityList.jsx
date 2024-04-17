import React from 'react';
import ActivityItem from './ActivityItem';


export default function ActivityList(props) {
    return (
        <div className='mt-3'>
            {props.activities.map((activ) => (
                <ActivityItem
                    key={activ.id}
                    activ={activ}
                    getActivity={props.getActivity}
                    handleConfirmModal={props.handleConfirmModal}
                />
            ))}
        </div>
    );
}