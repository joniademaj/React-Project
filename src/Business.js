import React from 'react'

const images = [
    {
        id: 1,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWNbPm?ver=7705&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Cyber Week for Business',
        text: 'Take productivity to the next level with cant-miss deals on select Surface for Business devices.'
    },
    {
        id: 2,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWGaY8?ver=2545&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Welcome to your Windows 365 Cloud PC',
        text: 'Securely stream your Windows experience from the Microsoft cloud to any device.'
    },
    {
        id: 3,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4E4rT?ver=2072&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Microsoft 365 for business',
        text: 'Stay a step ahead with powerful apps for productivity, connection and security.'
    },
    {
        id: 4,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLJcd?ver=7d9d&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Accelerate your sustainability journey',
        text: 'Record, report and reduce your organisation’s environmental impact with Microsoft Cloud for Sustainability – now available in preview.'
    }
];

function Business() {
    return (
        <div className="cards">
            {images.map((card) => (
                <div>
                    <img src={card.img_link}></img>
                    <h5>{card.title}</h5>
                    <p>{card.text}</p>
                </div> 
            ))}
        </div>
    )
}


export default Business;