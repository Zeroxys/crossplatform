import React, { Component } from 'react';
import devicesImage from '../../../../public/images/devices.png';

class AllDevice extends Component {
    render() {
        return (
            <div>
                <img src = { devicesImage } />
            </div>
        );
    }
}

export default AllDevice;