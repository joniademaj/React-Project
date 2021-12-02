import React from 'react'

const images = [
    {
        id: 1,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true',
        text: 'Choose your Microsoft 365'
    },
    {
        id: 2,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pndL?ver=5217&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true',
        text: 'Shop for Surface devices'
    },
    {
        id: 3,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pxBu?ver=eae5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true',
        text: 'Buy Xbox games and consoles'
    },
    {
        id: 4,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4sQDc?ver=30c2&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true',
        text: 'Get Windows 11'
    },
    {
        id: 5,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4pkvg?ver=0c4c&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true',
        text: 'Find your next PC'
    },
    {
        id: 6,
        img_link: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4rriw?ver=b2d5&q=90&m=6&h=40&w=40&b=%23FFFFFFFF&l=f&o=t&aim=true',
        text: 'Shop Business'
    }
];

function Options() {

    return (
        <div className="card-options">
            {images.map((img) => (
                <div>
                    <img src={img.img_link}></img>
                    <p>{img.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Options;