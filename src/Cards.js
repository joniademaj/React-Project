import React from 'react'

const images = [
    {
        id: 1,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWOKbe?ver=a384&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Save now on Xbox',
        text: 'Discover now our best Xbox deals and save on consoles, games and more. Only available while stocks last.'
    },
    {
        id: 2,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLSia?ver=09bd&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Microsoft 365',
        text: 'Unwrap inspiration with best-in-class apps like Word, Excel and PowerPoint.'
    },
    {
        id: 3,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWNYG5?ver=5f3b&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Xbox Game Pass for PC',
        text: 'Unwrap 100+ great games and EA Play, plus get your first 3 months for £1. Offer available to new subscribers only.'
    },
    {
        id: 4,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWLHS1?ver=a8db&q=90&m=6&h=278&w=494&b=%23FFFFFFFF&l=f&o=t&aim=true',
        title: 'Save up to £180 on Surface Laptop Go',
        text: 'Our lightest Surface Laptop, get the style, performance, and all-day battery life you need, all at an exceptional value.'
    }
];

function Cards() {
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

export default Cards;