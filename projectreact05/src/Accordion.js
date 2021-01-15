import React, { useState } from 'react';

const Accodion = ({ data }) => {
    const [presentData, setData] = useState(null);

    const onTitleClick = index => {
        setData(index);
    }

    const renderedData = data.map((item, index) => {
        const active = presentData === index ? 'active' : ''

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    })

    return (
        <div className="ui styled accordion">
            {renderedData}
        </div>
    );
}

export default Accodion;