import { useState, useEffect } from 'react';

const activityInicial = {
    id: 0,
    title: '',
    priority: 0,
    description: '',
};

export default function ActivityForm(props) {
    const [activity, setActivity] = useState(activityCurrent());

    useEffect(() => {
        if (props.activitySelected.id !== 0) setActivity(props.activitySelected);
    }, [props.activitySelected]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;

        setActivity({ ...activity, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.activitySelected.id !== 0) props.updateActivity(activity);
        else props.addActivity(activity);

        setActivity(activityInicial);
    };

    const handleCancel = (e) => {
        e.preventDefault();

        props.cancelActivity();

        setActivity(activityInicial);
    };

    function activityCurrent() {
        if (props.activitySelected.id !== 0) {
            return props.activitySelected ;
        } else {
            return activityInicial;
        }
    }

    return (
        <>
            <form className='row g-3' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                    <label className='form-label'>Title</label>
                    <input
                        name='title'
                        value={activity.title}
                        onChange={inputTextHandler}
                        id='title'
                        type='text'
                        className='form-control'
                    />
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Property</label>
                    <select
                        name='priority'
                        value={activity.priority}
                        onChange={inputTextHandler}
                        id='priority'
                        className='form-select'
                    >
                        <option value='Undefined'>Select...</option>
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className='form-label'>Description</label>
                    <textarea
                        name='description'
                        value={activity.description}
                        onChange={inputTextHandler}
                        id='description'
                        type='text'
                        className='form-control'
                    />
                    <hr />
                </div>
                <div className='col-12 mt-0'>
                    {activity.id === 0 ? (
                        <button
                            className='btn btn-outline-success'
                            type='submit'
                        >
                            <i className='fas fa-plus me-2'></i>
                            Save
                        </button>
                    ) : (
                        <>
                            <button
                                className='btn btn-outline-success me-2'
                                type='submit'
                            >
                                <i className='fas fa-plus me-2'></i>
                                Save
                            </button>
                            <button
                                className='btn btn-outline-warning'
                                onClick={handleCancel}
                            >
                                <i className='fas fa-plus me-2'></i>
                                Cancel
                            </button>
                        </>
                    )}
                </div>
            </form>
        </>
    );
}