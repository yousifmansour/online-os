import React from 'react';
import './SettingsAppComponent.css';

const SettingsAppComponent = ({backgroundIndex, backgrounds, handleBackgroundToggle}) => {
    // console.log(backgrounds);
    const images = backgrounds.map((image, i) => {
        let classes = ['background'];
        if (i === backgroundIndex) 
            classes.push('selected');
        return (
            <div key={i} className={classes.join(' ')}>
                <img onClick={() => handleBackgroundToggle(i)} src={image}/>
            </div>
        )
    });

    let currentBackground = '';

    if (backgrounds) 
        currentBackground = backgrounds[backgroundIndex];
    
    return (
        <div
            style={{
            background: `center / cover no-repeat url(${currentBackground})`
        }}
            className='settings-app-component'>
            <h2 className='title'>Choose Background</h2>

            <div className='image-selector'>
                {images}
            </div>
        </div>
    );
}

export default SettingsAppComponent;
