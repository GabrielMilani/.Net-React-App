import React from 'react';

export default function ActivityItem(props) {
    function propertyLabel(param) {
        switch (param) {
            case 'Low':
            case 'Medium':
            case 'High':
                return param;
            default:
                return 'Undefined';
        }
    }

    function propertyStyle(param, icone) {
        switch (param) {
            case 'Low':
                return icone ? 'smile' : 'success';
            case 'Medium':
                return icone ? 'meh' : 'dark';
            case 'High':
                return icone ? 'frown' : 'warning';
            default:
                return 'Undefined';
        }
    }

    return (
        <div
            className={
                'card mb-2 shadow-sm border-' +
                propertyStyle(props.activ.priority)
            }
        >
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        <span className='badge bg-secondary me-1'>
                            {props.activ.id}
                        </span>
                        - {props.activ.title}
                    </h5>
                    <h6>
                        Priority:
                        <span
                            className={
                                'ms-1 text-' +
                                propertyStyle(props.activ.priority)
                            }
                        >
                            <i className={'me-1 far fa-' + propertyStyle(props.activ.priority, true)}></i>
                            {propertyLabel(props.activ.priority)}
                        </span>
                    </h6>
                </div>
                <p className='card-text'>{props.activ.description}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button
                        className='btn btn-sm btn-outline-primary me-2'
                        onClick={() => props.getActivity(props.activ.id)}
                    >
                        <i className='fas fa-pen me-2'></i>
                        Edit
                    </button>
                    <button
                        className='btn btn-sm btn-outline-danger'
                        onClick={() => props.handleConfirmModal(props.activ.id)}
                    >
                        <i className='fas fa-trash me-2'></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}