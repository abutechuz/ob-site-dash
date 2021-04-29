import './Settings.scss'
import React from 'react'
import { client } from '../../utils/api-client'

function Settings() {
    function handleSubmit(evt) {
        evt.preventDefault()

        const { adminName, adminPassword } = evt.target.elements

        client('createadmin', {
            data: {
                username: adminName.value.trim(),
                password: adminPassword.value.trim(),
            },
        }).then((data) => console.log(data))
    }
    return (
        <div className='settings-section stats'>
            <form
                className='settings-form'
                method='POST'
                onSubmit={handleSubmit}
                autoComplete='off'
                spellCheck='false'>
                <h2 className='settings-form__heading'>Create User</h2>
                <div className='form-input__wrapper'>
                    <label className='form-input__label' htmlFor='username'>
                        Username
                    </label>
                    <div className='form-input__inner'>
                        <svg
                            width={23}
                            height={23}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'>
                            <path
                                fill='hsla(0,0%,100%,.5)'
                                d='m463.09375 406.492188c31.71875-43.519532 48.90625-95.886719 48.90625-150.503907 0-141.480469-114.496094-255.988281-256-255.988281-141.488281 0-256 114.492188-256 255.988281 0 54.601563 17.179688 106.953125 48.878906 150.464844 102.132813-140.484375 311.9375-140.609375 414.214844.039063zm-297.09375-255.5c0-49.621094 40.375-89.996094 90-89.996094s90 40.375 90 89.996094v30c0 49.625-40.375 89.996093-90 89.996093s-90-40.371093-90-89.996093zm0 0'
                            />
                            <path
                                fill='hsla(0,0%,100%,.5)'
                                d='m256 240.988281c33.085938 0 60-26.914062 60-59.996093v-30c0-33.082032-26.914062-59.996094-60-59.996094s-60 26.914062-60 59.996094v30c0 33.082031 26.914062 59.996093 60 59.996093zm0 0'
                            />
                            <path
                                fill='hsla(0,0%,100%,.5)'
                                d='m68.757812 430.527344c101.289063 108.601562 273.167969 108.683594 374.550782-.074219-89.375-132.792969-284.695313-132.1875-374.550782.074219zm0 0'
                            />
                        </svg>
                        <input
                            className='form-input'
                            type='text'
                            id='adminName'
                            name='adminName'
                            placeholder='Username'
                            required
                        />
                    </div>
                </div>
                <div className='form-input__wrapper'>
                    <label className='form-input__label' htmlFor='password'>
                        Password
                    </label>
                    <div className='form-input__inner'>
                        <svg
                            width={23}
                            height={23}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512.65 512.65'>
                            <path
                                fill='hsla(0,0%,100%,.5)'
                                d='M409.925,205.45h-230.4v-74.24c0-38.4,25.6-71.68,61.44-79.36c48.64-7.68,92.16,28.16,92.16,76.8 c0,15.36,12.8,25.6,25.6,25.6c12.8,0,25.6-10.24,25.6-25.6c0-74.24-64-135.68-140.8-128c-66.56,7.68-115.2,66.56-115.2,133.12 v71.68h-25.6c-12.8,0-25.6,10.24-25.6,25.6v256c0,12.8,12.8,25.6,25.6,25.6h307.2c15.36,0,25.6-12.8,25.6-25.6v-256 C435.525,215.69,425.285,205.45,409.925,205.45z M281.925,376.97v33.28c0,15.36-10.24,25.6-25.6,25.6s-25.6-10.24-25.6-25.6 v-33.28c-15.36-10.24-25.6-25.6-25.6-43.52c0-33.28,30.72-56.32,64-48.64c17.92,5.12,33.28,20.48,38.4,38.4 C312.645,346.25,299.845,366.73,281.925,376.97z'
                            />
                        </svg>
                        <input
                            className='form-input'
                            type='password'
                            id='adminPassword'
                            name='adminPassword'
                            placeholder='Password'
                            required
                        />
                    </div>
                    <button className='settings-submit__btn'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Settings
