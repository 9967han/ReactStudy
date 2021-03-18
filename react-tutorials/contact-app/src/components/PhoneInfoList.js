import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }
    render() {
        const {data, onRemove} = this.props;
        const list = data.map(
            info => (
                <PhoneInfo info={info} key={info.id} onRemove={onRemove}/>
            )
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;